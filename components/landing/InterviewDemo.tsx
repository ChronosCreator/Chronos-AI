"use client";

import { motion } from "framer-motion";

export default function InterviewDemo() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Live AI Interview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            See Chronos AI{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Think
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Experience a realistic AI-powered interview with instant feedback,
            performance insights, and personalized improvement suggestions.
          </p>
        </motion.div>

        {/* Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
        >
         <div className="flex h-[600px] items-center justify-center rounded-3xl border border-cyan-500/20 bg-black/40">
  <div className="text-center">
    <h3 className="text-3xl font-bold text-white">
      Live AI Interview
    </h3>

    <p className="mt-4 text-slate-400">
      Experience real-time AI interviews with voice,
      evaluation, and instant feedback.
    </p>

    <div className="mt-8 inline-flex rounded-full bg-cyan-500/20 px-6 py-3 text-cyan-300">
      Interactive Demo Coming Soon
    </div>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}