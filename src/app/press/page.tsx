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
        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Press Kit · Parceiros · Clubes
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-none">
              Press Kit.
            </h1>
            <p className="mt-6 text-xl text-[var(--fg-muted)]">
              Tudo o que precisas para escrever sobre nós, programar uma festa
              connosco ou propor uma parceria.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/press-kit.pdf"
                className="px-6 py-3 bg-[var(--accent)] text-black font-bold uppercase tracking-wider text-sm rounded-full"
              >
                Descarregar PDF
              </a>
              <Link
                href="/contactos"
                className="px-6 py-3 border border-[var(--border)] uppercase tracking-wider text-sm rounded-full hover:border-[var(--accent)]"
              >
                Falar connosco
              </Link>
            </div>
          </div>
        </section>

        {/* Key facts */}
        <section className="container-x py-12 border-t border-[var(--border)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Fact label="Anos de história" value={`${STATS.anos_atividade}`} />
            <Fact label="Festas realizadas" value={`${STATS.festas_realizadas}+`} />
            <Fact label="Ficheiros arquivados" value={`${STATS.ficheiros_arquivados}`} />
            <Fact label="Top engagement" value={`${STATS.top_engagement_post} ♥`} />
          </div>
        </section>

        {/* Bio */}
        <section className="container-x py-20 border-t border-[var(--border)]">
          <div className="grid md:grid-cols-3 gap-12">
            <h2 className="font-display text-4xl md:text-5xl leading-tight md:col-span-1">
              Bio
            </h2>
            <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
              <p>
                <strong>Oporto Dancehall 2.0</strong> é a festa de dancehall
                jamaicano do Porto. Desde 2014, encheu lotações esgotadas em
                clubes como o Hard Club, Armazém do Chá e Gare Porto, com
                cobertura no Correio da Manhã, Jornal de Notícias, Cidade FM e
                Rádio Nova.
              </p>
              <p>
                A festa nasce da paixão por <em>dancehall a sério</em> — riddims,
                dubplates exclusivos (Konshens, Charly Black), DJs residentes
                (DJ/MC BOOM, DJ Overule) e uma comunidade fiel.
              </p>
              <p>
                Em 2026, regressa em pleno: site, calendário próprio, novos
                parceiros, mesmo espírito.
              </p>
            </div>
          </div>
        </section>

        {/* Boilerplates */}
        <section className="container-x py-20 border-t border-[var(--border)]">
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Descrições prontas
          </h2>
          <div className="space-y-6">
            <BoilerplateBlock
              label="Curta (140 caracteres)"
              text="Oporto Dancehall 2.0 — a festa de dancehall jamaicano do Porto está de volta. 11 anos de história, novo capítulo em 2026."
            />
            <BoilerplateBlock
              label="Média (300 caracteres)"
              text="Oporto Dancehall 2.0 é a festa de dancehall do Porto. Desde 2014, encheu o Hard Club, Armazém do Chá e Gare Porto com noites de riddim, dubplates jamaicanos exclusivos e uma comunidade fiel. Em 2026, regressa em força com novo site, novos parceiros e mesmo espírito."
            />
          </div>
        </section>

        {/* Press mentions */}
        <section className="container-x py-20 border-t border-[var(--border)]">
          <h2 className="font-display text-4xl md:text-5xl mb-8">Cobertura</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {PRESS.map((p) => (
              <div
                key={p.outlet}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
              >
                <div className="font-display text-2xl">{p.outlet}</div>
                <div className="mt-1 text-sm text-[var(--fg-muted)]">
                  {p.year} · {p.type}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Venues */}
        <section className="container-x py-20 border-t border-[var(--border)]">
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Clubes onde já fizemos festa
          </h2>
          <div className="flex flex-wrap gap-3">
            {VENUES_PASSADOS.map((v) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full border border-[var(--border)] text-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </section>

        {/* Photos */}
        <section className="container-x py-20 border-t border-[var(--border)]">
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Fotos disponíveis
          </h2>
          <p className="text-[var(--fg-muted)] mb-8 max-w-2xl">
            Todas as fotos abaixo estão disponíveis em alta resolução. Créditos a
            usar: <em>&ldquo;Oporto Dancehall arquivo&rdquo;</em>, com créditos
            adicionais a fotógrafos quando aplicável (Francisca Garcia, Daniel
            Batista).
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {showcasePhotos.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-lg overflow-hidden bg-[var(--bg-elevated)]"
              >
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

        {/* Contact */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20">
          <div className="container-x max-w-2xl text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Contacto imprensa & parcerias
            </h2>
            <p className="text-[var(--fg-muted)] mb-8">
              Resposta em 24-48h em dias úteis.
            </p>
            <Link
              href="/contactos"
              className="inline-block px-8 py-4 bg-[var(--accent)] text-black font-bold uppercase tracking-wider rounded-full"
            >
              Falar connosco →
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
    <div>
      <div className="font-display text-5xl md:text-6xl text-[var(--accent)] leading-none">
        {value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-[var(--fg-muted)]">
        {label}
      </div>
    </div>
  );
}

function BoilerplateBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="text-xs uppercase tracking-wider text-[var(--accent)] mb-3">
        {label}
      </div>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}
