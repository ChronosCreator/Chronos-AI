"use client";

import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
  "NVIDIA",
  "OpenAI",
];

export default function TrustedBy() {
  return (
    <section className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <h3 className="text-center uppercase tracking-[0.35em] text-gray-500 mb-16">
        Trusted By Aspirants Preparing For
      </h3>

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-24"
      >
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="text-5xl font-black text-white/10 hover:text-cyan-400 transition-all duration-300 cursor-default"
          >
            {company}
          </div>
        ))}
      </motion.div>

    </section>
  );
}