"use client";

import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0px 0px", "0px 80px"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}