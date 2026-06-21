"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HEADLINE_LINE_1 = ["Membangun", "produk"];
const HEADLINE_LINE_2 = ["dari", "kode", "sampai"];
const HEADLINE_LINE_3 = ["komposisi", "visual."];

const wordVariants = {
  hidden: { y: "110%", rotate: 2 },
  visible: (i: number) => ({
    y: "0%",
    rotate: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function AnimatedLine({
  words,
  startIndex,
}: {
  words: string[];
  startIndex: number;
}) {
  return (
    <span className="flex flex-wrap gap-x-[0.28em]">
      {words.map((word, i) => (
        <span key={word} className="overflow-hidden pb-1">
          <motion.span
            custom={startIndex + i}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const line1Count = HEADLINE_LINE_1.length;
  const line2Count = HEADLINE_LINE_2.length;

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-14 sm:pt-20"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-4">
        {/* eyebrow / kicker — editorial label, not decoration */}
        <div className="md:col-span-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-rust"
          >
            Developer &amp; Designer — Jakarta
          </motion.p>
        </div>

        <h1 className="font-display md:col-span-11 text-[12vw] font-light leading-[0.98] tracking-tight text-ink sm:text-[8vw] md:text-[5.6vw]">
          <AnimatedLine words={HEADLINE_LINE_1} startIndex={0} />
          <AnimatedLine words={HEADLINE_LINE_2} startIndex={line1Count} />
          <span className="flex flex-wrap items-baseline gap-x-[0.28em]">
            <AnimatedLine
              words={HEADLINE_LINE_3}
              startIndex={line1Count + line2Count}
            />
          </span>
        </h1>
      </div>

      {/* self-drawing rule — the signature underline beneath the headline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: "left" }}
        className="h-px w-full bg-ink/20"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="font-sans md:col-span-5 text-base leading-relaxed text-ink-soft"
        >
          Saya Aiko — bekerja di persimpangan rekayasa perangkat lunak dan
          desain. Lima tahun terakhir membantu tim kecil mengubah ide jadi
          produk yang dipakai sungguhan: dari arsitektur sistem sampai detail
          tipografi di layar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="md:col-span-4 md:col-start-9"
        >
          <a
            href="#karya"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:text-rust"
          >
            Lihat karya
            <ArrowDownRight
              size={15}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
