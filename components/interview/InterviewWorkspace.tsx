"use client";

import GlassCard from "@/components/ui/GlassCard";
import CandidatePanel from "./CandidatePanel";
import AIInterviewer from "./AIInterviewer";
import AnalysisPanel from "./AnalysisPanel";
import ConversationTimeline from "./ConversationTimeline";
import InterviewTimer from "./InterviewTimer";
import InterviewProgress from "./InterviewProgress";
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
    <GlassCard className="p-10">
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
        <InterviewProgress
          current={current}
          total={total}
        />
      </div>

      {/* Main */}

      <div className="grid items-start gap-10 py-10 lg:grid-cols-2">
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
        <div className="grid gap-12 lg:grid-cols-2">
         <ConversationTimeline
  history={history}
/>

          <AnalysisPanel
  result={result}
/>
        </div>
      </div>

      {/* Buttons */}

     <div className="mt-10 flex justify-end gap-4">
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