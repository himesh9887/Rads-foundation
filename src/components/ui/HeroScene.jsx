/**
 * A hand-built, local SVG illustration of a rural village at dusk — used as
 * the hero background in place of external stock photography. Fully local,
 * no network dependency, brand colors only.
 */
export default function HeroScene({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a rural village at dusk with hills, huts and a rising sun"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#071224" />
          <stop offset="45%" stopColor="#12253F" />
          <stop offset="78%" stopColor="#BC5109" />
          <stop offset="100%" stopColor="#F5790E" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEDD5" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#FDBA74" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FDBA74" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3355" />
          <stop offset="100%" stopColor="#12253F" />
        </linearGradient>
        <linearGradient id="hillMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F1E33" />
          <stop offset="100%" stopColor="#0B1B30" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#sky)" />

      <circle cx="1180" cy="560" r="230" fill="url(#sunGlow)" />
      <circle cx="1180" cy="560" r="90" fill="#FFF7ED" opacity="0.9" />

      <path
        d="M420,120 q18,-10 34,0 M470,150 q18,-10 34,0"
        stroke="#FDBA74"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />

      <path
        d="M0,540 C220,470 380,590 620,520 C860,450 1000,560 1220,500 C1360,460 1480,520 1600,480 L1600,900 L0,900 Z"
        fill="url(#hillFar)"
        opacity="0.85"
      />

      <path
        d="M0,650 C180,600 340,690 560,640 C800,585 980,680 1220,630 C1380,600 1500,650 1600,620 L1600,900 L0,900 Z"
        fill="url(#hillMid)"
      />

      <g opacity="0.9">
        <path d="M120,760 L160,700 L200,760 Z" fill="#0B1B30" />
        <rect x="140" y="760" width="40" height="34" fill="#0B1B30" />
        <rect x="152" y="770" width="14" height="14" fill="#F5790E" opacity="0.75" />

        <path d="M250,780 L300,705 L350,780 Z" fill="#071224" />
        <rect x="272" y="780" width="56" height="40" fill="#071224" />
        <rect x="288" y="792" width="16" height="16" fill="#FDBA74" opacity="0.7" />

        <path d="M1240,790 L1285,725 L1330,790 Z" fill="#071224" />
        <rect x="1258" y="790" width="54" height="38" fill="#071224" />
        <rect x="1274" y="802" width="16" height="16" fill="#F5790E" opacity="0.7" />

        <path d="M1360,770 L1396,715 L1432,770 Z" fill="#0B1B30" />
        <rect x="1374" y="770" width="44" height="32" fill="#0B1B30" />
      </g>

      <g opacity="0.9">
        <path
          d="M60,900 C60,760 40,700 20,650"
          stroke="#0B1B30"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="15" cy="640" rx="70" ry="46" fill="#0B1B30" />
        <ellipse cx="60" cy="610" rx="55" ry="38" fill="#0B1B30" />
        <ellipse cx="-15" cy="615" rx="50" ry="34" fill="#0B1B30" />
      </g>

      <g stroke="#FED7AA" strokeWidth="4" strokeLinecap="round" opacity="0.6">
        <path d="M700,180 q14,-14 28,0 q14,-14 28,0" fill="none" />
        <path d="M780,220 q12,-12 24,0 q12,-12 24,0" fill="none" />
      </g>

      <path
        d="M0,860 C260,820 420,880 700,850 C980,820 1120,870 1600,835 L1600,900 L0,900 Z"
        fill="#071224"
      />
    </svg>
  );
}
