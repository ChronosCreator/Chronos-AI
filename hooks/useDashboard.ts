"use client";

import { useEffect, useState } from "react";

import { InterviewResult } from "@/types/interview";
import { getUserInterviews } from "@/services/dashboard";

export default function useDashboard() {
  const [loading, setLoading] = useState(true);

  const [interviews, setInterviews] =
    useState<InterviewResult[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getUserInterviews();

        setInterviews(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const totalInterviews =
    interviews.length;

  const averageScore =
    totalInterviews === 0
      ? 0
      : Math.round(
          interviews.reduce(
            (sum, item) => sum + item.score,
            0
          ) / totalInterviews
        );

  return {
    loading,
    interviews,
    totalInterviews,
    averageScore,
  };
}