"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type Props = {
  role: string;
  difficulty: string;
  duration: string;
  questions: number;
};

export default function AIInitialization({
  role,
  difficulty,
  duration,
  questions,
}: Props) {
  const steps = [
    "Loading interview template...",
    "Generating AI questions...",
    "Configuring evaluation engine...",
    "Preparing interview room...",
  ];

  return (
    <div className="sticky top-28 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center gap-3">
        <BrainCircuit className="text-cyan-400" size={28} />

        <div>
          <h2 className="text-2xl font-bold text-white">
            Chronos AI
          </h2>

          <p className="text-sm text-cyan-300">
            Preparing Interview...
          </p>
        </div>
      </div>

      {/* Loading Steps */}

      <div className="mt-10 space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.3,
            }}
            className="flex items-center justify-between"
          >
            <span className="text-slate-300">
              {step}
            </span>

            <CheckCircle2
              size={18}
              className="text-green-400"
            />
          </motion.div>
        ))}
      </div>

      {/* Interview Summary */}

      <div className="mt-12 rounded-2xl border border-white/10 bg-black/20 p-6">

        <div className="flex justify-between">
          <span className="text-slate-400">Role</span>
          <span className="font-medium">{role}</span>
        </div>

        <div className="mt-4 flex justify-between">
          <span className="text-slate-400">Difficulty</span>
          <span className="font-medium">{difficulty}</span>
        </div>

        <div className="mt-4 flex justify-between">
          <span className="text-slate-400">Duration</span>
          <span className="font-medium">{duration}</span>
        </div>

        <div className="mt-4 flex justify-between">
          <span className="text-slate-400">Questions</span>
          <span className="font-medium text-cyan-300">
            {questions}
          </span>
        </div>

      </div>

      {/* Start Button */}

      <Link
        href={`/interview?role=${encodeURIComponent(
          role
        )}&difficulty=${encodeURIComponent(
          difficulty
        )}&duration=${encodeURIComponent(duration)}`}
      >
        <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
          Start Interview →
        </button>
      </Link>

    </div>
  );
}