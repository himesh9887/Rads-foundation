import { AlertTriangle, Info, Smartphone } from "lucide-react";
import { PAYMENT_STATUS } from "../../utils/payment";

const STATUS_CONTENT = {
  [PAYMENT_STATUS.APP_OPENED]: {
    icon: Smartphone,
    tone: "border-orange-200 bg-orange-50 text-orange-800",
    title: "Payment process initiated",
    message:
      "Your UPI app should have opened to complete the payment. Final confirmation of your donation requires payment verification, which will be available once our payment gateway integration is live.",
  },
  [PAYMENT_STATUS.FALLBACK_NO_APP]: {
    icon: Info,
    tone: "border-navy-200 bg-navy-50 text-navy-800",
    title: "Couldn't open a UPI app automatically",
    message:
      "This can happen on desktop browsers or devices without a UPI app installed. Please open this page on a mobile device with GPay, PhonePe, PayTM or a similar UPI app, or use the UPI ID shown below to pay manually.",
  },
  [PAYMENT_STATUS.ERROR]: {
    icon: AlertTriangle,
    tone: "border-red-200 bg-red-50 text-red-800",
    title: "Something went wrong",
    message: "We couldn't start the payment process. Please try again.",
  },
  [PAYMENT_STATUS.INVALID]: {
    icon: AlertTriangle,
    tone: "border-red-200 bg-red-50 text-red-800",
    title: "Please check the highlighted fields",
    message: "Fix the errors above before continuing to payment.",
  },
};

export default function DonationStatusBanner({ status }) {
  const content = STATUS_CONTENT[status];
  if (!content) return null;

  const Icon = content.icon;

  return (
    <div
      role="status"
      className={`flex gap-3 rounded-xl border-2 p-4 ${content.tone}`}
    >
      <Icon size={20} className="mt-0.5 shrink-0" />
      <div>
        <p className="text-sm font-bold">{content.title}</p>
        <p className="mt-0.5 text-sm leading-relaxed">{content.message}</p>
      </div>
    </div>
  );
}
