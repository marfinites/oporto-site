import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VibeSwitcher } from "@/components/VibeSwitcher";
import { ARCHIVE, HIGHLIGHTS, STATS } from "@/lib/archive";

export default function Home() {
  const marqueeWords = [
    "ESTAMOS DE VOLTA",
    "★",
    "OPORTO DANCEHALL 2.0",
    "★",
    "NOVO CAPÍTULO",
    "★",
    "2026",
    "★",
  ];

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="container-x py-20 md:py-32 relative">
            <div className="flex flex-col gap-4 md:gap-6 max-w-5xl">
              <span className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                <span className="size-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Estamos de volta · 2026
              </span>
              <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] leading-[0.85] tracking-tight">
                OPORTO
                <br />
                DANCEHALL
                <br />
                <span className="text-[var(--accent)] glow">2.0</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-[var(--fg-muted)] max-w-2xl">
                A festa que pôs o dancehall a sério no Porto está a preparar o regresso.
                11 anos de história, novo capítulo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/arquivo"
                  className="px-6 py-3 bg-[var(--accent)] text-black font-bold uppercase tracking-wider text-sm rounded-full hover:scale-105 transition-transform"
                >
                  Ver arquivo →
                </Link>
                <Link
                  href="/eventos"
                  className="px-6 py-3 border border-[var(--border)] uppercase tracking-wider text-sm rounded-full hover:border-[var(--accent)] transition-colors"
                >
                  Próximas datas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="border-y border-[var(--border)] py-6 overflow-hidden bg-[var(--bg-elevated)]">
          <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-4xl md:text-6xl">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="text-[var(--fg)]">
                {w}
              </span>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="container-x py-20 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number={`${STATS.anos_atividade}`} label="anos de história" />
            <Stat number={`${STATS.festas_realizadas}+`} label="festas realizadas" />
            <Stat number={`${STATS.imprensa_outlets}`} label="outlets imprensa" />
            <Stat number={`${STATS.top_engagement_post}`} label="top post likes" />
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
                Manifesto
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-none">
                Não somos
                <br />
                <span className="text-[var(--accent-2)]">um remember</span>.
                <br />
                Somos o capítulo a seguir.
              </h2>
            </div>
            <div className="text-lg leading-relaxed text-[var(--fg-muted)] space-y-4">
              <p>
                Entre 2014 e 2016 enchemos o Armazém do Chá, o Hard Club e o Gare Porto
                com noites de dancehall a sério. Lotações esgotadas, imprensa, uma
                crew, uma comunidade.
              </p>
              <p>
                Depois parámos. Em 2025 voltámos ao Gare Porto para as Summer Sessions.
              </p>
              <p className="text-[var(--fg)] font-medium">
                Em 2026 voltamos em grande — site, calendário, novos clubes, novos
                convidados, mesmo espírito.{" "}
                <span className="text-[var(--accent)]">Estamos juntos.</span>
              </p>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS GRID */}
        <section className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                Highlights do arquivo
              </div>
              <h2 className="font-display text-5xl md:text-6xl leading-none">
                Foi assim.
              </h2>
            </div>
            <Link
              href="/arquivo"
              className="hidden md:inline-flex text-sm uppercase tracking-wider hover:text-[var(--accent)]"
            >
              Ver tudo →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {ARCHIVE.slice(0, 12).map((item) => (
              <Link
                key={item.id}
                href={`/arquivo#${item.id}`}
                className="group relative aspect-square overflow-hidden rounded-lg bg-[var(--bg-elevated)]"
              >
                {item.type === "video" ? (
                  <>
                    <Image
                      src={item.thumb || item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-12 rounded-full bg-[var(--accent)]/90 backdrop-blur-sm flex items-center justify-center text-black">
                        ▶
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-xs font-mono text-[var(--accent)]">
                    {item.era}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CALL TO PARTNERS */}
        <section className="border-t border-[var(--border)] py-20 md:py-28 bg-[var(--bg-elevated)]">
          <div className="container-x grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
                Para clubes & promotores
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Queres ter Oporto Dancehall no teu clube?
              </h2>
              <p className="mt-4 text-[var(--fg-muted)] text-lg max-w-md">
                Temos histórico, audiência e cobertura de imprensa para encher casa.
                Vê o Press Kit e fala connosco.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/press"
                  className="px-6 py-3 bg-[var(--accent)] text-black font-bold uppercase tracking-wider text-sm rounded-full"
                >
                  Press Kit
                </Link>
                <Link
                  href="/contactos"
                  className="px-6 py-3 border border-[var(--accent)] text-[var(--accent)] uppercase tracking-wider text-sm rounded-full"
                >
                  Contactar
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={item.type === "video" ? item.thumb! : item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VibeSwitcher />
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="border-l-2 border-[var(--accent)] pl-4">
      <div className="font-display text-6xl md:text-7xl leading-none">
        {number}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-[var(--fg-muted)]">
        {label}
      </div>
    </div>
  );
}
