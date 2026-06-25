import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/65">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.highlights.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:gap-3">
          View case study <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
