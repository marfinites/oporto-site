export function LogoCircle({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      className={className}
      role="img"
      aria-label="Oporto Dancehall logo"
    >
      <circle cx="120" cy="120" r="116" stroke="currentColor" strokeWidth="3" />
      <g fill="currentColor">
        <rect x="103" y="98" width="34" height="6" />
        <rect x="107" y="86" width="26" height="12" />
        <rect x="109" y="74" width="22" height="12" />
        <rect x="111" y="62" width="18" height="12" />
        <path d="M 120 38 L 130 62 L 110 62 Z" />
        <rect x="118.5" y="28" width="3" height="12" />
        <rect x="115" y="32" width="10" height="3" />
      </g>
      <defs>
        <path id="topArc" d="M 30 120 A 90 90 0 0 1 210 120" />
        <path id="bottomArc" d="M 30 130 A 90 90 0 0 0 210 130" />
      </defs>
      <text fill="currentColor" fontFamily="'Anton', 'Bebas Neue', Impact, sans-serif" fontSize="32" letterSpacing="4">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          OPORTO
        </textPath>
      </text>
      <text fill="currentColor" fontFamily="'Anton', 'Bebas Neue', Impact, sans-serif" fontSize="26" letterSpacing="3">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          DANCEHALL
        </textPath>
      </text>
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      className={className}
      role="img"
      aria-label="Oporto Dancehall"
    >
      <g fill="currentColor" transform="translate(0, 8)">
        <rect x="20" y="44" width="24" height="4" />
        <rect x="22" y="36" width="20" height="8" />
        <rect x="24" y="28" width="16" height="8" />
        <rect x="26" y="20" width="12" height="8" />
        <path d="M 32 4 L 40 20 L 24 20 Z" />
        <rect x="30.5" y="-2" width="3" height="8" />
        <rect x="28" y="0" width="8" height="3" />
      </g>
      <text x="60" y="38" fontFamily="'Anton', 'Bebas Neue', Impact, sans-serif" fontSize="34" letterSpacing="3" fill="currentColor">
        OPORTO
      </text>
      <text x="60" y="68" fontFamily="'Anton', 'Bebas Neue', Impact, sans-serif" fontSize="26" letterSpacing="2.5" fill="currentColor">
        DANCEHALL
      </text>
    </svg>
  );
}
