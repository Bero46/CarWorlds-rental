"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem("carworlds-theme-mode") as any) || "light";
    setMode(saved);
    document.documentElement.setAttribute("data-theme-mode", saved);
  }, []);

  function toggle() {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("carworlds-theme-mode", next);
    document.documentElement.setAttribute("data-theme-mode", next);
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-white/10 transition"
      aria-label="Theme wechseln"
      title={mode === "light" ? "Dunkel" : "Hell"}
    >
      {mode === "light" ? "🌙" : "☀️"}
    </button>
  );
}
