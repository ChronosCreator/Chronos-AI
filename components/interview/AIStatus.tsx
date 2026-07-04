"use client";

type Props = {
  thinking?: boolean;
};

export default function AIStatus({
  thinking = false,
}: Props) {
  return (
    <div
      className={`rounded-full px-3 py-1 text-sm font-medium transition ${
        thinking
          ? "bg-yellow-500/20 text-yellow-300"
          : "bg-green-500/20 text-green-300"
      }`}
    >
      {thinking ? "Thinking..." : "Listening"}
    </div>
  );
}