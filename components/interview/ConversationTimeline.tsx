"use client";

import { InterviewHistoryItem } from "@/types/interviewHistory";

type Props = {
  history: InterviewHistoryItem[];
};

export default function ConversationTimeline({
  history,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h3 className="text-xl font-bold text-white">
        Interview Timeline
      </h3>

      {history.length === 0 ? (
        <p className="mt-6 text-slate-400">
          No questions answered yet.
        </p>
      ) : (
        <div className="mt-6 space-y-6">
          {history.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
            >
              <p className="font-semibold text-cyan-300">
                Q{index + 1}
              </p>

              <p className="mt-2 text-white">
                {item.question}
              </p>

              <p className="mt-4 text-sm text-slate-300">
                {item.answer}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-400">
                  Score: {item.evaluation.score}%
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}