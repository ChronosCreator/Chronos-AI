"use client";

type Props = {
  score: number;
};

export default function ScoreCard({
  score,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10">

      <p className="text-slate-400">
        Overall Score
      </p>

      <h1 className="mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-7xl font-bold text-transparent">
        {score}%
      </h1>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

    </div>
  );
}