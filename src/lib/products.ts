export type Product = {
  slug: string;
  title: string;
  description: string;
  accent: string;
  content: string[];
};

export const products: Product[] = [
  {
    slug: "digital-signage",
    title: "Digital Signage",
    description:
      "Pantallas y contenido dinámico que transforman cualquier punto de venta en un canal de comunicación vivo.",
    accent: "from-rinno-blue to-rinno-navy",
    content: [
      "Somos integradores oficiales de las principales marcas de la industria. Instalamos, configuramos y administramos redes de pantallas para que cada punto de venta se convierta en un canal de comunicación activo.",
      "Nuestro equipo se encarga de todo el ciclo: selección de hardware, instalación, gestión de contenido y monitoreo remoto, para que la marca siempre tenga el mensaje correcto en el lugar y momento correcto.",
      "Trabajamos con plataformas de administración centralizada que permiten programar, actualizar y medir el desempeño de cada pantalla en tiempo real, en una o cientos de tiendas.",
    ],
  },
  {
    slug: "totems-de-autoatencion",
    title: "Tótems de autoatención",
    description:
      "Soluciones self-service que agilizan la experiencia del cliente y reducen los tiempos de espera.",
    accent: "from-rinno-indigo to-rinno-purple",
    content: [
      "Diseñamos e implementamos tótems de autoatención para retail, restaurantes y servicios, pensados para que el cliente resuelva su compra o consulta de forma autónoma y rápida.",
      "Integramos catálogo, pagos y validaciones en una interfaz simple, reduciendo filas y liberando al equipo humano para tareas de mayor valor.",
      "Cada proyecto incluye soporte técnico nacional para mantener los equipos operativos y actualizados.",
    ],
  },
  {
    slug: "retail-experiencia",
    title: "Retail Experiencia",
    description:
      "Diseñamos espacios físicos que conectan con el consumidor a través de tecnología interactiva.",
    accent: "from-rinno-purple to-rinno-navy",
    content: [
      "Creemos que el punto de venta es mucho más que un espacio: es un lugar para vivir la experiencia de cada marca. Por eso diseñamos recorridos y ambientaciones que integran tecnología de forma natural.",
      "Integramos sensores para conectar el espacio físico con el contenido digital, generando experiencias interactivas que invitan al consumidor a participar, no solo a observar.",
      "El resultado son espacios que refuerzan la identidad de marca y generan recordación real en el cliente.",
    ],
  },
  {
    slug: "tecnologias",
    title: "Tecnologías",
    description:
      "Integramos sensores, IA y hardware de última generación para potenciar cada punto de contacto.",
    accent: "from-rinno-navy to-rinno-blue",
    content: [
      "En Rinno Lab diseñamos e implementamos proyectos de innovación tecnológica, digitalización y automatización de puntos de venta, combinando sensores, inteligencia artificial y hardware de última generación.",
      "Contamos con un equipo técnico desplegado en todo el territorio para dar soporte y administración de hardware, software y contenido, con cobertura nacional.",
      "Cada solución se adapta al objetivo de negocio del cliente, desde captura de datos de comportamiento hasta automatización de procesos en el punto de venta.",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
