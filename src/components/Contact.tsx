export default function Contact() {
  return (
    <section id="contacto" className="bg-rinno-cloud text-rinno-navy">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-rinno-blue">
            Visítanos
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-rinno-navy/70">
            Pte. Sebastián Piñera 548
            <br />
            <a href="tel:+56975769325" className="hover:text-rinno-blue">
              +56 9 7576 9325
            </a>
            <br />
            <a href="mailto:soporte@rinno.la" className="hover:text-rinno-blue">
              soporte@rinno.la
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-rinno-blue">
            Atención
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-rinno-navy/70">
            Lunes a Viernes: 08:00 - 18:00 hrs
            <br />
            Sábado, Domingo y Festivos
            <br />
            Urgencias 24/7
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-rinno-blue">
            Quieres sumarte
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-rinno-navy/70">
            Si quieres ser parte de nuestro team, suscríbete para enviarte
            noticias y oportunidades.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-full border border-rinno-navy/20 bg-transparent px-4 py-2 text-sm text-rinno-navy placeholder:text-rinno-navy/40 focus:border-rinno-blue focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-rinno-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-rinno-navy"
            >
              SÚMATE
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-rinno-navy/10 py-6 text-center text-xs text-rinno-navy/50">
        © {new Date().getFullYear()} Rinno. Todos los derechos reservados.
      </div>
    </section>
  );
}
