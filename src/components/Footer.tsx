export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl border-t border-rule px-6 py-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-caption">
          © {year} Aiko Pradana. Dirancang &amp; dibangun sendiri.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-caption">
          Dibuat dengan Next.js &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
