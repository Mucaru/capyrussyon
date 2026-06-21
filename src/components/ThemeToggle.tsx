"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  // null = not yet mounted (avoids hydration mismatch); boolean once known.
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Reading theme state from the DOM (set by the no-flash init script in
    // layout.tsx) is an external-system sync, not derived-state duplication —
    // this is the documented exception to this rule.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  // Avoid layout shift / hydration mismatch: render a stable-size placeholder.
  if (isDark === null) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      aria-pressed={isDark}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-rust hover:text-rust"
    >
      <Sun
        size={16}
        strokeWidth={1.75}
        className={`absolute transition-all duration-300 ${
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        size={16}
        strokeWidth={1.75}
        className={`absolute transition-all duration-300 ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
