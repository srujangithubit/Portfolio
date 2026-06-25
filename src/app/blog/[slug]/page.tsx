import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/features/site/components/page-shell";
import { getBlogPost } from "@/features/blog/content";
import { blogPosts } from "@/features/site/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = await getBlogPost(slug);

  return (
    <main className="py-12 sm:py-16">
      <PageShell>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        <article className="mx-auto mt-8 max-w-4xl rounded-4xl border border-white/10 bg-[#101010] p-6 sm:p-8 lg:p-10">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
            {frontmatter.tags.join(" • ")}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {frontmatter.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-white/70">
            {frontmatter.summary}
          </p>
          <div className="mt-6 text-sm text-white/45">
            {frontmatter.date} • {frontmatter.readTime}
          </div>
          <div className="prose prose-invert prose-headings:tracking-tight prose-p:text-white/70 prose-li:text-white/70 mt-10 max-w-none">
            {content}
          </div>
        </article>
      </PageShell>
    </main>
  );
}
