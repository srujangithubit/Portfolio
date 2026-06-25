"use client";

import { useMemo, useState } from "react";
import { terminalCommands } from "../data";

const outputs: Record<string, string[]> = {
  help: ["Available commands:", ...terminalCommands],
  about: [
    "AI Engineer | Full Stack Developer | ML Engineer | Quant Developer",
    "Building clean systems with product thinking.",
  ],
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "PyTorch",
    "Trading Systems",
    "DevOps",
  ],
  projects: [
    "TradePro",
    "AI Trading Model",
    "Jarvis AI Assistant",
    "Autonomous Crypto Trading Agent",
  ],
  resume: [
    "Resume available at /resume",
    "Education, experience, projects, and achievements included.",
  ],
  github: ["github.com/yourname"],
  linkedin: ["linkedin.com/in/yourname"],
  contact: ["email@yourdomain.com"],
  theme: ["Dark premium mode is active."],
};

export function FakeTerminal() {
  const [history, setHistory] = useState<string[]>([
    "portfolio@studio:~$ help",
  ]);
  const [input, setInput] = useState("");

  const prompt = useMemo(() => "portfolio@studio:~$", []);

  const runCommand = () => {
    const value = input.trim().toLowerCase();
    if (!value) return;

    if (value === "clear") {
      setHistory([]);
    } else {
      setHistory((current) => [
        ...current,
        `${prompt} ${value}`,
        ...(outputs[value] ?? [`Unknown command: ${value}`]),
      ]);
    }
    setInput("");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#090909] p-4 font-mono text-sm text-white/80 shadow-2xl shadow-black/30">
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4 text-white/45">
        <span className="h-3 w-3 rounded-full bg-rose-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-xs uppercase tracking-[0.3em]">
          Terminal Mode
        </span>
      </div>
      <div className="max-h-96 space-y-2 overflow-y-auto whitespace-pre-wrap">
        {history.map((line, index) => (
          <div key={`${line}-${index}`}>{line}</div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-3">
        <span className="text-cyan-300">{prompt}</span>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && runCommand()}
          className="w-full bg-transparent outline-none"
          placeholder="Type a command..."
        />
      </div>
    </div>
  );
}
