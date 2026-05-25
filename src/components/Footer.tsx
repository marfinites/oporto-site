import Link from "next/link";
import { LogoCircle } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--border)]">
      {/* Massive wordmark band */}
      <div className="border-b border-[var(--border)] overflow-hidden py-12 md:py-20">
        <div className="container-x">
          <div className="display-xl text-[var(--fg-subtle)] select-none">
            OPORTO<br/>DANCEHALL<sup className="text-[var(--accent)]">2.0</sup>
          </div>
        </div>
      </div>

      <div className="container-x py-12 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex items-start gap-4">
          <LogoCircle size={56} className="text-[var(--fg)] shrink-0" />
          <div>
            <p className="text-sm leading-relaxed text-[var(--fg-muted)] max-w-xs">
              Festa de dancehall jamaicano no Porto desde 2014.
              Novo capítulo a chegar em 2026.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="mono mb-3 text-[var(--fg-subtle)]">Sítio</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/arquivo" className="hover:text-[var(--accent)]">Arquivo</Link></li>
            <li><Link href="/sobre" className="hover:text-[var(--accent)]">Sobre</Link></li>
            <li><Link href="/eventos" className="hover:text-[var(--accent)]">Eventos</Link></li>
            <li><Link href="/press" className="hover:text-[var(--accent)]">Press</Link></li>
            <li><Link href="/contactos" className="hover:text-[var(--accent)]">Contactos</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="mono mb-3 text-[var(--fg-subtle)]">Redes</div>
          <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
            <li>Instagram <span className="mono">(em breve)</span></li>
            <li>TikTok <span className="mono">(em breve)</span></li>
            <li>YouTube <span className="mono">(em breve)</span></li>
            <li>Facebook <span className="mono">(em breve)</span></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="mono mb-3 text-[var(--fg-subtle)]">Contacto directo</div>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@oportodancehall.com" className="hover:text-[var(--accent)]">hello@oportodancehall.com</a></li>
            <li><a href="mailto:press@oportodancehall.com" className="hover:text-[var(--accent)]">press@oportodancehall.com</a></li>
            <li><a href="mailto:bookings@oportodancehall.com" className="hover:text-[var(--accent)]">bookings@oportodancehall.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-6">
        <div className="container-x flex justify-between mono text-[var(--fg-subtle)]">
          <span>© 2014–{new Date().getFullYear()} Oporto Dancehall</span>
          <span>Porto · Portugal</span>
        </div>
      </div>
    </footer>
  );
}
