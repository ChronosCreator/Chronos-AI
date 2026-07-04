"use client";

import { useState } from "react";

export default function useInterviewFlow() {
  const [answered, setAnswered] = useState(false);

  return {
    answered,
    markAnswered: () => setAnswered(true),
    resetAnswer: () => setAnswered(false),
  };
}