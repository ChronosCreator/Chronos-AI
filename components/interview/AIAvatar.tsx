"use client";

import { motion } from "framer-motion";

export default function AIAvatar() {
  return (
    <div className="relative flex items-center justify-center h-40 w-40 mx-auto">
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-40 w-40 rounded-full border border-cyan-400/30"
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-28 w-28 rounded-full border border-cyan-500/40"
      />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute h-20 w-20 rounded-full bg-cyan-500 blur-2xl"
      />

      {/* Core */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="relative h-16 w-16 rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 shadow-[0_0_40px_#06b6d4]"
      />
    </div>
  );
}