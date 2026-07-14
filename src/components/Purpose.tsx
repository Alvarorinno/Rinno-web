export default function Purpose() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-16">
      <div
        className="relative overflow-hidden rounded-2xl border border-rinno-pink/20 bg-cover bg-center px-6 py-8 text-center sm:px-8 sm:py-10"
        style={{ backgroundImage: "url(/images/brand-texture.jpg)" }}
      >
        <div className="absolute inset-0 bg-rinno-dark/55" />
        <p className="relative font-heading text-sm italic leading-snug text-rinno-cloud sm:text-base">
          &ldquo;Nuestro propósito es abrir caminos en un mundo donde la
          tecnología y digitalización tienen un rol protagónico en las
          experiencias de marcas y clientes.&rdquo;
        </p>
      </div>
    </section>
  );
}
