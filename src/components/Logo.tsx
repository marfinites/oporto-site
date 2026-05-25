/**
 * Oporto Dancehall — logo vetorizado.
 * SVG inline para que `currentColor` resolva no contexto (preto / paper / amarelo / qualquer).
 * Single source of truth: edita aqui e propaga para todo o site.
 */
export function Logo({
  size = 96,
  className = "",
  title = "Oporto Dancehall",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      {/* Outer ring */}
      <circle
        cx="200"
        cy="200"
        r="186"
        stroke="currentColor"
        strokeWidth="10"
        fill="none"
      />

      {/* Torre dos Clérigos silhouette (evenodd cria janelas como cutouts) */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="
          M 198 38 h 4 v 8 h 6 v 4 h -6 v 14 h -4 v -14 h -6 v -4 h 6 z
          M 200 64 l 14 26 h -28 z
          M 184 92 h 32 v 4 h -32 z
          M 186 96 h 28 v 22 h -28 z
          M 183 118 h 34 v 4 h -34 z
          M 180 122 h 40 v 22 h -40 z
          M 178 144 h 44 v 4 h -44 z
          M 176 148 h 48 v 18 h -48 z
          M 174 166 h 52 v 4 h -52 z
          M 170 170 h 60 v 4 h -60 z
          M 190 100 h 4 v 14 h -4 z
          M 198 100 h 4 v 14 h -4 z
          M 206 100 h 4 v 14 h -4 z
          M 186 126 h 5 v 14 h -5 z
          M 197.5 126 h 5 v 14 h -5 z
          M 209 126 h 5 v 14 h -5 z
          M 184 152 h 6 v 10 h -6 z
          M 197 152 h 6 v 10 h -6 z
          M 210 152 h 6 v 10 h -6 z
        "
      />

      <defs>
        {/* Top arc — left→right curving up. Letters sit upright on top of arc. */}
        <path id="logoTopArc" d="M 50 230 A 165 165 0 0 1 350 230" />
        {/* Bottom arc — drawn right→left passing under, so letters stand upright. */}
        <path id="logoBottomArc" d="M 350 170 A 165 165 0 0 1 50 170" />
      </defs>

      <text
        fill="currentColor"
        fontFamily="Anton, 'Bebas Neue', Impact, sans-serif"
        fontSize="64"
        letterSpacing="8"
      >
        <textPath href="#logoTopArc" startOffset="50%" textAnchor="middle">
          OPORTO
        </textPath>
      </text>

      <text
        fill="currentColor"
        fontFamily="Anton, 'Bebas Neue', Impact, sans-serif"
        fontSize="52"
        letterSpacing="5"
      >
        <textPath href="#logoBottomArc" startOffset="50%" textAnchor="middle">
          DANCEHALL
        </textPath>
      </text>
    </svg>
  );
}

/**
 * Wordmark — só texto "OPORTO / DANCEHALL" stacked.
 * Sem círculo. Para nav, footer compacto, sítios onde o círculo é grande demais.
 */
export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col leading-[0.82] font-display ${className}`}>
      <span className="tracking-tight text-[1em]">OPORTO</span>
      <span className="tracking-tight text-[0.78em]">DANCEHALL</span>
    </div>
  );
}
