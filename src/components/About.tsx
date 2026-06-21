"use client";

import { motion } from "framer-motion";

const DISCIPLINES = [
  {
    label: "Engineering",
    detail:
      "Next.js, TypeScript, Node.js, PostgreSQL. Senang merapikan sistem yang berantakan jadi predictable.",
  },
  {
    label: "Design",
    detail:
      "Tipografi, sistem desain, dan interaksi. Percaya bahwa detail kecil menentukan rasa percaya pengguna.",
  },
  {
    label: "Cara kerja",
    detail:
      "Mulai dari masalah nyata, bukan tools. Prototipe cepat, lalu dipertajam lewat pemakaian sungguhan.",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
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
            Tentang
          </motion.p>
        </div>

        <div className="md:col-span-8 md:col-start-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-light leading-tight text-ink sm:text-4xl"
          >
            Saya percaya produk terbaik lahir saat batas antara “yang
            membangun” dan “yang merancang” menghilang.
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-rule sm:grid-cols-3">
            {DISCIPLINES.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-paper p-6 sm:border-l sm:border-rule sm:first:border-l-0"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-caption">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-lg text-ink">
                  {d.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-caption">
                  {d.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
