"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="max-w-lg rounded-3xl border border-red-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-300">
          Chronos AI encountered an unexpected error.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}