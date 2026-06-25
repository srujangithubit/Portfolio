"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
