"use client";

import { Loader2 } from "lucide-react";

type LoadingCardProps = {
  title?: string;
  message?: string;
};

export default function LoadingCard({
  title = "Loading...",
  message = "Please wait while we prepare everything.",
}: LoadingCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">

      <Loader2
        size={36}
        className="animate-spin text-cyan-400"
      />

      <h2 className="mt-6 text-xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm text-slate-300">
        {message}
      </p>

      <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

    </div>
  );
}