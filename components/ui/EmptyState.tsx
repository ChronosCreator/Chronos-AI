"use client";

import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title: string;
  message: string;
};

export default function EmptyState({
  title,
  message,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center">

      <Inbox
        size={42}
        className="text-cyan-400"
      />

      <h2 className="mt-5 text-xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-slate-400">
        {message}
      </p>

    </div>
  );
}