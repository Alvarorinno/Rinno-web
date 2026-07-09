const services = [
  {
    title: "Trade digital",
    description:
      "Creemos fielmente que el punto de venta más que un espacio, es un lugar para vivir la experiencia de cada marca.",
  },
  {
    title: "Digital signage",
    description:
      "Somos integradores oficiales de las principales marcas en la industria. Instalamos, configuramos y administramos todos los puntos de venta.",
  },
  {
    title: "Espacios interactivos",
    description:
      "Integramos sensores para conectar el espacio físico con el contenido digital generando experiencias interactivas con la marca.",
  },
  {
    title: "Soporte nacional",
    description:
      "Contamos con un equipo técnico desplegado en todo el territorio, para dar soporte y administración de hardware, software y contenido.",
  },
  {
    title: "Rinno Lab",
    description:
      "Diseñamos e implementamos proyectos de innovación tecnológica, digitalización y automatización de puntos de venta.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 pt-24 pb-10">
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">
        Lo que hacemos
      </h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-rinno-blue/60 hover:bg-white/[0.08]"
          >
            <h3 className="font-heading text-base font-semibold text-rinno-cloud">
              {service.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-rinno-fog/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
