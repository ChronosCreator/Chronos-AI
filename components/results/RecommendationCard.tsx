"use client";

type Props = {
  feedback: string;
};

export default function RecommendationCard({
  feedback,
}: Props) {
  return (
    <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">

      <h2 className="text-2xl font-bold text-white">
        AI Recommendation
      </h2>

      <p className="mt-6 leading-8 text-slate-300">
        {feedback}
      </p>

    </div>
  );
}