"use client";

import { useState } from "react";

import { evaluateInterview } from "@/services/evaluationService";
import { EvaluationResult } from "@/types/evaluation";

export default function useEvaluation() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<EvaluationResult | null>(null);

  const evaluate = async (
  question: string,
  answer: string,
  role: string,
  difficulty: string
) => {
    setLoading(true);

    try {
      const response = await evaluateInterview(
  question,
  answer,
  role,
  difficulty
);

      // Handle Gemini response safely
      const cleanedResponse = response.response
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed: EvaluationResult =
        JSON.parse(cleanedResponse);

      setResult(parsed);

      return parsed;
    } catch (error) {
      console.error("Evaluation failed:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    result,
    evaluate,
  };
}