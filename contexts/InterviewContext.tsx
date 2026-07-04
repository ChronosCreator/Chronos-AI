"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { QUESTIONS } from "@/constants/interviewQuestions";

type InterviewContextType = {
  transcript: string;
  setTranscript: (value: string) => void;

  currentQuestion: number;
  setCurrentQuestion: (value: number) => void;

  nextQuestion: () => void;
  resetInterview: () => void;
};

const InterviewContext =
  createContext<InterviewContextType | null>(null);

export function InterviewProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [transcript, setTranscript] =
    useState("");

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

    const nextQuestion = () => {
  setCurrentQuestion((prev) =>
    Math.min(prev + 1, QUESTIONS.length - 1)
  );
};

const resetInterview = () => {
  setCurrentQuestion(0);
};

    

  return (
    <InterviewContext.Provider
     value={{
  transcript,
  setTranscript,

  currentQuestion,
  setCurrentQuestion,

  nextQuestion,
  resetInterview,
}}
    >
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterviewContext() {
  const context = useContext(
    InterviewContext
  );

  if (!context) {
    throw new Error(
      "useInterviewContext must be used inside InterviewProvider"
    );
  }

  return context;
}