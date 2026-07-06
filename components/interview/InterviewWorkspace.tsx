"use client";

import GlassCard from "@/components/ui/GlassCard";
import CandidatePanel from "./CandidatePanel";
import AIInterviewer from "./AIInterviewer";
import AnalysisPanel from "./AnalysisPanel";
import ConversationTimeline from "./ConversationTimeline";
import InterviewTimer from "./InterviewTimer";
import { InterviewHistoryItem } from "@/types/interviewHistory";

type Props = {
  question: string;
  current: number;
  total: number;

  onNext: () => void;

  isThinking: boolean;

  loading: boolean;
  onEvaluate: () => void;

  result: import("@/types/evaluation").EvaluationResult | null;
  history: InterviewHistoryItem[];
};

export default function InterviewWorkspace({
  question,
  current,
  total,
  onNext,
  isThinking,
  loading,
  onEvaluate,
  result,
  history,
}: Props) {
  return (
    <GlassCard className="p-5 md:p-10">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />

          <span className="font-medium text-red-400">
            LIVE INTERVIEW
          </span>
        </div>

        <InterviewTimer />
      </div>

      {/* Progress */}

      <div className="mt-8">
        <h2 className="text-xl text-white">
          Progress: {current} / {total}
        </h2>
      </div>

      {/* Main */}

      <div className="grid items-start gap-6 py-6 md:gap-10 md:py-10 lg:grid-cols-2">
        <CandidatePanel />

        <AIInterviewer
          question={question}
          current={current}
          total={total}
          thinking={isThinking}
        />
      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 pt-10">
       <div className="grid gap-6 md:gap-12 lg:grid-cols-2">
          <ConversationTimeline
            history={history}
          />

          <AnalysisPanel
            result={result}
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-end">
        <button
          onClick={onEvaluate}
          disabled={loading}
          className="rounded-2xl border border-cyan-400 px-8 py-3 text-cyan-300 transition hover:bg-cyan-400/10"
        >
          {loading ? "Evaluating..." : "Evaluate Answer"}
        </button>

        <button
          onClick={onNext}
          disabled={isThinking}
          className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 font-semibold transition-all hover:scale-105 disabled:opacity-50"
        >
          Next Question →
        </button>
      </div>
    </GlassCard>
  );
}