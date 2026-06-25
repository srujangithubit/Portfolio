"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export function HeroField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fieldRef.current) return;

    const blobs = fieldRef.current.querySelectorAll<HTMLElement>("[data-blob]");
    const rings = fieldRef.current.querySelectorAll<HTMLElement>("[data-ring]");

    gsap.to(blobs, {
      y: "random(-24, 24)",
      x: "random(-18, 18)",
      duration: 7,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    });

    gsap.to(rings, {
      rotation: 360,
      duration: 42,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={fieldRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20" />
      <motion.div
        data-blob
        className="absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        data-blob
        className="absolute right-[10%] top-[26%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        data-blob
        className="absolute bottom-[8%] left-[30%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.35, 0.18] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        data-ring
        className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />
      <div
        data-ring
        className="absolute left-1/2 top-1/2 h-180 w-180 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
      />
    </div>
  );
}
