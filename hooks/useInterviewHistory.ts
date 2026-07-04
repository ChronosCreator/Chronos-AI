"use client";

import { useEffect, useState } from "react";
import { getInterviewHistory } from "@/services/database";
import { InterviewResult } from "@/types/interview";

export default function useInterviewHistory() {
  const [history, setHistory] = useState<
    InterviewResult[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const data =
        await getInterviewHistory();

      setHistory(data);

      setLoading(false);
    }

    load();
  }, []);

  return {
    history,
    loading,
  };
}