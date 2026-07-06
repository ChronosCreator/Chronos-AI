"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import {
  InterviewSessionProvider,
} from "@/contexts/InterviewSessionContext";
import { useEffect } from "react";
import useInterviewRestore from "@/hooks/useInterviewRestore";
import {
  InterviewConfigProvider,
} from "@/contexts/InterviewConfigContext";
import useInterviewAutosave from "@/hooks/useInterviewAutosave";
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

  useInterviewAutosave({
  currentQuestion,
  currentIndex,
  totalQuestions,
  history,
});

  const {
    isThinking,
    think,
  } = useAIState();

  const savedInterview =
  useInterviewRestore();

  useEffect(() => {
  const handleBeforeUnload = (
    event: BeforeUnloadEvent
  ) => {
    event.preventDefault();
    event.returnValue = "";
  };

  window.addEventListener(
    "beforeunload",
    handleBeforeUnload
  );

  return () => {
    window.removeEventListener(
      "beforeunload",
      handleBeforeUnload
    );
  };
}, []);

 if (savedInterview) {
    console.log(
      "Saved Interview:",
      savedInterview
    );
  }

return (
    
    <main className="min-h-screen bg-black px-4 py-16 text-white md:px-8 md:py-24">
      <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-6 rounded-2xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl md:mb-10 md:flex-row md:items-center md:justify-between md:p-6">
        <div className="text-center md:text-left">
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