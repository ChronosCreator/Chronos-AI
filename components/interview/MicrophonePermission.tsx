"use client";

import { MicOff } from "lucide-react";

type Props = {
  onRetry: () => void;
};

export default function MicrophonePermission({
  onRetry,
}: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">

      <div className="flex items-start gap-4">

        <div className="rounded-full bg-amber-500/20 p-3">
          <MicOff
            size={22}
            className="text-amber-400"
          />
        </div>

        <div className="flex-1">

          <h3 className="font-semibold text-white">
            Microphone Permission Needed
          </h3>

          <p className="mt-2 text-sm text-slate-300">
            Please allow microphone access to
            start your AI interview.
          </p>

          <button
            onClick={onRetry}
            className="mt-5 rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400"
          >
            Grant Permission
          </button>

        </div>

      </div>

    </div>
  );
}