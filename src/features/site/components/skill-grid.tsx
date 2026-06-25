import { skills } from "../data";

export function SkillGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill, index) => (
        <article
          key={skill.title}
          className="rounded-3xl border border-white/10 bg-[#101010] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/50">
              {skill.items.length} tools
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/60">
            {skill.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
