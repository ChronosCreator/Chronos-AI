"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import {
  InterviewSessionProvider,
} from "@/contexts/InterviewSessionContext";

import {
  InterviewConfigProvider,
} from "@/contexts/InterviewConfigContext";

import { InterviewProvider } from "@/contexts/InterviewContext";

import InterviewWorkspace from "@/components/interview/InterviewWorkspace";

import useInterviewEngine from "@/hooks/useInterviewEngine";
import useAIState from "@/hooks/useAIState";

function InterviewContent() {
  const params = useSearchParams();

  const role =
    params.get("role") || "Frontend Developer";

  const difficulty =
    params.get("difficulty") || "Medium";

  const duration =
    params.get("duration") || "30 min";

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    nextQuestion,
    evaluateCurrentAnswer,
    loading,
    result,
    history,
  } = useInterviewEngine();

  const {
    isThinking,
    think,
  } = useAIState();

  return (
    
    <main className="min-h-screen bg-black px-8 py-24 text-white">
      <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <div>
          <p className="text-sm text-cyan-300">Role</p>
          <h2 className="text-2xl font-bold">{role}</h2>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Difficulty
          </p>
          <h3>{difficulty}</h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Duration
          </p>
          <h3>{duration}</h3>
        </div>
      </div>

      <InterviewWorkspace
        question={currentQuestion}
        current={currentIndex + 1}
        total={totalQuestions}
        onNext={() =>
          think(async () => {
            await nextQuestion();
          })
        }
        isThinking={isThinking}
        loading={loading}
        onEvaluate={evaluateCurrentAnswer}
        result={result}
        history={history}
      />
    </main>
    
  );
}

function InterviewPageContent() {
  return (
    <InterviewConfigProvider>
      <InterviewSessionProvider>
        <InterviewProvider>
          <InterviewContent />
        </InterviewProvider>
      </InterviewSessionProvider>
    </InterviewConfigProvider>
  );
}

export default function InterviewPage() {
  return (
     <ProtectedRoute>
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-black text-white">
          Loading Interview...
        </main>
      }
    >
      <InterviewPageContent />
    </Suspense>
    </ProtectedRoute>
  );
}