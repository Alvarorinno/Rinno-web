export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "la-importancia-de-crear-contenidos-cortos-y-dinamicos",
    title: "La importancia de crear contenidos cortos y dinámicos",
    excerpt:
      "En pantallas de punto de venta y redes sociales, la atención se gana en segundos. Así diseñamos contenido que comunica rápido y deja huella.",
    date: "2026-01-15",
    content: [
      "La atención de las personas frente a una pantalla —ya sea en el punto de venta, en digital signage o en redes sociales— se mide en segundos. Por eso, en Rinno diseñamos piezas cortas, directas y visualmente potentes que comunican la idea central de una marca antes de que el usuario decida seguir su camino.",
      "Un contenido dinámico no significa simplemente 'más rápido': significa jerarquizar la información, usar movimiento con propósito y apoyarse en recursos visuales que refuercen el mensaje sin saturarlo. En espacios físicos esto es todavía más crítico, porque compite con el entorno, el ruido y el tiempo limitado que alguien pasa frente a una pantalla.",
      "Nuestro enfoque combina data de comportamiento en el punto de venta con guiones creativos pensados para loops cortos, aprovechando cada segundo de exposición para generar recordación de marca y, en última instancia, una acción concreta del consumidor.",
    ],
  },
  {
    slug: "la-importancia-del-engagement",
    title: "La importancia del engagement",
    excerpt:
      "Conectar con la audiencia va más allá de mostrar un mensaje: se trata de generar una interacción real entre la marca y las personas.",
    date: "2026-02-03",
    content: [
      "En el mundo híper conectado de hoy, las marcas que logran conexiones emocionales genuinas con su audiencia son las ganadoras. El engagement ya no es una métrica secundaria: es el indicador más claro de que una experiencia de marca realmente funcionó.",
      "En Rinno integramos sensores y tecnología interactiva para transformar espacios físicos en puntos de contacto activos, donde el usuario no solo observa sino que participa. Esa participación —un gesto, una elección, una interacción— es lo que convierte una pantalla en una experiencia memorable.",
      "Medir el engagement nos permite iterar rápido: entender qué piezas generan más interacción, en qué horarios, en qué ubicaciones, y ajustar la estrategia de contenido en consecuencia. Así cada punto de venta se convierte en un canal vivo de aprendizaje sobre la audiencia.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
