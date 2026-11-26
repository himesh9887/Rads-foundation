import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

/**
 * Text-based fallback brand mark. Replace the icon/wordmark below with a
 * real logo asset (e.g. an <img src={logo} />) once one is available —
 * this is the single place that renders the brand identity site-wide.
 */
export default function Logo({ light = false, compact = false, className = "" }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Rural Area Development Society — Home"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-soft transition-transform group-hover:scale-105">
        <HeartHandshake size={22} strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          RADS
        </span>
        {!compact && (
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${
              light ? "text-navy-200" : "text-navy-500"
            }`}
          >
            Rural Area Dev. Society
          </span>
        )}
      </span>
    </Link>
  );
}
