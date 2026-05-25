import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VibeSwitcher } from "@/components/VibeSwitcher";

export const metadata = {
  title: "Contactos · Oporto Dancehall 2.0",
  description: "Fala connosco para parcerias, imprensa ou bookings.",
};

export default function ContactosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Contactos
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-none">
              Estamos juntos.
            </h1>
            <p className="mt-6 text-xl text-[var(--fg-muted)]">
              Clubes, promotores, imprensa, DJs, artistas, gyals da crew, fãs.
              Tudo passa por aqui.
            </p>
          </div>
        </section>

        <section className="container-x py-12 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl mb-6">Envia mensagem</h2>
            <form
              className="space-y-4"
              action="/api/contact"
              method="post"
            >
              <Field name="nome" label="Nome" required />
              <Field name="email" label="Email" type="email" required />
              <SelectField
                name="motivo"
                label="Motivo"
                options={[
                  "Parceria de clube / venue",
                  "Booking DJ / artista",
                  "Imprensa / entrevista",
                  "Outro",
                ]}
              />
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-[var(--accent)] outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[var(--accent)] text-black font-bold uppercase tracking-wider rounded-full hover:scale-[1.02] transition-transform"
              >
                Enviar →
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                Directo
              </h3>
              <a
                href="mailto:hello@oportodancehall.com"
                className="font-display text-3xl hover:text-[var(--accent)]"
              >
                hello@oportodancehall.com
              </a>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                Imprensa
              </h3>
              <a
                href="mailto:press@oportodancehall.com"
                className="font-display text-3xl hover:text-[var(--accent)]"
              >
                press@oportodancehall.com
              </a>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                Bookings & parcerias
              </h3>
              <a
                href="mailto:bookings@oportodancehall.com"
                className="font-display text-3xl hover:text-[var(--accent)]"
              >
                bookings@oportodancehall.com
              </a>
            </div>
            <div className="pt-8 border-t border-[var(--border)]">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
                Localização
              </h3>
              <p>Porto, Portugal</p>
              <p className="text-[var(--fg-muted)] mt-1">
                Disponíveis a viajar para Lisboa, Coimbra, Braga e outras cidades
                para colaborações.
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

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-[var(--accent)] outline-none"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-2">
        {label}
      </label>
      <select
        name={name}
        className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-[var(--accent)] outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
