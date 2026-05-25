/**
 * Oporto Dancehall — logo vetorizado (potrace traced).
 * Usa CSS mask-image: o SVG file é o stencil, a cor vem de `currentColor`.
 * Trocar cor: `<Logo className="text-[var(--jam-yellow)]" />`
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
    <span
      role="img"
      aria-label={title}
      title={title}
      className={`inline-block align-middle ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/logo.svg)",
        maskImage: "url(/logo.svg)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/**
 * Wordmark — só texto "OPORTO / DANCEHALL" stacked.
 * Sem círculo. Para nav, footer compacto.
 */
export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col leading-[0.82] font-display ${className}`}>
      <span className="tracking-tight text-[1em]">OPORTO</span>
      <span className="tracking-tight text-[0.78em]">DANCEHALL</span>
    </div>
  );
}
