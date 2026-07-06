"use client";

import { AlertTriangle } from "lucide-react";

type ErrorCardProps = {
  title?: string;
  message: string;
  onRetry?: () => void;
};

export default function ErrorCard({
  title = "Something went wrong",
  message,
  onRetry,
}: ErrorCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center backdrop-blur-xl">

      <div className="mb-5 rounded-full bg-red-500/20 p-4">
        <AlertTriangle
          className="text-red-400"
          size={32}
        />
      </div>

      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm text-slate-300">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Retry
        </button>
      )}

    </div>
  );
}