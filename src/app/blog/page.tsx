import Link from "next/link";
import { PageShell } from "@/features/site/components/page-shell";
import { BlogCard } from "@/features/site/components/blog-card";
import { SectionHeading } from "@/features/site/components/section-heading";
import { blogPosts } from "@/features/site/data";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <main className="py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Blog"
          title="Long-form writing in MDX"
          description="Technical writing on AI systems, trading software, and performance engineering."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/" className="text-sm font-medium text-cyan-300">
            Back to home
          </Link>
        </div>
      </PageShell>
    </main>
  );
}
