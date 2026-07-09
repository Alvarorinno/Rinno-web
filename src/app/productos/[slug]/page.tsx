import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { products, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.title} | Rinno`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <Link
            href="/#productos"
            className="text-sm font-semibold text-rinno-blue hover:underline"
          >
            ← Volver a productos
          </Link>
          <span
            className={`mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${product.accent} font-heading text-lg font-bold text-white`}
          >
            {product.title.charAt(0)}
          </span>
          <h1 className="mt-6 font-heading text-3xl font-bold sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-4 text-lg text-rinno-fog/80">
            {product.description}
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-rinno-fog/90">
            {product.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <a
            href="#contacto"
            className="mt-10 inline-block rounded-full bg-rinno-blue px-8 py-3 font-semibold text-white transition hover:bg-rinno-navy"
          >
            Hablemos de tu proyecto
          </a>
        </article>
      </main>
      <Contact />
    </div>
  );
}
