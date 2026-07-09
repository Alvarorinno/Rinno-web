import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-end justify-between">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Últimos artículos
        </h2>
        <Link
          href="/blog"
          className="hidden text-sm font-semibold text-rinno-blue hover:underline sm:block"
        >
          Ver todos
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-rinno-blue/60 hover:bg-white/[0.08]"
          >
            <h3 className="font-heading text-xl font-semibold text-rinno-cloud group-hover:text-rinno-blue">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-rinno-fog/80">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-rinno-blue">
              Leer más →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
