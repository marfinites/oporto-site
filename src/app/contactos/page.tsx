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
        <section className="container-x pt-16 md:pt-24 pb-16">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <div className="tag mb-6">Contactos</div>
              <h1 className="display-xl">
                Estamos <span className="italic-serif text-[var(--accent)]">juntos</span>.
              </h1>
            </div>
            <div className="md:col-span-4 md:pl-8 md:border-l md:border-[var(--fg)]">
              <p className="text-base leading-relaxed">
                Clubes, promotores, imprensa, DJs, artistas, gyals da crew, fãs.
                Tudo passa por aqui.
              </p>
            </div>
          </div>
        </section>

        <section className="container-x pb-24 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="tag mb-6">Mensagem</div>
            <form className="space-y-5" action="/api/contact" method="post">
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
                <label className="mono text-[var(--fg-subtle)] block mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-[var(--fg)] outline-none focus:border-[var(--accent)] resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Enviar →
              </button>
            </form>
          </div>

          <aside className="md:col-span-4 md:col-start-9 space-y-10 md:border-l md:border-[var(--border)] md:pl-8">
            <ContactBlock label="Directo" email="hello@oportodancehall.com" />
            <ContactBlock label="Imprensa" email="press@oportodancehall.com" />
            <ContactBlock label="Bookings & parcerias" email="bookings@oportodancehall.com" />
            <div>
              <div className="mono text-[var(--fg-subtle)] mb-3">Localização</div>
              <p>Porto · Portugal</p>
              <p className="text-sm text-[var(--fg-muted)] mt-2 leading-relaxed">
                Disponíveis a viajar para Lisboa, Coimbra, Braga e outras cidades
                para colaborações.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <VibeSwitcher />
    </>
  );
}

function ContactBlock({ label, email }: { label: string; email: string }) {
  return (
    <div>
      <div className="mono text-[var(--fg-subtle)] mb-3">{label}</div>
      <a href={`mailto:${email}`} className="font-display text-2xl md:text-3xl block hover:text-[var(--accent)] transition-colors break-all">
        {email}
      </a>
    </div>
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
      <label className="mono text-[var(--fg-subtle)] block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-transparent border border-[var(--fg)] outline-none focus:border-[var(--accent)]"
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
      <label className="mono text-[var(--fg-subtle)] block mb-2">{label}</label>
      <select
        name={name}
        className="w-full px-4 py-3 bg-transparent border border-[var(--fg)] outline-none focus:border-[var(--accent)]"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[var(--bg)] text-[var(--fg)]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
