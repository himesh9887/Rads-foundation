import { useMemo } from "react";
import {
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  Users,
  Sprout,
  Building2,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { getImageSource } from "../../utils/media";

const THEME_CONFIG = {
  education: { icon: GraduationCap, from: "#12253F", to: "#2C4C74" },
  healthcare: { icon: HeartPulse, from: "#E2660A", to: "#FB923C" },
  food: { icon: UtensilsCrossed, from: "#12253F", to: "#E2660A" },
  women: { icon: Users, from: "#F5790E", to: "#12253F" },
  rural: { icon: Sprout, from: "#071224", to: "#2C4C74" },
  community: { icon: Building2, from: "#BC5109", to: "#12253F" },
  donate: { icon: HeartHandshake, from: "#F5790E", to: "#BC5109" },
  general: { icon: Sparkles, from: "#12253F", to: "#4E76A0" },
};

function seededDecor(seed = 1) {
  const a = (seed * 37) % 100;
  const b = (seed * 61) % 100;
  const c = (seed * 83) % 100;
  return [
    { top: `${(a % 40) - 10}%`, left: `${b % 60}%`, size: 90 + (a % 60) },
    { bottom: `${(c % 30) - 10}%`, right: `${a % 50}%`, size: 60 + (b % 50) },
  ];
}

/**
 * Renders a real photo if one has been registered in `src/utils/media.js`,
 * otherwise falls back to a branded illustration so the site never ships
 * broken image links or unlicensed stock photography.
 */
export default function ThemedVisual({
  theme = "general",
  seed = 1,
  srcKey,
  alt = "",
  className = "",
  iconSize = 56,
  rounded = "rounded-2xl",
}) {
  const realSrc = getImageSource(srcKey);
  const config = THEME_CONFIG[theme] || THEME_CONFIG.general;
  const Icon = config.icon;
  const decor = useMemo(() => seededDecor(seed), [seed]);

  if (realSrc) {
    return (
      <img
        src={realSrc}
        alt={alt}
        className={`${rounded} object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      {...(alt
        ? { role: "img", "aria-label": alt }
        : { "aria-hidden": "true" })}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${config.from}, ${config.to})`,
      }}
    >
      <div className="absolute inset-0 opacity-70 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
      {decor.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            left: d.left,
            bottom: d.bottom,
            right: d.right,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={iconSize} className="text-white/90" strokeWidth={1.5} />
      </div>
    </div>
  );
}
