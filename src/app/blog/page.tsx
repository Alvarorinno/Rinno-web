import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Rinno",
  description: "Novedades y aprendizajes sobre tecnología, contenido y experiencias de marca.",
};

export default function BlogIndex() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="font-heading text-4xl font-bold">Blog</h1>
          <p className="mt-4 max-w-xl text-rinno-fog/80">
            Ideas, aprendizajes y novedades sobre tecnología, contenido y
            experiencias de marca.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-rinno-blue/60 hover:bg-white/[0.08]"
              >
                <p className="text-xs uppercase tracking-wide text-rinno-fog/50">
                  {new Date(post.date).toLocaleDateString("es-CL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-2 font-heading text-xl font-semibold text-rinno-cloud group-hover:text-rinno-blue">
                  {post.title}
                </h2>
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
      </main>
      <Contact />
    </div>
  );
}
