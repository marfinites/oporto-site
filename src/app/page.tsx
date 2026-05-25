import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VibeSwitcher } from "@/components/VibeSwitcher";
import { LogoCircle } from "@/components/Logo";
import { ARCHIVE, STATS } from "@/lib/archive";
import type { ArchiveItem } from "@/lib/archive";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* ═══════════════════════════════════════════════════════════
            HERO — Editorial magazine cover style
            ═══════════════════════════════════════════════════════════ */}
        <section className="relative">
          <div className="container-x pt-10 md:pt-16 pb-8">
            <div className="grid md:grid-cols-12 gap-6 items-end">
              <div className="md:col-span-7">
                {/* Issue line */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="tag">★ Issue 001 / 2026</span>
                  <span className="mono text-[var(--fg-muted)]">est. 2014</span>
                </div>

                <h1 className="display-xl">
                  Oporto<br />
                  <span className="italic-serif text-[var(--accent)]">dancehall</span><br />
                  2.0
                </h1>
              </div>

              <div className="md:col-span-5 md:pl-8 md:border-l md:border-[var(--fg)] flex flex-col gap-6">
                <p className="text-base md:text-lg leading-relaxed">
                  A festa de dancehall do Porto está de regresso.
                  <span className="italic-serif"> Onze anos</span>, mais de trinta noites,
                  novo capítulo.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/arquivo" className="btn-primary">Arquivo →</Link>
                  <Link href="/eventos" className="btn-ghost">Próximas datas</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Big photo — Torre dos Clérigos */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[var(--bg-inverse)]">
            <Image
              src="/arquivo/photos/p051_estamos_de_volta.jpg"
              alt="Oporto Dancehall · Torre dos Clérigos"
              fill
              className="object-cover photo-treat"
              priority
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 right-4 md:right-8 flex justify-between items-end text-white">
              <span className="mono">Torre dos Clérigos · Porto</span>
              <span className="mono">FIG. 001</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            MARQUEE — slow editorial scroll
            ═══════════════════════════════════════════════════════════ */}
        <section className="border-y border-[var(--fg)] py-4 md:py-6 overflow-hidden bg-[var(--bg)]">
          <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-3xl md:text-5xl uppercase">
            {Array.from({ length: 6 }).flatMap((_, i) => [
              <span key={`a${i}`}>Estamos de volta</span>,
              <span key={`b${i}`} className="text-[var(--accent)]">★</span>,
              <span key={`c${i}`} className="italic-serif">since 2014</span>,
              <span key={`d${i}`} className="text-[var(--accent)]">★</span>,
              <span key={`e${i}`}>Porto · Portugal</span>,
              <span key={`f${i}`} className="text-[var(--accent)]">★</span>,
            ])}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            MANIFESTO — Editorial two-column
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-x py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-5">
              <div className="tag mb-8">Manifesto</div>
              <h2 className="display-lg">
                Não somos<br />
                um <span className="italic-serif">remember</span>.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-5 text-lg leading-relaxed">
              <p>
                Entre <strong>2014 e 2016</strong> enchemos o Armazém do Chá, o Hard Club
                e o Gare Porto com noites de dancehall a sério. Lotações esgotadas,
                cobertura na imprensa nacional, uma crew, uma comunidade.
              </p>
              <p>
                Depois parámos. Em 2025 voltámos ao Gare Porto para as Summer Sessions —
                só para testar se ainda fazíamos sentido.
              </p>
              <p className="text-[var(--accent)] font-medium text-xl italic-serif">
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
            STATS — Big numbers grid
            ═══════════════════════════════════════════════════════════ */}
        <section className="border-y border-[var(--fg)] bg-[var(--bg-elevated)]">
          <div className="container-x py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)]">
            <Stat number={`${STATS.anos_atividade}`} label="anos" />
            <Stat number={`${STATS.festas_realizadas}+`} label="noites" />
            <Stat number={`${STATS.imprensa_outlets}`} label="imprensa" />
            <Stat number={`${STATS.top_engagement_post}`} label="top likes" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            ARQUIVO HIGHLIGHTS — Asymmetric editorial grid
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-x py-24 md:py-36">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="tag mb-6">Highlights · 2014–2025</div>
              <h2 className="display-lg">
                Foi <span className="italic-serif">assim</span>.
              </h2>
            </div>
            <Link href="/arquivo" className="hidden md:inline-flex btn-ghost">
              146 items →
            </Link>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Big left */}
            <div className="col-span-12 md:col-span-7 photo-card aspect-[4/3]">
              <PhotoFeed item={ARCHIVE[20]} priority />
            </div>
            {/* Stack right */}
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-4">
              <div className="photo-card aspect-[4/3] md:aspect-auto">
                <PhotoFeed item={ARCHIVE[6]} />
              </div>
              <div className="photo-card aspect-[4/3] md:aspect-auto">
                <PhotoFeed item={ARCHIVE[7]} />
              </div>
            </div>
            {/* 4 cards row */}
            {ARCHIVE.slice(10, 14).map((item) => (
              <div key={item.id} className="col-span-6 md:col-span-3 photo-card aspect-square">
                <PhotoFeed item={item} />
              </div>
            ))}
            {/* Wide */}
            <div className="col-span-12 md:col-span-8 photo-card aspect-[16/9]">
              <PhotoFeed item={ARCHIVE[8]} />
            </div>
            <div className="col-span-12 md:col-span-4 photo-card aspect-[4/3] md:aspect-auto">
              <PhotoFeed item={ARCHIVE[14]} />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PARTNERS CALL — full bleed photo + text
            ═══════════════════════════════════════════════════════════ */}
        <section className="relative bg-[var(--bg-inverse)] text-[var(--bg)]" style={{ color: "var(--bg)" }}>
          <div className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-6">
              <LogoCircle size={120} className="mb-8" />
              <div className="tag mb-6 border-[var(--bg)]" style={{ borderColor: "var(--bg)" }}>
                Para clubes & promotores
              </div>
              <h2 className="display-lg">
                Queres ter Oporto Dancehall<br />
                no <span className="italic-serif">teu clube</span>?
              </h2>
            </div>
            <div className="md:col-span-6 space-y-6">
              <p className="text-lg leading-relaxed">
                Histórico de lotações esgotadas em Hard Club, Armazém do Chá, Gare Porto.
                Cobertura imprensa Correio da Manhã / JN / Cidade FM.
                Audiência fiel, dubplates internacionais, identidade visual cuidada.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/press" className="btn-primary" style={{ background: "var(--bg)", color: "var(--fg)" }}>
                  Press Kit →
                </Link>
                <Link href="/contactos" className="btn-ghost" style={{ borderColor: "var(--bg)" }}>
                  Contactar
                </Link>
              </div>
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
    <div className="bg-[var(--bg-elevated)] p-6 md:p-10">
      <div className="font-display text-6xl md:text-8xl leading-none">{number}</div>
      <div className="mono text-[var(--fg-muted)] mt-3">{label}</div>
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
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
        <div className="mono text-[10px]">{item.era}</div>
        {item.caption && (
          <div className="mt-1 text-sm font-medium line-clamp-2">{item.caption}</div>
        )}
      </div>
      {item.type === "video" && (
        <div className="absolute top-3 left-3 size-8 rounded-full bg-white/95 flex items-center justify-center text-black text-xs">
          ▶
        </div>
      )}
    </Link>
  );
}

