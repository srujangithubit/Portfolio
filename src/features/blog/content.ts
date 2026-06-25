import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { blogPosts } from "../site/data";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export async function getBlogPosts() {
  return blogPosts;
}

export async function getBlogPost(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    summary: string;
    date: string;
    readTime: string;
    tags: string[];
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return { content, frontmatter };
}
