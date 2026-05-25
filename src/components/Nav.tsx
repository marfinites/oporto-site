import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/arquivo", label: "Arquivo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/eventos", label: "Eventos" },
  { href: "/press", label: "Press" },
  { href: "/contactos", label: "Contactos" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[var(--bg)]/70 border-b border-[var(--border)]">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-3xl leading-none">
            OPORTO DANCEHALL
          </span>
          <span
            className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)]"
            aria-label="versão 2.0"
          >
            2.0
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contactos"
          className="md:hidden text-xs uppercase tracking-wider text-[var(--accent)]"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
