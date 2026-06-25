import { timeline } from "../data";

export function Timeline() {
  return (
    <div className="relative space-y-4">
      <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-linear-to-b from-cyan-300/60 via-white/15 to-transparent" />
      {timeline.map((item, index) => (
        <article key={item.title} className="relative pl-12">
          <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-[#050505] text-xs font-semibold text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">
              {item.period}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
