import { ExternalLink } from "lucide-react";
import qrCodeImage from "../../assets/donation/rads-donation-qr.png";

/**
 * Displays the foundation's official, static UPI donation QR.
 *
 * The image at src/assets/donation/rads-donation-qr.png is used EXACTLY as
 * supplied — byte-for-byte, uncropped, with no filters, overlays or CSS
 * transforms over it. It already carries its own "SCAN & PAY" heading and
 * "UPI ID: radsrj@sbi" caption as part of the artwork, so this component
 * deliberately does not re-render those as separate text (which would show
 * them twice).
 *
 * Sizing note: the source image is 316x257. `max-w-[316px]` caps it at its
 * natural width so it is never upscaled past 1:1 — upscaling is what makes
 * a QR go soft and hurts scan reliability. It still scales DOWN fluidly on
 * narrow screens.
 *
 * The QR is static and encodes no amount, so the donor enters the amount in
 * their own UPI app. The "Pay Now" button in PaymentMethod pays the same
 * recipient via a UPI intent, with the selected amount pre-filled.
 */
export default function DonationQRCode({ className = "" }) {
  return (
    <div
      className={`flex w-full max-w-[316px] flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white p-3 shadow-soft sm:p-4 ${className}`}
    >
      <img
        src={qrCodeImage}
        alt="Official RADS Foundation UPI donation QR code — SCAN & PAY, UPI ID radsrj@sbi"
        width={316}
        height={257}
        className="h-auto w-full rounded-lg object-contain"
        decoding="async"
      />

      <p className="text-center text-xs leading-relaxed text-navy-500">
        Scan the QR using PhonePe, Google Pay, Paytm or any UPI app.
      </p>

      <a
        href={qrCodeImage}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-orange-600 underline-offset-2 transition-colors hover:text-orange-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      >
        <ExternalLink size={13} className="shrink-0" />
        Open / Save QR
      </a>
    </div>
  );
}
