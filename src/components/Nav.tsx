import Link from "next/link";
import { Logo } from "./Logo";

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
    <header className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-md border-b-2 border-[var(--fg)]">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={44} variant="black" />
          <span className="hidden md:inline-flex flex-col leading-[0.85] font-display text-xl md:text-2xl tracking-tight">
            <span>OPORTO</span>
            <span>DANCEHALL</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 mono">
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
        <Link href="/contactos" className="md:hidden mono text-[var(--accent)]">
          Contacto →
        </Link>
      </div>
    </header>
  );
}
