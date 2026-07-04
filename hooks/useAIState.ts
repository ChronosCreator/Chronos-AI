"use client";

import { useState } from "react";

export default function useAIState() {
  const [isThinking, setIsThinking] = useState(false);

  const think = async (callback: () => Promise<void>) => {
    setIsThinking(true);

    

    try {
      await callback();
    } finally {
      setIsThinking(false);
    }
  };

  return {
    isThinking,
    think,
  };
}