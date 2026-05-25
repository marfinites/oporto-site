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
        <section className="container-x pt-16 md:pt-24 pb-16">
          <div className="tag mb-6">Sobre · est. 2014</div>
          <h1 className="display-xl">
            A <span className="italic-serif text-[var(--accent)]">história</span>.
          </h1>
        </section>

        <section className="container-x pb-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
            <p>
              <strong>Oporto Dancehall</strong> nasceu em 2014 com uma ideia simples:
              <em className="italic-serif"> o Porto merecia noites de dancehall jamaicano a sério</em>.
              Não &ldquo;reggae chill&rdquo;, não &ldquo;world music&rdquo;.
              Dancehall do duro — riddims, dubplates, gyals dance, soundclash.
            </p>
            <p>
              Em 2014/2015 enchemos as primeiras Summer Sessions no Desperados.
              Em 2015/2016 saltámos para o <strong>Hard Club</strong>, o{" "}
              <strong>Armazém do Chá</strong> e o <strong>Gare Porto</strong> com
              lotações esgotadas e cobertura no Correio da Manhã, Jornal de Notícias,
              Cidade FM e Rádio Nova.
            </p>
            <p>
              No carnaval de 2016 celebrámos o 3.º aniversário com os míticos
              Firestarter Sound, Still Lion e One Vibe — depois fizemos uma pausa.
            </p>
            <p>
              Em <strong>2025</strong> voltámos ao Gare Porto para as Summer Sessions,
              com a Bélgica e a Jamaica representadas.
            </p>
            <p className="display-md italic-serif leading-tight">
              Em <span className="text-[var(--accent)]">2026</span> voltamos em força.
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9 space-y-10 md:border-l md:border-[var(--border)] md:pl-8">
            <div>
              <div className="mono text-[var(--fg-subtle)] mb-3">Clubes onde tocámos</div>
              <ul className="space-y-1.5 text-sm">
                {VENUES_PASSADOS.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mono text-[var(--fg-subtle)] mb-3">DJs & Crews</div>
              <ul className="space-y-1.5 text-sm">
                {ARTISTAS_PASSADOS.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mono text-[var(--fg-subtle)] mb-3">Imprensa</div>
              <ul className="space-y-1.5 text-sm">
                {PRESS.map((p) => (
                  <li key={p.outlet}>
                    {p.outlet}{" "}
                    <span className="mono text-[var(--fg-muted)]">({p.year})</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Timeline */}
        <section className="container-x pb-24 border-t border-[var(--fg)] pt-16">
          <div className="tag mb-6">Timeline</div>
          <h2 className="display-lg mb-12">Onze anos.</h2>
          <ol className="space-y-12 md:space-y-16">
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
              title="3º Aniversário + Crew"
              desc="Carnaval com Firestarter, Still Lion, One Vibe. Anúncio da escola/crew com 297 likes — recorde da página."
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
    <li className="grid md:grid-cols-12 gap-6 md:gap-8 items-baseline">
      <div className="md:col-span-3">
        <span
          className={`font-display text-7xl md:text-8xl leading-none ${
            highlight ? "text-[var(--accent)]" : ""
          }`}
        >
          {year}
        </span>
      </div>
      <div className="md:col-span-9 md:border-l md:border-[var(--border)] md:pl-8">
        <h3 className="display-md mb-3">{title}</h3>
        <p className="text-[var(--fg-muted)] max-w-2xl leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}
