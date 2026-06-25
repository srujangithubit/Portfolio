import { metrics } from "../data";

export function MetricStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/8"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="text-3xl font-semibold tracking-tight text-white">
            {metric.value}
          </div>
          <div className="mt-2 text-sm font-medium text-white/90">
            {metric.label}
          </div>
          <p className="mt-2 text-sm leading-6 text-white/55">
            {metric.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
