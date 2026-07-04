"use client";

type Props = {
  loading: boolean;
  onClick: () => void;
};

export default function EvaluateButton({
  loading,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading
        ? "Chronos AI Thinking..."
        : "Evaluate Answer"}
    </button>
  );
}