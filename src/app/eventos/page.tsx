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
        <section className="container-x pt-16 md:pt-24 pb-16">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <div className="tag mb-6">Calendário · 2026</div>
              <h1 className="display-xl">
                Próximas <span className="italic-serif text-[var(--accent)]">datas</span>.
              </h1>
            </div>
            <div className="md:col-span-4 md:pl-8 md:border-l md:border-[var(--fg)]">
              <p className="text-base leading-relaxed">
                A reunir parceiros e a confirmar clubes. Sê o primeiro a saber.
              </p>
            </div>
          </div>
        </section>

        <section className="container-x py-12 md:py-16 border-t border-[var(--fg)]">
          <div className="space-y-px bg-[var(--border)]">
            <EventRow
              date="2026 · Q1"
              title="Anúncio oficial do regresso"
              venue="A confirmar"
              status="planeado"
            />
            <EventRow
              date="2026 · Q2"
              title="Festa de regresso · Oporto Dancehall 2.0"
              venue="A confirmar (Hard Club / Gare Porto / Maus Hábitos)"
              status="planeado"
            />
            <EventRow
              date="2026 · Verão"
              title="Summer Sessions 2026"
              venue="Outdoor + clube"
              status="planeado"
            />
          </div>
        </section>

        {/* Mailing list */}
        <section className="border-t border-[var(--fg)] bg-[var(--bg-inverse)] text-[var(--bg)]" style={{ color: "var(--bg)" }}>
          <div className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <div className="tag mb-6" style={{ borderColor: "var(--bg)" }}>Mailing list</div>
              <h2 className="display-lg">
                Avisem-me da<br />
                <span className="italic-serif">próxima festa</span>.
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-lg leading-relaxed mb-8">
                Email apenas. Zero spam. Recebes 24h antes do anúncio público —
                para garantires bilhetes da pré-venda.
              </p>
              <form className="flex flex-col sm:flex-row gap-3" action="/api/subscribe" method="post">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="o-teu@email.pt"
                  className="flex-1 px-5 py-4 bg-transparent border border-[var(--bg)] outline-none placeholder:text-[var(--fg-muted)] focus:border-[var(--accent)]"
                  style={{ borderColor: "var(--bg)" }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
                >
                  Subscrever
                </button>
              </form>
              <p className="mono mt-4 opacity-70">
                Ao subscrever aceitas receber updates · podes cancelar a qualquer momento
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VibeSwitcher />
    </>
  );
}

function EventRow({
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
    <div className="bg-[var(--bg-elevated)] p-6 md:p-10 grid md:grid-cols-12 gap-4 md:gap-8 items-center">
      <div className="md:col-span-2 mono text-[var(--accent)]">{date}</div>
      <div className="md:col-span-7">
        <h3 className="display-md mb-2">{title}</h3>
        <p className="text-sm text-[var(--fg-muted)]">{venue}</p>
      </div>
      <div className="md:col-span-3 md:text-right">
        <span className="tag">{status}</span>
      </div>
    </div>
  );
}
