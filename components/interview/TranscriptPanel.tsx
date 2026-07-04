"use client";

type Props = {
  transcript: string;
};

export default function TranscriptPanel({
  transcript,
}: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl">

      <h3 className="text-lg font-semibold text-cyan-300">
        Live Transcript
      </h3>

      <div className="mt-4 min-h-[140px] rounded-xl bg-black/30 p-4">

        {transcript ? (
          <p className="leading-8 text-slate-300">
            {transcript}
          </p>
        ) : (
          <p className="text-slate-500">
            Start speaking...
          </p>
        )}

      </div>

    </div>
  );
}