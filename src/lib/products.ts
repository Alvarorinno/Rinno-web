export type Product = {
  slug: string;
  title: string;
  description: string;
  accent: string;
  content: string[];
  href?: string;
  logo?: string;
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
    href: "/totems",
    content: [
      "Diseñamos e implementamos tótems de autoatención para retail, restaurantes y servicios, pensados para que el cliente resuelva su compra o consulta de forma autónoma y rápida.",
      "Integramos catálogo, pagos y validaciones en una interfaz simple, reduciendo filas y liberando al equipo humano para tareas de mayor valor.",
      "Cada proyecto incluye soporte técnico nacional para mantener los equipos operativos y actualizados.",
    ],
  },
  {
    slug: "waity",
    title: "Waity",
    logo: "/images/waity-logo.svg",
    description:
      "Nuestro gestor de fila inteligente: organiza a tus clientes de manera eficiente y rápida. La espera, bien gestionada.",
    accent: "from-rinno-purple to-rinno-navy",
    content: [
      "Waity es el gestor de fila inteligente de Rinno: un sistema que organiza a tus clientes de manera eficiente y rápida, para que la espera esté siempre bien gestionada.",
      "Cada cliente queda ubicado y visible en todo momento. Desde un panel en vivo puedes ver los turnos en espera, el tiempo promedio de espera y la cantidad de clientes atendidos.",
      "Se integra con el resto de las soluciones de Rinno en el punto de venta, como pantallas de digital signage y tótems de autoatención, para ofrecer una experiencia ordenada de principio a fin.",
    ],
  },
  {
    slug: "rinno-box",
    title: "Rinno Box",
    description:
      "Plataforma digital para el seguimiento de órdenes de trabajo (OT): sabe en qué estado está cada una, en todo momento.",
    accent: "from-rinno-navy to-rinno-blue",
    content: [
      "Rinno Box es la plataforma digital de Rinno para el seguimiento de órdenes de trabajo (OT), pensada para que cada requerimiento quede registrado y visible de principio a fin.",
      "Permite saber en qué estado se encuentra cada OT, quién la está atendiendo y cuándo se cierra, con información centralizada y disponible en todo momento.",
      "Se complementa con el soporte técnico nacional de Rinno para mantener operativos los equipos y puntos de venta de cada cliente.",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
