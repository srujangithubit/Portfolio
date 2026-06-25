"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardStats } from "../data";

async function fetchDashboard() {
  return {
    focus: "AI systems and financial tooling",
    roadmap: [
      "LLM productization",
      "Quant experimentation",
      "Tooling polish",
      "Open-source visibility",
    ],
    radar: ["React 19", "Next.js 15", "Zod", "Observability", "RSC"],
  };
}

export function DashboardView() {
  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
  });

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {dashboardStats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-[#101010] p-6"
          >
            <div className="text-sm text-white/50">{item.label}</div>
            <div className="mt-3 text-3xl font-semibold text-white">
              {item.value}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-white/10 bg-[#101010] p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-white/45">
          Current focus
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          {data?.focus ?? "Loading..."}
        </h3>
        <div className="mt-6 grid gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">
              Roadmap
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {data?.roadmap?.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">
              Technology radar
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {data?.radar?.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
