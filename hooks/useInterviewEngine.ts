"use client";
import { InterviewHistoryItem } from "@/types/interviewHistory";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  useInterviewConfig,
} from "@/contexts/InterviewConfigContext";
import useRecorder from "./useRecorder";
import useSpeechRecognition from "./useSpeechRecognition";
import useEvaluation from "./useEvaluation";
import {
  useInterviewSession,
} from "@/contexts/InterviewSessionContext";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/constants/interviewQuestions";
import { useInterviewContext } from "@/contexts/InterviewContext";
import { saveInterviewToDatabase } from "@/services/interviewDatabase";
export default function useInterviewEngine() {

  
  const recorder = useRecorder();
  const speech = useSpeechRecognition();
const router = useRouter();
  const {
    loading,
    result,
    evaluate,
  } = useEvaluation();

  const {
    transcript,
    setTranscript,
  } = useInterviewContext();

  const {
  config,
} = useInterviewConfig();

const {
  session,
  setSession,
} = useInterviewSession();

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalQuestions = QUESTIONS.length;

  const currentQuestion =
  session.currentQuestion ||
  QUESTIONS[0].question;

  const [history, setHistory] = useState<
  InterviewHistoryItem[]
>([]);
  

  useEffect(() => {
    setTranscript(speech.transcript);
  }, [speech.transcript, setTranscript]);

  const startInterview = async () => {
  try {
    await recorder.startRecording();
    speech.startListening();
  } catch (error) {
    console.error("Interview start failed:", error);
  }
};

  const stopInterview = () => {
    recorder.stopRecording();
    speech.stopListening();
  };

  const evaluateCurrentAnswer = async () => {
    if (!transcript.trim()) return null;

    return await evaluate(
      currentQuestion,
      transcript,
      config.role,
config.difficulty
    );
  };

  const nextQuestion = async () => {
  const evaluationResult =
    await evaluateCurrentAnswer();

  if (!evaluationResult) return;

  // Save current question in history
 const newHistory = [
  ...history,
  {
    question: currentQuestion,
    answer: transcript,
    evaluation: evaluationResult,
  },
];

setHistory(newHistory);

  // AI generated question
  if (evaluationResult.nextQuestion) {
    setSession((prev) => ({
      ...prev,

      currentQuestion:
        evaluationResult.nextQuestion,

      currentIndex:
        prev.currentIndex + 1,
    }));
  }

  // Last Question
  if (currentIndex >= QUESTIONS.length - 1) {
   await saveInterviewToDatabase({
  id: uuid(),

  role: config.role,

  difficulty: config.difficulty,

  duration: config.duration,

  score: evaluationResult.score,

  strengths: evaluationResult.strengths,

  improvements: evaluationResult.improvements,

  feedback: evaluationResult.feedback,

  transcript,

  history: newHistory,

  createdAt: new Date().toISOString(),
});
    router.push("/interview/results");

    return;
  }

  setCurrentIndex((prev) => prev + 1);
};

 return {
  currentQuestion,
  currentIndex,
  totalQuestions,
  nextQuestion,
  startInterview,
  stopInterview,
  evaluateCurrentAnswer,
  loading,
  result,
  history,
  ...recorder,
  ...speech,
};
}