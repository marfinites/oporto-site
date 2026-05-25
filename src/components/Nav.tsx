import Link from "next/link";
import { LogoWordmark } from "./Logo";

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
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[var(--bg)]/85 border-b border-[var(--border)]">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center group">
          <LogoWordmark className="h-9 md:h-11 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-7 mono">
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
