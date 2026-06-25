import Link from "next/link";
import type { BlogPost } from "../types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#101010] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/45">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/65">{post.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-8 text-sm font-medium text-cyan-300 transition group-hover:translate-x-1">
        Read article
      </span>
    </Link>
  );
}
