"use client";

import { useEffect } from "react";

type Props = {
  currentQuestion: string;
  currentIndex: number;
  totalQuestions: number;
  history: unknown[];
};

export default function useInterviewAutosave({
  currentQuestion,
  currentIndex,
  totalQuestions,
  history,
}: Props) {
  useEffect(() => {
    const data = {
      currentQuestion,
      currentIndex,
      totalQuestions,
      history,
      updatedAt: Date.now(),
    };

    localStorage.setItem(
      "chronos-interview",
      JSON.stringify(data)
    );
  }, [
    currentQuestion,
    currentIndex,
    totalQuestions,
    history,
  ]);
}