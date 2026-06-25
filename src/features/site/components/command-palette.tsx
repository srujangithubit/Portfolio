"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { navItems, projects, socialLinks } from "../data";
import { useUiStore } from "@/stores/ui-store";

const quickActions = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Terminal", href: "/terminal" },
  { label: "Contact", href: "/contact" },
];

const buildCommandItems = () => {
  const items = [
    ...quickActions,
    ...navItems,
    ...projects.map((project) => ({
      label: project.name,
      href: `/projects/${project.slug}`,
    })),
    ...socialLinks,
  ];
  const deduped = new Map<string, { label: string; href: string }>();

  items.forEach((item) => {
    if (!deduped.has(item.href)) {
      deduped.set(item.href, item);
    }
  });

  return [...deduped.values()];
};

export function CommandPalette() {
  const open = useUiStore((state) => state.commandPaletteOpen);
  const setOpen = useUiStore((state) => state.setCommandPaletteOpen);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setOpen(!open);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const items = buildCommandItems();

    if (!normalized) {
      return items;
    }

    return items.filter((item) =>
      item.label.toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-61 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#101010] shadow-2xl shadow-black/40">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
            <Search className="h-5 w-5 text-white/50" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, pages, socials..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
            />
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {filteredItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="text-xs text-white/35">{item.href}</span>
              </Link>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
