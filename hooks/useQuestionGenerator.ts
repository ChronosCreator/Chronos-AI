"use client";

import { useState } from "react";
import { generateNextQuestion } from "@/services/questionService";

export default function useQuestionGenerator() {
  const [loading, setLoading] =
    useState(false);

  const generate = async (
    role: string,
    difficulty: string,
    previousQuestion: string,
    answer: string
  ) => {
    setLoading(true);

    try {
      const data =
        await generateNextQuestion(
          role,
          difficulty,
          previousQuestion,
          answer
        );

      return JSON.parse(data.response)
        .question;

    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    generate,
  };
}