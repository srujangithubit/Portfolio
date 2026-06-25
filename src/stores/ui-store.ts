"use client";

import { create } from "zustand";

type UiStore = {
  commandPaletteOpen: boolean;
  mobileNavOpen: boolean;
  currentSection: string;
  reducedMotion: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  setMobileNavOpen: (open: boolean) => void;
  setCurrentSection: (section: string) => void;
  setReducedMotion: (value: boolean) => void;
};

export const useUiStore = create<UiStore>((set) => ({
  commandPaletteOpen: false,
  mobileNavOpen: false,
  currentSection: "home",
  reducedMotion: false,
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setReducedMotion: (value) => set({ reducedMotion: value }),
}));
