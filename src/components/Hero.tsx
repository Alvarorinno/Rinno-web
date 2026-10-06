export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="/video/reel.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-rinno-dark/70 via-rinno-dark/60 to-rinno-dark" />

      <div className="relative w-full px-6 py-32 text-center sm:px-10 sm:text-left lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rinno-blue">
          Agencia Tecno Creativa
        </p>
        <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-6xl">
          Potenciamos las marcas del futuro
        </h1>
        <p className="mt-6 max-w-xl text-lg text-rinno-fog/90">
          Creemos fielmente que el punto de venta más que un espacio, es un
          lugar para vivir la experiencia de cada marca.
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-block rounded-full bg-rinno-blue px-8 py-3 font-semibold text-white transition hover:bg-rinno-navy"
        >
          Hablemos
        </a>
      </div>
    </section>
  );
}
