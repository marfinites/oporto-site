import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VibeSwitcher } from "@/components/VibeSwitcher";
import { VENUES_PASSADOS, ARTISTAS_PASSADOS, PRESS } from "@/lib/archive";

export const metadata = {
  title: "Sobre · Oporto Dancehall 2.0",
  description: "A história da festa de dancehall do Porto.",
};

export default function SobrePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="container-x py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Sobre nós
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-none">
              A história.
            </h1>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
                <p>
                  Oporto Dancehall nasceu em 2014 com uma ideia simples:{" "}
                  <strong className="text-[var(--fg)]">
                    o Porto merecia noites de dancehall jamaicano a sério
                  </strong>
                  . Não &ldquo;reggae chill&rdquo;, não &ldquo;world music&rdquo;.{" "}
                  Dancehall do duro — riddims, dubplates, gyals dance, soundclash.
                </p>
                <p>
                  Em 2014/2015 enchemos as primeiras Summer Sessions no Desperados.
                  Em 2015/2016 saltámos para o{" "}
                  <strong className="text-[var(--fg)]">Hard Club</strong>, o{" "}
                  <strong className="text-[var(--fg)]">Armazém do Chá</strong> e
                  o <strong className="text-[var(--fg)]">Gare Porto</strong> com lotações
                  esgotadas e cobertura no Correio da Manhã, Jornal de Notícias,
                  Cidade FM e Rádio Nova.
                </p>
                <p>
                  No carnaval de 2016 celebrámos o 3.º aniversário com os mítos
                  Firestarter Sound, Still Lion e One Vibe — depois fizemos uma
                  pausa.
                </p>
                <p>
                  Em <strong className="text-[var(--fg)]">2025</strong> voltámos
                  ao Gare Porto para as Summer Sessions com Bélgica e Jamaica
                  representadas.
                </p>
                <p className="text-2xl font-display leading-tight text-[var(--fg)]">
                  Em <span className="text-[var(--accent)]">2026</span> voltamos
                  em força. Site, calendário, novos parceiros. Mesmo espírito.
                </p>
              </div>
              <aside className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                    Clubes onde tocámos
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {VENUES_PASSADOS.map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                    DJs & Crews
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {ARTISTAS_PASSADOS.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                    Imprensa
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {PRESS.map((p) => (
                      <li key={p.outlet}>
                        {p.outlet}{" "}
                        <span className="text-[var(--fg-muted)] text-xs">
                          ({p.year})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container-x py-20 border-t border-[var(--border)]">
          <h2 className="font-display text-5xl md:text-6xl mb-12">Timeline</h2>
          <ol className="space-y-8 relative border-l border-[var(--border)] pl-8">
            <TimelineItem
              year="2014"
              title="Arranque"
              desc="Primeiras Summer Sessions no Desperados. Identidade visual nasce. Slogan: 'Bad girls go to Oporto Dancehall.'"
            />
            <TimelineItem
              year="2015"
              title="Apogeu"
              desc="Hard Club, Armazém do Chá. Lotações esgotadas. DJ Overule, South, dubplates Konshens. Imprensa nacional."
            />
            <TimelineItem
              year="2016"
              title="3º aniversário + Crew"
              desc="Carnaval com Firestarter, Still Lion, One Vibe. Anúncio da escola/crew com 297 likes (recorde da página)."
            />
            <TimelineItem
              year="2018"
              title="Pausa estratégica"
              desc="Posts esporádicos. 'Ainda sentem a nossa falta?' — sim, sentiam."
            />
            <TimelineItem
              year="2025"
              title="Regresso ao Gare Porto"
              desc="Summer Sessions com a conexão PT/Bélgica/Jamaica. Teaser do que aí vem."
            />
            <TimelineItem
              year="2026"
              title="Oporto Dancehall 2.0"
              desc="Site, marca, calendário próprio. Estamos juntos de novo."
              highlight
            />
          </ol>
        </section>
      </main>
      <Footer />
      <VibeSwitcher />
    </>
  );
}

function TimelineItem({
  year,
  title,
  desc,
  highlight,
}: {
  year: string;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <li className="relative">
      <span
        className={`absolute -left-[42px] size-3 rounded-full ${
          highlight ? "bg-[var(--accent)] animate-pulse" : "bg-[var(--fg-muted)]"
        }`}
      />
      <div className="font-mono text-sm text-[var(--accent)] mb-1">{year}</div>
      <h3 className="font-display text-3xl mb-2">{title}</h3>
      <p className="text-[var(--fg-muted)] max-w-2xl">{desc}</p>
    </li>
  );
}
