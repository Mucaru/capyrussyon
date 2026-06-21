"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const SOCIALS = [
  { label: "Email", value: "halo@aikopradana.dev", href: "mailto:halo@aikopradana.dev" },
  { label: "GitHub", value: "github.com/aikopradana", href: "https://github.com" },
  { label: "LinkedIn", value: "linkedin.com/in/aikopradana", href: "https://linkedin.com" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Gagal mengirim pesan.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Terjadi kesalahan tak terduga."
      );
    }
  }

  return (
    <section
      id="kontak"
      className="mx-auto max-w-6xl border-t border-rule px-6 py-20"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-rust"
          >
            Kontak
          </motion.p>

          <div className="mt-8 flex flex-col gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-caption">
                  {s.label}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-ink-soft transition-colors group-hover:text-rust">
                  {s.value}
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.75}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 md:col-start-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-light leading-tight text-ink sm:text-4xl"
          >
            Punya proyek atau ide yang ingin didiskusikan?
          </motion.h2>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <Field label="Nama" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Nama lengkap"
                  className="w-full border-b border-rule bg-transparent py-2 font-sans text-ink placeholder:text-caption/60 focus:border-rust focus:outline-none"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  className="w-full border-b border-rule bg-transparent py-2 font-sans text-ink placeholder:text-caption/60 focus:border-rust focus:outline-none"
                />
              </Field>
            </div>

            <Field label="Pesan" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Ceritakan sedikit tentang proyeknya..."
                className="w-full resize-none border-b border-rule bg-transparent py-2 font-sans text-ink placeholder:text-caption/60 focus:border-rust focus:outline-none"
              />
            </Field>

            <div className="flex items-center gap-5 pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-rust hover:bg-rust hover:text-paper disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    Mengirim
                    <Loader2 size={14} className="animate-spin" />
                  </>
                ) : status === "success" ? (
                  <>
                    Terkirim
                    <Check size={14} />
                  </>
                ) : (
                  <>
                    Kirim pesan
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-caption"
                >
                  Terima kasih — saya akan balas secepatnya.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-rust"
                >
                  {errorMsg}
                </motion.p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] uppercase tracking-[0.12em] text-caption"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
