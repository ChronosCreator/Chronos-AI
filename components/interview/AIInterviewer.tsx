"use client";

import { BrainCircuit } from "lucide-react";

import AIAvatar from "./AIAvatar";
import AIStatus from "./AIStatus";
import TypingQuestion from "./TypingQuestion";

type Props = {
  question: string;
  current: number;
  total: number;
  thinking: boolean;
};

export default function AIInterviewer({
  question,
  current,
  total,
  thinking,
}: Props) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-cyan-300">
            AI Interviewer
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            Chronos AI
          </h3>
          <p className="mt-2 text-sm text-slate-400">
  Question {current} of {total}
</p>
        </div>

        <div className="flex items-center gap-2">
          <BrainCircuit
            size={18}
            className="text-cyan-400"
          />

          <AIStatus thinking={thinking} />
        </div>
      </div>

      {/* Avatar */}
      <div className="mt-8 flex justify-center">
        <AIAvatar />
      </div>

      {/* Question */}
      <div className="mt-10">
        <TypingQuestion
  text={question}
/>
      </div>
    </div>
  );
}