"use client";

import useAudioVisualizer from "@/hooks/useAudioVisualizer";

type Props = {
  stream: MediaStream | null;
  isRecording: boolean;
};

export default function Waveform({
  stream,
  isRecording,
}: Props) {
  const levels = useAudioVisualizer(stream);

  return (
    <div className="flex h-24 items-end justify-center gap-1">
      {levels.map((height, index) => (
        <div
          key={index}
          className={`w-2 rounded-full transition-all duration-75 ${
            isRecording
              ? "bg-gradient-to-t from-cyan-500 to-cyan-300"
              : "bg-slate-600"
          }`}
          style={{
            height: `${height}px`,
          }}
        />
      ))}
    </div>
  );
}