"use client";

import { useEffect, useState } from "react";

type Vibe = "street" | "soundsystem" | "noir";

const VIBES: { id: Vibe; label: string; tagline: string }[] = [
  { id: "street", label: "Street", tagline: "Crack Mag · off-white quente" },
  { id: "soundsystem", label: "Soundsystem", tagline: "Notting Hill · terracotta" },
  { id: "noir", label: "Noir", tagline: "Berghain · lime acid" },
];

export function VibeSwitcher() {
  const [vibe, setVibe] = useState<Vibe>("street");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" && window.localStorage.getItem("od-vibe")) as Vibe | null;
    if (stored && ["street", "soundsystem", "noir"].includes(stored)) {
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
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-4 shadow-2xl min-w-[260px]">
          <div className="flex justify-between items-center mb-3">
            <span className="mono text-[var(--fg-subtle)]">Vibe</span>
            <button
              onClick={() => setOpen(false)}
              className="mono text-[var(--fg-muted)] hover:text-[var(--fg)]"
              aria-label="Fechar"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {VIBES.map((v) => (
              <button
                key={v.id}
                onClick={() => setVibe(v.id)}
                className={`flex flex-col items-start text-left p-3 border transition-colors ${
                  vibe === v.id
                    ? "bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]"
                    : "border-[var(--border)] hover:border-[var(--accent)]"
                }`}
              >
                <span className="font-display text-2xl leading-none tracking-tight">
                  {v.label.toUpperCase()}
                </span>
                <span className="mono mt-1 opacity-70">{v.tagline}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="btn-ghost bg-[var(--bg-elevated)]"
          aria-label="Mudar vibe"
        >
          Vibe · {vibe}
        </button>
      )}
    </div>
  );
}
