import { ShieldCheck, Smartphone, CreditCard } from "lucide-react";
import Button from "../ui/Button";
import DonationQRCode from "./DonationQRCode";
import DonationStatusBanner from "./DonationStatusBanner";
import { formatCurrency } from "../../utils/payment";

/**
 * The "Pay Now" action, split out so it can be rendered either inline (the
 * /donate page, where the page itself scrolls) or inside a sticky footer
 * (the modal — see DonationModal). Same Button component and styling in
 * both cases; only the placement differs.
 */
export function DonationPayButton({ isSubmitting, onPayNow }) {
  return (
    <Button
      type="button"
      variant="primary"
      size="lg"
      fullWidth
      icon={ShieldCheck}
      onClick={onPayNow}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Opening UPI app..." : "Pay Now"}
    </Button>
  );
}

/**
 * UPI donation panel.
 *
 * Scanning the official QR is the PRIMARY donation method; "Pay Now" is the
 * secondary convenience path that opens a standard UPI intent for the same
 * recipient the QR encodes (radsrj@sbi / RURAL AREA DEVELOPMENT SOCIETY),
 * pre-filled with the donor's selected amount.
 *
 * Pay Now only ever reports whether a UPI app was *opened* — it never
 * claims a payment succeeded. Real confirmation needs a backend/gateway,
 * which is intentionally not implemented (see donationService.verifyDonation).
 *
 * `showAction` lets the modal opt out of the inline button so it can render
 * DonationPayButton in a sticky footer instead; the panel is otherwise
 * identical in both places.
 */
export default function PaymentMethod({
  amount,
  status,
  isSubmitting,
  onPayNow,
  showAction = true,
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-navy-800">Payment method</p>

      <div className="rounded-xl border-2 border-orange-500 bg-orange-50/60 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
              <Smartphone size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">UPI Payment</p>
              <p className="text-xs text-navy-500">GPay, PhonePe, Paytm &amp; more</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
              Donation Amount
            </p>
            <p className="text-xl font-extrabold text-navy-900">
              {amount ? formatCurrency(amount) : "—"}
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonationQRCode className="mx-auto sm:mx-0" />

          <div className="flex flex-col gap-3">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-navy-400 sm:text-left">
              How to donate
            </p>
            <ol className="flex list-decimal flex-col gap-1.5 pl-4 text-left text-sm leading-relaxed text-navy-600">
              <li>Open PhonePe, Google Pay, Paytm or any UPI app.</li>
              <li>Scan the QR code shown here.</li>
              <li>
                Enter{" "}
                <span className="font-semibold text-navy-800">
                  {amount ? formatCurrency(amount) : "your amount"}
                </span>{" "}
                and complete the payment.
              </li>
            </ol>
            <p className="text-left text-xs leading-relaxed text-navy-500">
              Already on your phone? Tap{" "}
              <span className="font-semibold text-navy-700">Pay Now</span>{" "}
              to open your UPI app directly with the amount filled in.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg bg-navy-50 px-3 py-2 text-xs text-navy-400">
        <CreditCard size={14} className="shrink-0 opacity-60" />
        Card, Netbanking &amp; Wallets — coming soon
      </div>

      {status && (
        <div className="mt-4">
          <DonationStatusBanner status={status} />
        </div>
      )}

      <p className="mt-4 flex items-start gap-1.5 text-xs leading-relaxed text-navy-400">
        <ShieldCheck size={14} className="mt-0.5 shrink-0" />
        Pay Now opens a UPI payment request on your device — it does not
        complete or confirm the payment by itself. RADS never collects or
        stores your payment details, and donations are currently verified
        manually because a payment gateway is not yet connected.
      </p>

      {showAction && (
        <div className="mt-5">
          <DonationPayButton isSubmitting={isSubmitting} onPayNow={onPayNow} />
        </div>
      )}
    </div>
  );
}
