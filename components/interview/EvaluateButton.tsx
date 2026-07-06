"use client";

import { Loader2, Sparkles } from "lucide-react";

type EvaluateButtonProps = {
  loading: boolean;
  onClick: () => void;
};

export default function EvaluateButton({
  loading,
  onClick,
}: EvaluateButtonProps) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        px-6
        py-4
        font-semibold
        text-white
        transition
        duration-300
        hover:scale-[1.02]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? (
        <>
          <Loader2
            size={20}
            className="animate-spin"
          />

          AI is evaluating...
        </>
      ) : (
        <>
          <Sparkles size={20} />

          Evaluate Answer
        </>
      )}
    </button>
  );
}