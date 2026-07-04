"use client";

import { useEffect, useState } from "react";

interface TypingQuestionProps {
  text: string;
  speed?: number;
}

export default function TypingQuestion({
  text,
  speed = 35,
}: TypingQuestionProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="mt-4 text-gray-300 leading-8 text-lg">
      {displayedText}
      <span className="animate-pulse text-cyan-400">|</span>
    </p>
  );
}