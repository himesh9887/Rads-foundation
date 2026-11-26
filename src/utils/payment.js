import {
  PAYMENT_CONFIG,
  DONATION_MIN_AMOUNT,
  DONATION_MAX_AMOUNT,
} from "./constants";

/**
 * ============================================================================
 * FRONTEND-ONLY UPI PAYMENT UTILITY
 * ============================================================================
 * This module ONLY generates a UPI deep-link ("UPI intent") and attempts to
 * open it on the user's device. It does NOT and CANNOT verify whether a
 * payment actually succeeded — that requires a backend + payment gateway
 * (or bank webhook) integration which is intentionally NOT implemented here.
 *
 * When a real payment gateway / backend is added later, only the
 * `initiateDonationPayment` function below needs to be extended (e.g. to
 * call an API and redirect to a gateway checkout page). The donation UI
 * components should keep calling this same function and never assume
 * success beyond what it reports.
 * ============================================================================
 */

export const PAYMENT_STATUS = Object.freeze({
  IDLE: "idle",
  INVALID: "invalid",
  APP_OPENED: "app_opened",
  FALLBACK_NO_APP: "fallback_no_app",
  ERROR: "error",
});

/**
 * Validates a donation amount entered by the user.
 * @param {string|number} rawAmount
 * @returns {{ isValid: boolean, amount: number|null, error: string|null }}
 */
export function validateDonationAmount(rawAmount) {
  if (rawAmount === "" || rawAmount === null || rawAmount === undefined) {
    return { isValid: false, amount: null, error: "Please enter an amount." };
  }

  const normalized = String(rawAmount).trim();

  if (!/^\d+(\.\d{1,2})?$/.test(normalized)) {
    return {
      isValid: false,
      amount: null,
      error: "Please enter a valid amount using numbers only.",
    };
  }

  const amount = Number(normalized);

  if (!Number.isFinite(amount) || amount <= 0) {
    return {
      isValid: false,
      amount: null,
      error: "Amount must be greater than zero.",
    };
  }

  if (amount < DONATION_MIN_AMOUNT) {
    return {
      isValid: false,
      amount: null,
      error: `Minimum donation amount is ₹${DONATION_MIN_AMOUNT}.`,
    };
  }

  if (amount > DONATION_MAX_AMOUNT) {
    return {
      isValid: false,
      amount: null,
      error: `For donations above ₹${formatCurrency(
        DONATION_MAX_AMOUNT
      )}, please contact us directly.`,
    };
  }

  return { isValid: true, amount, error: null };
}

/**
 * Formats a number as an Indian Rupee currency string.
 * @param {number} amount
 */
export function formatCurrency(amount) {
  if (!Number.isFinite(amount)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

/**
 * Generates a client-side reference string for display/tracking purposes
 * only. This is NOT a verified transaction ID from any bank or payment
 * gateway — it simply helps correlate a donor's attempt in the UI/logs.
 */
export function generateDonationReference() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `RADS-${timestamp}-${random}`;
}

/**
 * Builds a minimal, standard UPI deep link ("UPI intent") of the form:
 * upi://pay?pa=...&pn=...&am=...&cu=INR
 *
 * `pa` (payee VPA) and `pn` (payee name) come from PAYMENT_CONFIG, which is
 * kept in sync with the official donation QR (src/assets/donation/
 * rads-donation-qr.png) — this intent always pays the SAME recipient as
 * scanning that QR. The QR itself carries no amount (`am=` is empty in its
 * payload); only this dynamically generated intent applies the donor's
 * selected amount.
 *
 * Deliberately minimal by design — two things matter here:
 *
 * 1. The donation QR is a *signed* NPCI merchant QR (it carries `orgid`
 *    and `sign` alongside `mc=8641`). That signature covers the QR's own
 *    payload, so it cannot be replayed into an intent that adds a
 *    donor-chosen amount. Rather than emit merchant fields (`mc`, `tr`,
 *    `orgid`) with a signature that would no longer validate, this builds
 *    the plain unsigned intent form, which every UPI app accepts.
 *    `note`/`reference` are still accepted here for future use (e.g. once
 *    a real gateway integration exists) but are intentionally NOT written
 *    into the URI.
 * 2. Values must be percent-encoded per RFC 3986 (`%20` for spaces), not
 *    `application/x-www-form-urlencoded` style (`URLSearchParams` emits
 *    `+` for spaces). `upi://` is a plain URI, not a form body, so `+`
 *    should not be relied on to mean space here — encodeURIComponent is
 *    used explicitly instead.
 *
 * @param {{ amount: number, note?: string, reference?: string }} params
 */
export function buildUpiIntentUrl({ amount }) {
  const { upiId, payeeName, currency } = PAYMENT_CONFIG;

  const query = [
    ["pa", upiId],
    ["pn", payeeName],
    ["am", String(amount)],
    ["cu", currency],
  ]
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return `upi://pay?${query}`;
}

function isLikelyMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /android|iphone|ipad|ipod/i.test(navigator.userAgent || "");
}

/**
 * Attempts to open a UPI payment app using a deep link, without ever
 * claiming that a payment succeeded.
 *
 * Behaviour:
 * - Builds the UPI intent URL from the validated amount.
 * - On mobile devices, attempts to navigate to the UPI URL. If the browser
 *   tab loses visibility shortly after (a strong signal a UPI app opened),
 *   resolves with PAYMENT_STATUS.APP_OPENED.
 * - If no app appears to have opened (e.g. desktop browser, or no UPI app
 *   installed), resolves with PAYMENT_STATUS.FALLBACK_NO_APP so the UI can
 *   show guidance instead of a false failure or success message.
 *
 * @param {{ amount: number, note?: string, reference?: string }} params
 * @returns {Promise<{ status: string, url: string, reference: string }>}
 */
export function initiateUpiPayment({ amount, note, reference }) {
  const donationReference = reference || generateDonationReference();
  const url = buildUpiIntentUrl({ amount, note, reference: donationReference });

  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve({ status: PAYMENT_STATUS.ERROR, url, reference: donationReference });
      return;
    }

    if (!isLikelyMobileDevice()) {
      // Desktop browsers generally cannot open a upi:// link. Report this
      // clearly instead of pretending the payment app launched.
      resolve({
        status: PAYMENT_STATUS.FALLBACK_NO_APP,
        url,
        reference: donationReference,
      });
      return;
    }

    let settled = false;
    const settle = (status) => {
      if (settled) return;
      settled = true;
      document.removeEventListener("visibilitychange", onVisibilityChange);
      resolve({ status, url, reference: donationReference });
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        settle(PAYMENT_STATUS.APP_OPENED);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    try {
      window.location.href = url;
    } catch {
      settle(PAYMENT_STATUS.ERROR);
      return;
    }

    // If the tab hasn't lost visibility after a short delay, assume no UPI
    // app was available to handle the intent.
    window.setTimeout(() => settle(PAYMENT_STATUS.FALLBACK_NO_APP), 1800);
  });
}
