import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VibeSwitcher } from "@/components/VibeSwitcher";

export const metadata = {
  title: "Eventos · Oporto Dancehall 2.0",
  description: "Próximas datas e calendário de festas.",
};

export default function EventosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Calendário 2026
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-none">
              Próximas datas.
            </h1>
            <p className="mt-6 text-xl text-[var(--fg-muted)]">
              A reunir parceiros e a confirmar clubes. Sê o primeiro a saber.
            </p>
          </div>
        </section>

        {/* Placeholder dates */}
        <section className="container-x py-12 md:py-20 border-t border-[var(--border)]">
          <div className="space-y-4">
            <EventCard
              date="2026-Q1"
              title="Anúncio oficial do regresso"
              venue="A confirmar"
              status="planeado"
            />
            <EventCard
              date="2026-Q2"
              title="Festa de regresso · Oporto Dancehall 2.0"
              venue="A confirmar (Hard Club / Gare Porto / Maus Hábitos)"
              status="planeado"
            />
            <EventCard
              date="2026 Verão"
              title="Summer Sessions 2026"
              venue="Outdoor + clube"
              status="planeado"
            />
          </div>
        </section>

        {/* Mailing list */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20 md:py-28">
          <div className="container-x max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Mailing list
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Avisem-me da próxima festa.
            </h2>
            <p className="text-[var(--fg-muted)] mb-8 text-lg">
              Email apenas. Zero spam. Recebes 24h antes do anúncio público — para
              garantires bilhetes da pré-venda.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              action="/api/subscribe"
              method="post"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="o-teu@email.pt"
                className="flex-1 px-5 py-4 rounded-full bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--accent)] outline-none"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-[var(--accent)] text-black font-bold uppercase tracking-wider text-sm rounded-full hover:scale-105 transition-transform"
              >
                Subscrever
              </button>
            </form>
            <p className="mt-4 text-xs text-[var(--fg-muted)]">
              Ao subscrever aceitas receber updates do Oporto Dancehall. Podes
              cancelar a qualquer momento.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <VibeSwitcher />
    </>
  );
}

function EventCard({
  date,
  title,
  venue,
  status,
}: {
  date: string;
  title: string;
  venue: string;
  status: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="font-mono text-sm text-[var(--accent)] md:w-32">{date}</div>
      <div className="flex-1">
        <h3 className="font-display text-2xl md:text-3xl leading-none">{title}</h3>
        <p className="mt-1 text-[var(--fg-muted)] text-sm">{venue}</p>
      </div>
      <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] self-start md:self-center">
        {status}
      </span>
    </div>
  );
}
