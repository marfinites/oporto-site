import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VibeSwitcher } from "@/components/VibeSwitcher";
import { ArchiveCard } from "@/components/ArchiveCard";
import { ARCHIVE } from "@/lib/archive";
import type { ArchiveItem } from "@/lib/archive";

export const metadata = {
  title: "Arquivo · Oporto Dancehall 2.0",
  description: "146 ficheiros recuperados de 11 anos de história da Oporto Dancehall.",
};

export default function ArquivoPage() {
  const byEra: Record<string, ArchiveItem[]> = {
    "2025": [],
    "2018": [],
    "2016": [],
    "2015": [],
    "2014": [],
  };
  ARCHIVE.forEach((item) => {
    if (byEra[item.era]) byEra[item.era].push(item);
  });

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Arquivo · 2014–2025
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-none">
              Foi assim.
            </h1>
            <p className="mt-6 text-xl text-[var(--fg-muted)]">
              146 ficheiros recuperados antes que as URLs do Facebook expirassem.
              Fotos, vídeos, cartazes, momentos. 11 anos a fazer dancehall no Porto.
            </p>
          </div>
        </section>

        {(["2025", "2016", "2015", "2014"] as const).map((era) =>
          byEra[era].length === 0 ? null : (
            <section key={era} className="container-x py-12 md:py-20 border-t border-[var(--border)]">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-2">
                    Era
                  </div>
                  <h2 className="font-display text-6xl md:text-8xl leading-none">
                    {era}
                  </h2>
                </div>
                <span className="text-sm font-mono text-[var(--fg-muted)]">
                  {byEra[era].length} items
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {byEra[era].map((item) => (
                  <ArchiveCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )
        )}
      </main>
      <Footer />
      <VibeSwitcher />
    </>
  );
}

