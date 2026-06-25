import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, PlayCircle } from "lucide-react";
import { PageShell } from "@/features/site/components/page-shell";
import { projects } from "@/features/site/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-12 sm:py-16">
      <PageShell>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <section className="mt-8 overflow-hidden rounded-4xl border border-white/10 bg-[#101010] p-6 sm:p-8 lg:p-10">
          {project.bannerImage ? (
            <div className="relative overflow-hidden rounded-3xl bg-black/40 border border-white/5">
              <Image
                src={project.bannerImage}
                alt={`${project.name} cover`}
                width={1600}
                height={900}
                className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          ) : (
            <div
              className={`h-64 rounded-3xl bg-linear-to-br ${project.gradient} opacity-80`}
            />
          )}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                {project.category}
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#details"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                >
                  Explore details
                </a>
                <a
                  href={project.repositoryUrl ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80"
                >
                  <ArrowUpRight className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80"
                >
                  <PlayCircle className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-3xl font-semibold text-white">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm text-white/55">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {project.screenshots?.length ? (
          <section className="mt-10 rounded-4xl border border-white/10 bg-[#101010] p-6 sm:p-8 lg:p-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                  Screenshots
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Visual proof of the product
                </h2>
              </div>
              <div className="text-sm text-white/45">
                {project.screenshots.length} captures
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {project.screenshots.map((screenshot) => (
                <figure
                  key={screenshot.src}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-black/40"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover transition duration-500 hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-white/65">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section
          id="details"
          className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#101010] p-6">
            <h2 className="text-xl font-semibold text-white">Problem</h2>
            <p className="text-sm leading-7 text-white/65">{project.problem}</p>
            <h2 className="text-xl font-semibold text-white">Architecture</h2>
            <p className="text-sm leading-7 text-white/65">
              {project.architecture}
            </p>
            <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#101010] p-6">
            {project.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    </main>
  );
}
