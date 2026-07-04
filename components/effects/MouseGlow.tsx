"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  type MouseMoveDetail = {
  x: number;
  y: number;
};

useEffect(() => {
  const handler = (
    e: CustomEvent<MouseMoveDetail>
  ) => {
    mouseX.set(e.detail.x - 200);
    mouseY.set(e.detail.y - 200);
  };

  window.addEventListener(
    "mouseMove",
    handler as EventListener
  );

  return () => {
    window.removeEventListener(
      "mouseMove",
      handler as EventListener
    );
  };
}, [mouseX, mouseY]);
  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="absolute w-[400px] h-[400px] rounded-full bg-cyan-400/15 blur-[140px] pointer-events-none"
    />
  );
}