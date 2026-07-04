"use client";

import Link from "next/link";
import { CheckCircle2, RotateCcw, Home } from "lucide-react";
import { InterviewResult } from "@/types/interview";
import { useEffect, useState } from "react";
import { getUserInterviews } from "@/services/dashboard";

export default function InterviewResultsPage() {

    const [latestInterview, setLatestInterview] =
  useState<InterviewResult | null>(null);

useEffect(() => {
  async function loadInterview() {
    const interviews = await getUserInterviews();

    if (interviews.length > 0) {
      setLatestInterview(interviews[0]);
    }
  }

  loadInterview();
}, []);

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">

            <CheckCircle2
              size={50}
              className="text-cyan-400"
            />

          </div>

          <h1 className="mt-8 text-5xl font-bold">
            Interview Complete
          </h1>

          <p className="mt-4 text-slate-400">
            Chronos AI has finished analyzing your interview.
          </p>

        </div>

        {/* Score */}

        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

          <p className="text-center text-slate-400">
            Overall Score
          </p>

          <h2 className="mt-6 text-center text-7xl font-bold text-cyan-400">
            {latestInterview?.score ?? 0}%
          </h2>

        </div>

        {/* Stats */}

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-slate-400">
              Communication
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-300">
              94%
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-slate-400">
              Technical
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-300">
              90%
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-slate-400">
              Confidence
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-300">
              89%
            </h3>

          </div>

        </div>

        {/* Feedback */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">

            <h2 className="text-2xl font-bold text-green-400">
              Strengths
            </h2>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>{latestInterview?.strengths[0]}</li>

              <li>{latestInterview?.strengths[1]}</li>

              <li>{latestInterview?.strengths[2]}</li>

            </ul>

          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8">

           <h2 className="text-2xl font-bold text-yellow-400">
  Improvements
</h2>

            <ul className="mt-6 space-y-4 text-slate-300">

              {latestInterview?.improvements.map((item) => (
  <li key={item}>{item}</li>
))}

            </ul>

          </div>

        </div>

        {/* AI Feedback */}

        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-white/5 p-10">

         <h2 className="text-2xl font-bold">
  AI Feedback
</h2>

          <p className="mt-6 leading-8 text-slate-300">
  {latestInterview?.feedback}
</p>

        </div>

        {/* Buttons */}

        <div className="mt-16 flex flex-wrap justify-center gap-6">

          <Link href="/interview/setup">

            <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold transition hover:scale-105">

              <RotateCcw size={20} />

              Retry Interview

            </button>

          </Link>

          <Link href="/">

            <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10">

              <Home size={20} />

              Home

            </button>

          </Link>

        </div>

      </div>

    </main>
  );
}