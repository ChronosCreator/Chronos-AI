"use client";

import { useState } from "react";
import { toast } from "sonner";
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
    const toastId = toast.loading(
      "Chronos AI is evaluating your answer..."
    );

    setLoading(true);

    try {
      const response = await evaluateInterview(
        question,
        answer,
        role,
        difficulty
      );

      // If your API returns { response: "..." }, parse it.
      // If evaluateInterview already returns EvaluationResult,
      // replace this with: setResult(response);

      const parsed: EvaluationResult =
        typeof response.response === "string"
          ? JSON.parse(response.response)
          : response;

      setResult(parsed);

      toast.success("Evaluation completed!", {
        id: toastId,
      });

      return parsed;
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );

      throw error;
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