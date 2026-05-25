import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { ARCHIVE, STATS } from "@/lib/archive";
import type { ArchiveItem } from "@/lib/archive";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* ═══════════════════════════════════════════════════════════
            HERO — Poster style. Massive logo + photo bleed + tape
            ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[var(--bg-inverse)] text-[var(--paper)]">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="/arquivo/photos/p052_obrigada_1.jpg"
              alt=""
              fill
              className="object-cover photo-treat opacity-60"
              priority
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
          </div>

          {/* Halftone overlay */}
          <div className="absolute inset-0 pointer-events-none halftone" />

          <div className="relative container-x py-20 md:py-32 min-h-[88vh] flex flex-col justify-between gap-16">
            {/* Top issue line */}
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="sticker">★ Issue 001 / 2026</span>
                <span className="mono opacity-80 hidden md:inline">EST. 2014 · PORTO PT</span>
              </div>
              <span className="mono opacity-80">Free pour all</span>
            </div>

            {/* Title block */}
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3 flex justify-start md:justify-center">
                <Logo size={200} className="rotate-neg6 drop-shadow-2xl text-[var(--jam-yellow)]" />
              </div>
              <div className="md:col-span-9">
                <h1 className="display-xl">
                  ESTAMOS<br />
                  DE <span className="italic-serif text-[var(--jam-yellow)]">volta</span>.
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-2xl leading-snug">
                  A festa de dancehall do Porto está de regresso.
                  <span className="italic-serif"> Onze anos</span>. Mais de trinta noites.
                  Novo capítulo em <span className="under-block">2026</span>.
                </p>
              </div>
            </div>

            {/* CTAs + meta */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/arquivo" className="btn-yellow">Arquivo →</Link>
              <Link href="/eventos" className="btn-ghost" style={{ borderColor: "var(--paper)", color: "var(--paper)" }}>
                Próximas datas
              </Link>
              <span className="mono ml-auto opacity-70">FIG. 001 · Hard Club 2015</span>
            </div>
          </div>

          {/* Caution tape bottom */}
          <div className="caution-tape h-4 md:h-6" />
        </section>

        {/* ═══════════════════════════════════════════════════════════
            MARQUEE — Estamos juntos / repeat
            ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--jam-yellow)] text-[var(--fg)] border-y-2 border-[var(--fg)] py-3 md:py-4 overflow-hidden">
          <div className="marquee-track flex gap-10 whitespace-nowrap font-display text-3xl md:text-5xl uppercase">
            {Array.from({ length: 8 }).flatMap((_, i) => [
              <span key={`a${i}`}>Estamos juntos</span>,
              <span key={`b${i}`}>★</span>,
              <span key={`c${i}`}>Oporto Dancehall 2.0</span>,
              <span key={`d${i}`}>★</span>,
              <span key={`e${i}`} className="italic-serif">since 2014</span>,
              <span key={`f${i}`}>★</span>,
            ])}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            MANIFESTO — Poster style with marker scribbles
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-x py-24 md:py-36 relative">
          {/* Rotated sticker top-right */}
          <div className="absolute right-4 md:right-12 top-12 sticker rotate-neg12 z-10">
            ☆ Real talk
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <span className="tag mb-8 inline-flex">Manifesto</span>
              <h2 className="display-lg">
                Não somos um <span className="italic-serif text-[var(--jam-red)]">remember</span>.
              </h2>
              <div className="marker text-3xl md:text-4xl mt-6 text-[var(--jam-red)] rotate-neg6 inline-block">
                ↘ ler com calma
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 space-y-5 text-lg md:text-xl leading-relaxed">
              <p>
                Entre <strong>2014 e 2016</strong> enchemos o Armazém do Chá, o Hard Club
                e o Gare Porto com noites de dancehall a sério. Lotações esgotadas,
                cobertura na imprensa nacional, uma crew, uma comunidade.
              </p>
              <p>
                Depois parámos. Em 2025 voltámos ao Gare Porto para as Summer Sessions —
                só para testar se ainda fazíamos sentido.
              </p>
              <p className="display-md italic-serif leading-tight text-[var(--jam-red)]">
                Fez-se.
              </p>
              <p>
                Em 2026 voltamos em pleno. Site, calendário próprio, novos clubes,
                novos convidados. Mesmo espírito.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            STATS — Big numbers ledger style
            ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--fg)] text-[var(--paper)] border-y-2 border-[var(--fg)]">
          <div className="container-x py-12 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--paper)]">
            <Stat number={`${STATS.anos_atividade}`} label="anos" />
            <Stat number={`${STATS.festas_realizadas}+`} label="noites" />
            <Stat number={`${STATS.imprensa_outlets}`} label="imprensa" />
            <Stat number={`${STATS.top_engagement_post}`} label="top likes" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            ARQUIVO HIGHLIGHTS — Asymmetric grid + halftone
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-x py-24 md:py-36">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="tag">Highlights</span>
                <span className="mono text-[var(--fg-muted)]">2014 → 2025</span>
              </div>
              <h2 className="display-lg">
                Foi <span className="italic-serif text-[var(--jam-red)]">assim</span>.
              </h2>
            </div>
            <Link href="/arquivo" className="hidden md:inline-flex btn-ghost">
              146 items →
            </Link>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-12 md:col-span-7 photo-card aspect-[4/3] halftone">
              <PhotoFeed item={ARCHIVE[20]} priority />
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-4">
              <div className="photo-card aspect-[4/3] md:aspect-auto">
                <PhotoFeed item={ARCHIVE[6]} />
              </div>
              <div className="photo-card aspect-[4/3] md:aspect-auto">
                <PhotoFeed item={ARCHIVE[7]} />
              </div>
            </div>
            {ARCHIVE.slice(10, 14).map((item) => (
              <div key={item.id} className="col-span-6 md:col-span-3 photo-card aspect-square">
                <PhotoFeed item={item} />
              </div>
            ))}
            <div className="col-span-12 md:col-span-8 photo-card aspect-[16/9] halftone">
              <PhotoFeed item={ARCHIVE[8]} />
            </div>
            <div className="col-span-12 md:col-span-4 photo-card aspect-[4/3] md:aspect-auto">
              <PhotoFeed item={ARCHIVE[14]} />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            JAMAICA STRIPE — flag colour split
            ═══════════════════════════════════════════════════════════ */}
        <section aria-hidden className="grid grid-cols-3 h-8 md:h-12 border-y-2 border-[var(--fg)]">
          <div className="bg-[var(--jam-green)]" />
          <div className="bg-[var(--jam-yellow)]" />
          <div className="bg-[var(--jam-red)]" />
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PARTNERS CALL — full bleed dark poster
            ═══════════════════════════════════════════════════════════ */}
        <section className="relative bg-[var(--bg-inverse)] text-[var(--paper)] overflow-hidden">
          <div className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-8 md:gap-16 items-center relative z-10">
            <div className="md:col-span-6">
              <Logo size={140} className="mb-8 rotate-neg6 text-[var(--paper)]" />
              <span className="tag mb-6 inline-flex" style={{ color: "var(--paper)", borderColor: "var(--paper)" }}>
                Para clubes & promotores
              </span>
              <h2 className="display-lg">
                Queres ter<br />
                no <span className="italic-serif text-[var(--jam-yellow)]">teu clube</span>?
              </h2>
            </div>
            <div className="md:col-span-6 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Histórico de lotações esgotadas em Hard Club, Armazém do Chá, Gare Porto.
                Cobertura imprensa CM / JN / Cidade FM. Audiência fiel.
                Dubplates internacionais. Identidade visual cuidada.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/press" className="btn-yellow">
                  Press Kit →
                </Link>
                <Link
                  href="/contactos"
                  className="btn-ghost"
                  style={{ borderColor: "var(--paper)", color: "var(--paper)" }}
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[var(--fg)] text-[var(--paper)] p-6 md:p-10">
      <div className="font-display text-6xl md:text-8xl leading-none">{number}</div>
      <div className="mono text-[var(--fg-subtle)] mt-3">{label}</div>
    </div>
  );
}

function PhotoFeed({ item, priority }: { item: ArchiveItem | undefined; priority?: boolean }) {
  if (!item) return null;
  const src = item.type === "video" ? item.thumb || item.src : item.src;
  return (
    <Link href={`/arquivo#${item.id}`} className="block size-full relative group">
      <Image
        src={src}
        alt={item.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        unoptimized
      />
      <div className="absolute top-3 left-3">
        <span className="mono px-2 py-1 bg-[var(--paper)] text-[var(--fg)]">{item.era}</span>
      </div>
      {item.type === "video" && (
        <div className="absolute top-3 right-3 size-9 rounded-full bg-[var(--jam-yellow)] flex items-center justify-center text-[var(--fg)] text-xs border-2 border-[var(--fg)]">
          ▶
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
        {item.caption && (
          <div className="text-sm font-medium line-clamp-2">{item.caption}</div>
        )}
      </div>
    </Link>
  );
}
