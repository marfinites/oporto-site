"use client";

import { useEffect, useState } from "react";

type Vibe = "caribean" | "mono" | "tropical";

const VIBES: { id: Vibe; label: string; tagline: string }[] = [
  { id: "caribean", label: "Caribbean", tagline: "dark + neon jamaicano" },
  { id: "mono", label: "Mono", tagline: "preto + amarelo fluor" },
  { id: "tropical", label: "Tropical", tagline: "retro sunset" },
];

export function VibeSwitcher() {
  const [vibe, setVibe] = useState<Vibe>("caribean");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("od-vibe")) as Vibe | null;
    if (stored && ["caribean", "mono", "tropical"].includes(stored)) {
      setVibe(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-vibe", vibe);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("od-vibe", vibe);
    }
  }, [vibe]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/90 p-3 backdrop-blur-md shadow-2xl">
      <div className="text-xs uppercase tracking-wider text-[var(--fg-muted)]">
        Escolhe a vibe
      </div>
      <div className="flex gap-2">
        {VIBES.map((v) => (
          <button
            key={v.id}
            onClick={() => setVibe(v.id)}
            className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all ${
              vibe === v.id
                ? "bg-[var(--accent)] text-black"
                : "bg-[var(--bg)] text-[var(--fg)] hover:bg-[var(--border)]"
            }`}
            title={v.tagline}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
