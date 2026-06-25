import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import {
  blogPosts,
  profile,
  projects,
  research,
  socialLinks,
} from "@/features/site/data";
import { BlogCard } from "@/features/site/components/blog-card";
import { ContactForm } from "@/features/site/components/contact-form";
import { FakeTerminal } from "@/features/site/components/fake-terminal";
import { HeroField } from "@/features/site/components/hero-field";
import { PageShell } from "@/features/site/components/page-shell";
import { ProjectBannersBackdrop } from "@/features/site/components/project-banners-backdrop";
import { ProjectCard } from "@/features/site/components/project-card";
import { SectionHeading } from "@/features/site/components/section-heading";
import { SkillGrid } from "@/features/site/components/skill-grid";
import { Timeline } from "@/features/site/components/timeline";
import { SectionObserver } from "@/features/site/components/section-observer";

export default function Home() {
  return (
    <main>
      <SectionObserver />

      <section id="home" className="relative isolate overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Profile Background"
          fill
          className="object-cover opacity-100 contrast-[1.05] saturate-[1.10] object-[center_15%] md:object-[center_20%] lg:object-[65%_25%]"
          quality={100}
          unoptimized={true}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(5,5,5,0.9)_80%,#050505)]" />
        <HeroField />
        <PageShell>
          <div className="relative flex min-h-svh items-center py-20">
            <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  Premium portfolio experience
                </div>
                <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  Building intelligent software,
                  <span className="block bg-linear-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                    AI systems,
                  </span>
                  and financial technologies.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  {profile.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.3em] text-white/45">
                  {profile.title}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.01]"
                  >
                    Explore My Work <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/8"
                  >
                    <Download className="h-4 w-4" /> Download Resume
                  </Link>
                  <a
                    href="mailto:srujangeethajavaregowda@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/8"
                  >
                    <Mail className="h-4 w-4" /> Contact Me
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/55">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {profile.location}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {profile.availability}
                  </span>
                </div>
              </div>

              <div className="rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/45">
                    <span>System Overview</span>
                    <span>v1.0</span>
                  </div>
                  <div className="mt-6 grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/45">
                        Current Focus
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        AI products with trading-grade reliability
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <div className="text-3xl font-semibold text-white">
                          {projects.length}
                        </div>
                        <div className="mt-2 text-sm text-white/55">
                          Case studies
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <div className="text-3xl font-semibold text-white">
                          {research.length}
                        </div>
                        <div className="mt-2 text-sm text-white/55">
                          Research areas
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/45">
                        Stack
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Next.js 15",
                          "React 19",
                          "Framer Motion",
                          "GSAP",
                          "Lenis",
                          "Tailwind",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <section
        className="border-t border-white/10 bg-[#050505] py-20"
        id="about"
      >
        <PageShell>
          <SectionHeading
            eyebrow="About"
            title="A visual timeline instead of a text wall"
            description="The portfolio is structured like a product narrative, so recruiters can understand progression, depth, and technical taste within a few seconds."
          />
          <div className="mt-12">
            <Timeline />
          </div>
        </PageShell>
      </section>

      <section className="border-t border-white/10 py-20" id="projects">
        <PageShell>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] px-5 py-10 sm:px-6 lg:px-8">
            <ProjectBannersBackdrop />
            <SectionHeading
              eyebrow="Projects"
              title="Case studies that show engineering depth"
              description="Each project page includes architecture, tradeoffs, outcomes, and the next layer of iteration so the work reads like a real product review."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {projects.slice(0, 4).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
              >
                View all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="border-t border-white/10 py-20" id="research">
        <PageShell>
          <SectionHeading
            eyebrow="Research"
            title="Applied research across AI, vision, and financial systems"
            description="The research layer exists to show direction, not just output. It communicates where the work is headed next."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {research.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#101010] p-6"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                  {item.emphasis}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="border-t border-white/10 py-20" id="skills">
        <PageShell>
          <SectionHeading
            eyebrow="Skills"
            title="An interactive stack map"
            description="The skill grid is organized by category so it reads like a real engineering profile rather than a random badge wall."
          />
          <div className="mt-12">
            <SkillGrid />
          </div>
        </PageShell>
      </section>

      <section className="border-t border-white/10 py-20" id="timeline">
        <PageShell>
          <SectionHeading
            eyebrow="Timeline"
            title="A career path with visible progression"
            description="Academic milestones, project work, and technical focus are shown in sequence so the story feels intentional."
          />
          <div className="mt-12 max-w-4xl">
            <Timeline />
          </div>
        </PageShell>
      </section>

      <section className="border-t border-white/10 py-20" id="blog">
        <PageShell>
          <SectionHeading
            eyebrow="Blog"
            title="Writing about systems, AI, and performance"
            description="MDX articles keep the site flexible for long-form technical writing without compromising the visual system."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </PageShell>
      </section>

      <section className="border-t border-white/10 py-20" id="terminal">
        <PageShell>
          <SectionHeading
            eyebrow="Terminal"
            title="A cinematic, fake terminal for quick exploration"
            description="Keyboard-friendly and lightweight, this page gives recruiters a fast way to scan the most important links and commands."
          />
          <div className="mt-12">
            <FakeTerminal />
          </div>
        </PageShell>
      </section>

      <section className="border-t border-white/10 py-20" id="contact">
        <PageShell>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Open to premium engineering opportunities"
                description="Use the form for project, hiring, or collaboration conversations. The layout is designed to feel calm and direct."
              />
              <div className="mt-8 grid gap-3 text-sm text-white/65">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-300/30 hover:bg-white/8"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </PageShell>
      </section>
    </main>
  );
}
