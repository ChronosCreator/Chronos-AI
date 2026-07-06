"use client";

export type SavedInterview = {
  currentQuestion: string;
  currentIndex: number;
  totalQuestions: number;
  history: unknown[];
  updatedAt: number;
};

export default function useInterviewRestore() {
  if (typeof window === "undefined") {
    return null;
  }

  const saved = localStorage.getItem(
    "chronos-interview"
  );

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved) as SavedInterview;
  } catch {
    localStorage.removeItem(
      "chronos-interview"
    );

    return null;
  }
}