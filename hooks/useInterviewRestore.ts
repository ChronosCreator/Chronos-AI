"use client";

import { useEffect, useState } from "react";

export type SavedInterview = {
  currentQuestion: string;
  currentIndex: number;
  totalQuestions: number;
  history: unknown[];
  updatedAt: number;
};

export default function useInterviewRestore() {
  const [savedInterview, setSavedInterview] =
    useState<SavedInterview | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(
      "chronos-interview"
    );

    if (!saved) return;

    try {
      setSavedInterview(JSON.parse(saved));
    } catch {
      localStorage.removeItem(
        "chronos-interview"
      );
    }
  }, []);

  return savedInterview;
}