"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface ScoreCounterProps {
  value: number;
}

export default function ScoreCounter({ value }: ScoreCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, value]);

  return (
    <motion.span className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
      {rounded}
    </motion.span>
  );
}