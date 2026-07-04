"use client";

type Props = {
  current: number;
  total: number;
};

export default function InterviewProgress({
  current,
  total,
}: Props) {
  const progress = (current / total) * 100;

  return (
    <div className="mb-8">

      <div className="mb-3 flex items-center justify-between">

        <span className="text-sm text-slate-400">
          Progress
        </span>

        <span className="text-sm text-cyan-300">
          {current}/{total}
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}