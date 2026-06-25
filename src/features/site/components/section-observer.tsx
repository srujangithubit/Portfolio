"use client";

import { useEffect } from "react";
import { useUiStore } from "@/stores/ui-store";

export function SectionObserver() {
  const setCurrentSection = useUiStore((state) => state.setCurrentSection);

  useEffect(() => {
    const ids = [
      "home",
      "about",
      "projects",
      "research",
      "skills",
      "timeline",
      "blog",
      "terminal",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id);
            }
          });
        },
        { threshold: 0.45 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [setCurrentSection]);

  return null;
}
