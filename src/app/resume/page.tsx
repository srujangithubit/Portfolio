import Link from "next/link";
import { Download } from "lucide-react";
import { PageShell } from "@/features/site/components/page-shell";
import { SectionHeading } from "@/features/site/components/section-heading";
import { profile, skills, timeline } from "@/features/site/data";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <main className="py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Resume"
          title="An interactive resume built like a product summary"
          description="This layout keeps your education, skills, projects, and achievements readable without turning the page into a wall of text."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl border border-white/10 bg-[#101010] p-6">
            <h2 className="text-xl font-semibold text-white">
              Professional Summary
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65">
              {profile.bio}
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Contact
              </div>
              <div className="mt-3 space-y-2">
                <p>{profile.location}</p>
                <p>+91 9972728100</p>
                <p>srujangeethajavaregowda@gmail.com</p>
                <p>linkedin.com/in/srujan-javaregowda</p>
                <p>github.com/srujangithubit</p>
              </div>
            </div>
            <h2 className="mt-8 text-xl font-semibold text-white">Education</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-cyan-300/75">2024 - 2028</div>
                <div className="mt-1 text-lg font-medium text-white">
                  Bachelor of Technology (B.Tech), Computer Science Engineering
                </div>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  PES University, Bengaluru, India
                </p>
              </div>
            </div>
            <h2 className="mt-8 text-xl font-semibold text-white">
              Career Timeline
            </h2>
            <div className="mt-6 space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm text-cyan-300/75">{item.period}</div>
                  <div className="mt-1 text-lg font-medium text-white">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-3xl border border-white/10 bg-[#101010] p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">
                Technical Skills
              </h2>
              <Link
                href="/resume/download"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                <Download className="h-4 w-4" /> Download PDF
              </Link>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium text-white">Achievements</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-white/65">
                <li>
                  AI Data Analyst and AI Web Developer experience at InAmigos.
                </li>
                <li>Girl Script Summer of Code (GSSoC) 2025 contributor.</li>
                <li>
                  Web Development Certification (Udemy), Python Programming,
                  Problem Solving, and API Fundamentals.
                </li>
                <li>
                  Participated in advanced AI/ML and Neural Technology
                  workshops.
                </li>
              </ul>
            </div>
            <div className="mt-6 grid gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-base font-medium text-white">
                    {skill.title}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium text-white">
                Languages & Interests
              </div>
              <p className="mt-3 text-sm leading-7 text-white/65">
                English (Proficient), Kannada (Native), Hindi (Fluent), Telugu
                (Fluent)
              </p>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Interests: Artificial Intelligence, Machine Learning, Computer
                Vision, Full-Stack Development, Product Development, Forex
                Market Trading, Emerging Technologies, Hackathons
              </p>
            </div>
          </section>
        </div>
      </PageShell>
    </main>
  );
}
