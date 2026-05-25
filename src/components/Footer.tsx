import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--border)] py-12">
      <div className="container-x flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <div className="font-display text-3xl leading-none">
            OPORTO DANCEHALL <span className="text-[var(--accent)]">2.0</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-[var(--fg-muted)]">
            A festa de dancehall do Porto desde 2014. Novo capítulo a chegar.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-12 text-sm">
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-3">
              Navegação
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/arquivo" className="hover:text-[var(--accent)]">
                  Arquivo
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[var(--accent)]">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-[var(--accent)]">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-[var(--accent)]">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-3">
              Redes
            </div>
            <ul className="space-y-2">
              <li>Instagram (em breve)</li>
              <li>TikTok (em breve)</li>
              <li>YouTube (em breve)</li>
              <li>Facebook (em breve)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-x mt-8 pt-8 border-t border-[var(--border)] text-xs text-[var(--fg-muted)] flex justify-between">
        <span>© 2014–{new Date().getFullYear()} Oporto Dancehall</span>
        <span>Porto, Portugal</span>
      </div>
    </footer>
  );
}
