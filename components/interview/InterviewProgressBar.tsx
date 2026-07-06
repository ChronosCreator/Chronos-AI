"use client";

type InterviewProgressBarProps = {
  current: number;
  total: number;
};

export default function InterviewProgressBar({
  current,
  total,
}: InterviewProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full">

      <div className="mb-3 flex items-center justify-between">

        <span className="text-sm font-medium text-cyan-300">
          Interview Progress
        </span>

        <span className="text-sm text-slate-400">
          {current} / {total}
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">

        <div
          style={{
            width: `${progress}%`,
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-blue-500
            transition-all
            duration-700
          "
        />

      </div>

    </div>
  );
}