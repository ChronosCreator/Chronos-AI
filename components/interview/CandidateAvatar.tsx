"use client";

import { motion } from "framer-motion";

export default function CandidateAvatar() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute h-40 w-40 rounded-full bg-cyan-500/30 blur-3xl"
      />

      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-36 w-36 rounded-full border border-cyan-400/30"
      />

      {/* Avatar */}

      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-5xl shadow-[0_0_50px_rgba(6,182,212,0.5)]"
      >
        👤
      </motion.div>

    </div>
  );
}