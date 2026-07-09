import Link from "next/link";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section id="productos" className="mx-auto max-w-6xl px-6 pt-12 pb-24">
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">
        Nuestros productos
      </h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <div
            key={product.slug}
            className="flex flex-col items-center rounded-[3rem] border border-white/10 bg-white/5 px-6 py-4 text-center transition hover:-translate-y-1 hover:border-rinno-blue/60 hover:bg-white/[0.08]"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${product.accent} font-heading text-lg font-bold text-white`}
            >
              0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-rinno-cloud">
              {product.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-rinno-fog/80">
              {product.description}
            </p>
            <Link
              href={product.href ?? `/productos/${product.slug}`}
              className="mt-2 text-sm font-semibold text-rinno-blue hover:underline"
            >
              Conoce más →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
