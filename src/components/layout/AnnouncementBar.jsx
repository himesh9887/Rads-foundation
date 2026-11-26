import { useState } from "react";
import { Phone, Mail, X } from "lucide-react";
import { CONTACT } from "../../utils/constants";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative hidden bg-navy-900 text-navy-100 sm:block">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 container-px py-2 text-xs sm:text-sm">
        <p className="truncate font-medium text-navy-200">
          Every contribution creates a ripple of change — thank you for being part of it.
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="hidden items-center gap-1.5 text-navy-200 transition-colors hover:text-orange-400 md:flex"
          >
            <Phone size={14} />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden items-center gap-1.5 text-navy-200 transition-colors hover:text-orange-400 lg:flex"
          >
            <Mail size={14} />
            {CONTACT.email}
          </a>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="flex h-6 w-6 items-center justify-center rounded-full text-navy-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
