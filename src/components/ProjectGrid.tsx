"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="karya"
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
            Karya
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-sm leading-relaxed text-caption"
          >
            Enam proyek terpilih, dari produk berjalan penuh sampai eksplorasi
            visual. Arahkan kursor untuk pratinjau.
          </motion.p>
        </div>

        <div className="md:col-span-8 md:col-start-4">
          <ul className="border-t border-rule">
            {projects.map((project, i) => (
              <motion.li
                key={project.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative border-b border-rule"
              >
                <a
                  href={project.href}
                  className="flex items-baseline justify-between gap-4 py-6 transition-colors"
                >
                  <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-caption shrink-0">
                      {project.year}
                    </span>
                    <span className="font-display truncate text-2xl font-light text-ink transition-colors group-hover:text-rust sm:text-3xl">
                      {project.title}
                    </span>
                  </div>

                  <div className="flex shrink-0 items-center gap-4">
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-caption sm:inline">
                      {project.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="text-ink-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rust"
                    />
                  </div>
                </a>

                {/* expanding detail panel — reveals summary + tags on hover/focus */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 pb-6 pl-0 sm:flex-row sm:items-end sm:justify-between sm:pl-[4.5rem]">
                        <p className="max-w-md text-sm leading-relaxed text-caption">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-caption"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
