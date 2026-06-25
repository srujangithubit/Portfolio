import Link from "next/link";
import { PageShell } from "@/features/site/components/page-shell";
import { ProjectBannersBackdrop } from "@/features/site/components/project-banners-backdrop";
import { ProjectCard } from "@/features/site/components/project-card";
import { SectionHeading } from "@/features/site/components/section-heading";
import { projects } from "@/features/site/data";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="py-20">
      <PageShell>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] px-5 py-10 sm:px-6 lg:px-8">
          <ProjectBannersBackdrop />
          <SectionHeading
            eyebrow="Projects"
            title="Selected systems, products, and experiments"
            description="Each project is organized as a case study with architecture, implementation, and future scope so the work reads like a real portfolio artifact."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/" className="text-sm font-medium text-cyan-300">
              Back to home
            </Link>
          </div>
        </div>
      </PageShell>
    </main>
  );
}
