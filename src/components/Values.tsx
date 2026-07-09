const values = [
  {
    title: "Creatividad",
    description:
      "Para nosotros la creatividad es el alma de cualquier ejecución, integramos soluciones con ideas simples, directas y estratégicas.",
  },
  {
    title: "Contenido",
    description:
      "Escrito, visual o multimedia, nos aseguramos de que cada pieza esté optimizada para lograr el máximo impacto y engagement.",
  },
  {
    title: "Corazón",
    description:
      "Entender al cliente y su viaje, nos permite generar puntos de contacto sin fricciones con ayuda de tecnología y nuestra experiencia en el mercado.",
  },
  {
    title: "Compromiso",
    description:
      "Nos esforzamos en brindar una excelente experiencia con trabajo metódico, involucrándonos en cada uno de los procesos.",
  },
];

export default function Values() {
  return (
    <section className="bg-rinno-charcoal py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Cómo lo hacemos
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div key={value.title} className="relative pl-6">
              <span className="absolute left-0 top-1 font-heading text-sm text-rinno-blue">
                0{i + 1}
              </span>
              <h3 className="font-heading text-lg font-semibold">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-rinno-fog/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
