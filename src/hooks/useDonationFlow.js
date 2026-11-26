import { useMemo, useState } from "react";
import { validateDonationAmount } from "../utils/payment";
import { donationService } from "../services/donationService";
import { PAYMENT_STATUS } from "../utils/payment";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;

const initialDonor = { name: "", mobile: "", email: "" };

/**
 * Shared donation flow state/logic used by both the DonationModal (quick
 * donate) and the full /donate page, so the two never drift apart.
 */
export function useDonationFlow() {
  const [selectedPreset, setSelectedPreset] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [donor, setDonor] = useState(initialDonor);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(PAYMENT_STATUS.IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reference, setReference] = useState(null);

  const rawAmount = isCustom ? customAmount : selectedPreset;

  const amountCheck = useMemo(
    () => validateDonationAmount(rawAmount),
    [rawAmount]
  );

  function selectPreset(amount) {
    setIsCustom(false);
    setSelectedPreset(amount);
    setCustomAmount("");
    setErrors((prev) => ({ ...prev, amount: null }));
    setStatus(PAYMENT_STATUS.IDLE);
  }

  function selectCustom(value) {
    setIsCustom(true);
    setCustomAmount(value.replace(/[^\d.]/g, ""));
    setErrors((prev) => ({ ...prev, amount: null }));
    setStatus(PAYMENT_STATUS.IDLE);
  }

  function updateDonor(field, value) {
    setDonor((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  }

  function validateDonor() {
    const nextErrors = {};
    if (donor.name.trim() && donor.name.trim().length < 2) {
      nextErrors.name = "Please enter a valid name.";
    }
    if (donor.mobile.trim() && !MOBILE_REGEX.test(donor.mobile.trim())) {
      nextErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (donor.email.trim() && !EMAIL_REGEX.test(donor.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    return nextErrors;
  }

  async function submitPayment() {
    const donorErrors = validateDonor();
    const nextErrors = { ...donorErrors };

    if (!amountCheck.isValid) {
      nextErrors.amount = amountCheck.error;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus(PAYMENT_STATUS.INVALID);
      return null;
    }

    setIsSubmitting(true);
    try {
      const result = await donationService.startDonation({
        amount: amountCheck.amount,
        note: `Donation${donor.name ? ` by ${donor.name.trim()}` : ""}`,
      });
      setStatus(result.status);
      setReference(result.reference);
      return result;
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset() {
    setSelectedPreset(500);
    setCustomAmount("");
    setIsCustom(false);
    setDonor(initialDonor);
    setErrors({});
    setStatus(PAYMENT_STATUS.IDLE);
    setReference(null);
  }

  return {
    selectedPreset,
    customAmount,
    isCustom,
    donor,
    errors,
    status,
    isSubmitting,
    reference,
    amount: amountCheck.amount,
    amountError: errors.amount,
    selectPreset,
    selectCustom,
    updateDonor,
    submitPayment,
    reset,
  };
}
