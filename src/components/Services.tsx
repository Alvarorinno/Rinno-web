const services = [
  {
    title: "Trade digital",
    image: "/images/services/trade-digital.jpg",
    description:
      "Creemos fielmente que el punto de venta más que un espacio, es un lugar para vivir la experiencia de cada marca.",
  },
  {
    title: "Digital signage",
    image: "/images/services/digital-signage.jpg",
    description:
      "Somos integradores oficiales de las principales marcas en la industria. Instalamos, configuramos y administramos todos los puntos de venta.",
  },
  {
    title: "Espacios interactivos",
    image: "/images/services/espacios-interactivos.jpg",
    description:
      "Integramos sensores para conectar el espacio físico con el contenido digital generando experiencias interactivas con la marca.",
  },
  {
    title: "Soporte nacional",
    image: "/images/services/soporte-nacional.jpg",
    description:
      "Contamos con un equipo técnico desplegado en todo el territorio, para dar soporte y administración de hardware, software y contenido.",
  },
  {
    title: "Rinno Lab",
    image: "/images/services/rinno-lab.jpg",
    description:
      "Diseñamos e implementamos proyectos de innovación tecnológica, digitalización y automatización de puntos de venta.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-[1500px] px-6 pt-24 pb-24 text-rinno-midnight"
    >
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">
        Qué hacemos
      </h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-rinno-midnight shadow-sm transition hover:shadow-xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${service.image}), url(/images/brand-texture.jpg)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rinno-midnight/95 via-rinno-midnight/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-heading text-lg font-semibold text-rinno-cloud lg:min-h-[2lh] xl:min-h-0">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-rinno-fog/90 sm:min-h-[4lh] lg:min-h-[8lh] xl:min-h-[5lh] min-[1500px]:min-h-[4lh]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
