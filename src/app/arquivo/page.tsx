import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArchiveCard } from "@/components/ArchiveCard";
import { ARCHIVE } from "@/lib/archive";
import type { ArchiveItem } from "@/lib/archive";

export const metadata = {
  title: "Arquivo · Oporto Dancehall 2.0",
  description:
    "146 ficheiros recuperados de 11 anos de história da Oporto Dancehall.",
};

const ERA_ORDER: ArchiveItem["era"][] = ["2025", "2018", "2016", "2015", "2014"];

export default function ArquivoPage() {
  const byEra = ERA_ORDER.reduce<Record<string, ArchiveItem[]>>((acc, e) => {
    acc[e] = ARCHIVE.filter((i) => i.era === e);
    return acc;
  }, {});

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="container-x pt-16 md:pt-24 pb-12">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <div className="tag mb-6">Arquivo · 2014–2025</div>
              <h1 className="display-xl">
                Foi <span className="italic-serif text-[var(--accent)]">assim</span>.
              </h1>
            </div>
            <div className="md:col-span-4 md:pl-8 md:border-l md:border-[var(--fg)]">
              <p className="text-base leading-relaxed">
                146 ficheiros recuperados antes que as URLs do Facebook expirassem.
                Fotos, vídeos, cartazes, momentos.
                <span className="italic-serif"> Onze anos</span> a fazer dancehall no Porto.
              </p>
            </div>
          </div>
        </section>

        {ERA_ORDER.filter((era) => byEra[era].length > 0).map((era) => (
          <section
            key={era}
            className="container-x py-12 md:py-20 border-t border-[var(--fg)]"
          >
            <div className="flex items-baseline justify-between mb-8 gap-6">
              <h2 className="display-lg leading-none">{era}</h2>
              <span className="mono text-[var(--fg-muted)]">
                {String(byEra[era].length).padStart(2, "0")} items
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {byEra[era].map((item) => (
                <ArchiveCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
