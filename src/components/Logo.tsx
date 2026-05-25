import Image from "next/image";

type Variant = "white" | "black" | "red" | "yellow";

export function Logo({
  size = 96,
  variant = "black",
  className = "",
}: {
  size?: number;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Image
      src={`/logo-clean-${variant}.png`}
      alt="Oporto Dancehall"
      width={size}
      height={size}
      className={className}
      priority
      unoptimized
    />
  );
}

/**
 * Wordmark — texto OPORTO / DANCEHALL stacked, sem círculo.
 * Para sítios onde o logo circular é grande demais (nav, footer compact).
 */
export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col leading-[0.82] font-display ${className}`}>
      <span className="tracking-tight text-[1em]">OPORTO</span>
      <span className="tracking-tight text-[0.78em]">DANCEHALL</span>
    </div>
  );
}
