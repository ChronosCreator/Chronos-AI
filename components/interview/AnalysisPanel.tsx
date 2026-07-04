"use client";

import { EvaluationResult } from "@/types/evaluation";

type Props = {
  result: EvaluationResult | null;
};

export default function AnalysisPanel({
  result,
}: Props) {
  if (!result) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold text-white">
          AI Analysis
        </h3>

        <p className="mt-6 text-slate-400">
          Complete your answer and click
          <span className="text-cyan-300">
            {" "}Evaluate Answer
          </span>
          {" "}to receive feedback.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h3 className="text-xl font-bold text-white">
        AI Analysis
      </h3>

      <div className="mt-8">

        <p className="text-slate-400">
          Overall Score
        </p>

       <h2 className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-6xl font-bold text-transparent">
  {result.score}%
</h2>

      </div>

      <div className="mt-8">

        <h4 className="font-semibold text-green-400">
          Strengths
        </h4>

        <ul className="mt-3 space-y-3">
          {result.strengths.map((item) => (
            <li
  key={item}
  className="rounded-xl border border-green-500/20 bg-green-500/10 p-3"
>
  ✅ {item}
</li>
          ))}
        </ul>

      </div>

      <div className="mt-8">

        <h4 className="font-semibold text-yellow-400">
          Improvements
        </h4>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          {result.improvements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </div>

      <div className="mt-8">

        <h4 className="font-semibold text-cyan-400">
          Feedback
        </h4>

        <p className="mt-3 leading-7 text-slate-300">
          {result.feedback}
        </p>

      </div>

    </div>
  );
}