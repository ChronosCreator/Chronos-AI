"use client";

type Props = {
  step: number;
  total: number;
};

export default function SetupProgress({
  step,
  total,
}: Props) {
  const percentage = (step / total) * 100;

  return (
    <div className="mb-14">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-cyan-300">
          Step {step} of {total}
        </p>

        <p className="text-sm text-slate-400">
          Interview Setup
        </p>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}