import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Rinno`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <Link
            href="/blog"
            className="text-sm font-semibold text-rinno-blue hover:underline"
          >
            ← Volver al blog
          </Link>
          <p className="mt-6 text-xs uppercase tracking-wide text-rinno-fog/50">
            {new Date(post.date).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-rinno-fog/90">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Contact />
    </div>
  );
}
