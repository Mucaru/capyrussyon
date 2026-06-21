"use client";

import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Karya", href: "#karya" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Masthead() {
  const today = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      {/* running head — editorial detail, not decoration: tells the reader what edition this is */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between px-6 py-1.5 text-[11px] uppercase tracking-[0.18em] text-caption sm:flex">
        <span className="font-mono">Edisi Digital · Vol. 01</span>
        <span className="font-mono">{today}</span>
      </div>
      <div className="border-t border-rule sm:block hidden" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-tight text-ink"
        >
          Aiko Pradana
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-rust"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-5 md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-rust"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
