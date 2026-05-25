import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VibeSwitcher } from "@/components/VibeSwitcher";
import { PRESS, VENUES_PASSADOS, STATS, ARCHIVE } from "@/lib/archive";

export const metadata = {
  title: "Press Kit · Oporto Dancehall 2.0",
  description: "Materiais para imprensa, clubes e parceiros.",
};

export default function PressPage() {
  const showcasePhotos = ARCHIVE.filter((i) => i.type === "photo").slice(0, 9);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="container-x pt-16 md:pt-24 pb-16">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <div className="tag mb-6">Press Kit · Parceiros · Clubes</div>
              <h1 className="display-xl">
                Press <span className="italic-serif text-[var(--accent)]">kit</span>.
              </h1>
            </div>
            <div className="md:col-span-4 md:pl-8 md:border-l md:border-[var(--fg)] space-y-4">
              <p className="text-base leading-relaxed">
                Tudo o que precisas para escrever sobre nós, programar uma festa
                connosco ou propor uma parceria.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/press-kit.pdf" className="btn-primary">PDF →</a>
                <Link href="/contactos" className="btn-ghost">Falar connosco</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key facts */}
        <section className="border-y border-[var(--fg)] bg-[var(--bg-elevated)]">
          <div className="container-x py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)]">
            <Fact label="anos" value={`${STATS.anos_atividade}`} />
            <Fact label="noites" value={`${STATS.festas_realizadas}+`} />
            <Fact label="arquivo" value={`${STATS.ficheiros_arquivados}`} />
            <Fact label="top likes" value={`${STATS.top_engagement_post}`} />
          </div>
        </section>

        {/* Bio */}
        <section className="container-x py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="tag mb-6">Bio</div>
              <h2 className="display-lg">A marca.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-5 text-lg leading-relaxed">
              <p>
                <strong>Oporto Dancehall 2.0</strong> é a festa de dancehall jamaicano do
                Porto. Desde 2014, encheu lotações esgotadas em clubes como o
                Hard Club, Armazém do Chá e Gare Porto, com cobertura no Correio
                da Manhã, Jornal de Notícias, Cidade FM e Rádio Nova.
              </p>
              <p>
                A festa nasce da paixão por <em className="italic-serif">dancehall a sério</em> —
                riddims, dubplates exclusivos (Konshens, Charly Black), DJs
                residentes (DJ/MC BOOM, DJ Overule) e uma comunidade fiel.
              </p>
              <p>
                Em 2026, regressa em pleno: site, calendário próprio, novos
                parceiros, mesmo espírito.
              </p>
            </div>
          </div>
        </section>

        {/* Boilerplates */}
        <section className="container-x py-24 border-t border-[var(--fg)]">
          <div className="tag mb-6">Descrições prontas</div>
          <h2 className="display-md mb-12">Copia · cola.</h2>
          <div className="space-y-6">
            <BoilerplateBlock
              label="Curta · 140 caracteres"
              text="Oporto Dancehall 2.0 — a festa de dancehall jamaicano do Porto está de volta. 11 anos de história, novo capítulo em 2026."
            />
            <BoilerplateBlock
              label="Média · 300 caracteres"
              text="Oporto Dancehall 2.0 é a festa de dancehall do Porto. Desde 2014, encheu o Hard Club, Armazém do Chá e Gare Porto com noites de riddim, dubplates jamaicanos exclusivos e uma comunidade fiel. Em 2026, regressa em força com novo site, novos parceiros e mesmo espírito."
            />
          </div>
        </section>

        {/* Press mentions */}
        <section className="container-x py-24 border-t border-[var(--fg)]">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-12">
            <h2 className="display-lg md:col-span-6">Cobertura.</h2>
            <p className="md:col-span-5 md:col-start-8 text-[var(--fg-muted)]">
              Citações disponíveis para reuso editorial. Pedido por email.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {PRESS.map((p) => (
              <div key={p.outlet} className="p-6 md:p-8 border border-[var(--fg)]">
                <div className="font-display text-3xl md:text-4xl">{p.outlet}</div>
                <div className="mono mt-2 text-[var(--fg-muted)]">
                  {p.year} · {p.type}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Venues */}
        <section className="container-x py-24 border-t border-[var(--fg)]">
          <h2 className="display-lg mb-12">
            Clubes onde já fizemos <span className="italic-serif">casa</span>.
          </h2>
          <div className="flex flex-wrap gap-3">
            {VENUES_PASSADOS.map((v) => (
              <span key={v} className="tag text-base px-5 py-3">
                {v}
              </span>
            ))}
          </div>
        </section>

        {/* Photos */}
        <section className="container-x py-24 border-t border-[var(--fg)]">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-12">
            <h2 className="display-lg md:col-span-6">Fotos hi-res.</h2>
            <p className="md:col-span-5 md:col-start-8 text-[var(--fg-muted)] leading-relaxed">
              Todas em alta resolução. Créditos a usar:{" "}
              <em className="italic-serif">&ldquo;Oporto Dancehall arquivo&rdquo;</em>, com
              créditos a fotógrafos quando aplicável (Francisca Garcia, Daniel Batista).
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {showcasePhotos.map((item) => (
              <div key={item.id} className="photo-card aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--fg)] bg-[var(--bg-inverse)] text-[var(--bg)]">
          <div className="container-x py-24 text-center">
            <h2 className="display-lg mb-8">
              Falar <span className="italic-serif">connosco</span>.
            </h2>
            <p className="mb-10 max-w-md mx-auto leading-relaxed">
              Resposta em 24-48h em dias úteis.
            </p>
            <Link href="/contactos" className="btn-primary" style={{ background: "var(--accent)", color: "var(--accent-fg)" }}>
              Contactar →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <VibeSwitcher />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--bg-elevated)] p-6 md:p-10">
      <div className="font-display text-6xl md:text-8xl leading-none">{value}</div>
      <div className="mono mt-3 text-[var(--fg-muted)]">{label}</div>
    </div>
  );
}

function BoilerplateBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="p-6 md:p-8 border border-[var(--fg)]">
      <div className="mono text-[var(--accent)] mb-4">{label}</div>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}
