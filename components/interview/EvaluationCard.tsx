"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import { EvaluationResult } from "@/types/evaluation";

type Props = {
  loading: boolean;
  result: EvaluationResult | null;
};

export default function EvaluationCard({
  loading,
  result,
}: Props) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
        <p className="animate-pulse text-cyan-300">
          Chronos AI is evaluating your answer...
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">
          Complete an answer to see AI feedback.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          AI Evaluation
        </h2>

        <Sparkles className="text-cyan-400" />

      </div>

      <div className="mt-8">

        <p className="text-slate-400">
          Overall Score
        </p>

        <h1 className="text-6xl font-black text-cyan-300 mt-2">
          {result.score}
        </h1>

      </div>

      <div className="mt-10">

        <h3 className="font-semibold mb-4">
          Strengths
        </h3>

        <div className="space-y-3">

          {result.strengths.map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >

              <CheckCircle2
                className="text-green-400 mt-1"
                size={18}
              />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

      <div className="mt-10">

        <h3 className="font-semibold mb-4">
          Improvements
        </h3>

        <div className="space-y-3">

          {result.improvements.map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >

              <Sparkles
                className="text-cyan-400 mt-1"
                size={18}
              />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

      <div className="mt-10 rounded-xl bg-black/20 p-4">

        <p className="text-slate-300 leading-7">
          {result.feedback}
        </p>

      </div>

    </div>
  );
}