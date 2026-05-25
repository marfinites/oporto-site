import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t-2 border-[var(--fg)]">
      {/* Massive wordmark band */}
      <div className="border-b-2 border-[var(--fg)] overflow-hidden py-12 md:py-20 bg-[var(--bg-elevated)]">
        <div className="container-x">
          <div className="display-xl text-[var(--fg)] select-none leading-[0.85]">
            OPORTO<br />
            <span className="italic-serif text-[var(--jam-red)]">dancehall</span><br />
            2.0
          </div>
        </div>
      </div>

      {/* Jamaica stripe */}
      <div aria-hidden className="grid grid-cols-3 h-3 md:h-4 border-b-2 border-[var(--fg)]">
        <div className="bg-[var(--jam-green)]" />
        <div className="bg-[var(--jam-yellow)]" />
        <div className="bg-[var(--jam-red)]" />
      </div>

      <div className="container-x py-14 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex items-start gap-4">
          <Logo size={64} variant="black" className="shrink-0 rotate-neg6" />
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

      <div className="border-t-2 border-[var(--fg)] py-6 bg-[var(--fg)] text-[var(--paper)]">
        <div className="container-x flex justify-between mono">
          <span>© 2014–{new Date().getFullYear()} Oporto Dancehall</span>
          <span>Porto · Portugal</span>
        </div>
      </div>
    </footer>
  );
}
