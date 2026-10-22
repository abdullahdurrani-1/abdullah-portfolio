"use client";

import { Moon, Sun } from "lucide-react";

/**
 * The initial theme is set by an inline script in the root layout; this button
 * only flips the attribute and persists the choice. Icons are swapped in CSS so
 * server and client markup always match.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode) — the theme still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Moon className="theme-icon-moon h-4 w-4 transition-transform duration-500 group-hover:-rotate-12" aria-hidden="true" />
      <Sun className="theme-icon-sun h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
    </button>
  );
}
