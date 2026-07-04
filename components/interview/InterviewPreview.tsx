"use client";

import Link from "next/link";

type Props = {
  role: string;
  difficulty: string;
  duration: string;
  questions: number;
};

export default function InterviewPreview({
  role,
  difficulty,
  duration,
  questions,
}: Props) {
  return (
    <div className="sticky top-28 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-2xl font-bold text-white">
        Interview Preview
      </h2>

      <div className="mt-8 space-y-6">

        <div>
          <p className="text-slate-400 text-sm">
            Role
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {role}
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Difficulty
          </p>

          <h3 className="mt-1 text-xl font-semibold text-cyan-300">
            {difficulty}
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Duration
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {duration}
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Questions
          </p>

          <h3 className="mt-1 text-3xl font-bold text-cyan-400">
            {questions}
          </h3>
        </div>

      </div>

      <Link href="/interview">
        <button className="mt-10 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-lg font-semibold transition hover:scale-[1.02]">
          Start Interview →
        </button>
      </Link>

    </div>
  );
}