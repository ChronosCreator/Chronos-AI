"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Coffee,
  Database,
  BrainCircuit,
  MessageSquare,
  Leaf,
} from "lucide-react";

const skills = [
  {
    name: "React",
    icon: Atom,
  },
  {
    name: "Java",
    icon: Coffee,
  },
  {
    name: "Spring",
    icon: Leaf,
  },
  {
    name: "DSA",
    icon: BrainCircuit,
  },
  {
    name: "SQL",
    icon: Database,
  },
  {
    name: "Communication",
    icon: MessageSquare,
  },
];

export default function AICore() {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px]">

      {/* ================= Outer Orbit ================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[430px] h-[430px] rounded-full border border-cyan-400/20"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[430px] h-[430px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_30px_#22d3ee]" />
      </motion.div>

      {/* ================= Middle Orbit ================= */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[340px] h-[340px] rounded-full border border-blue-500/30"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[340px] h-[340px]"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]" />
      </motion.div>

      {/* ================= Inner Orbit ================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[240px] h-[240px] rounded-full border border-cyan-300/40"
      />

      <motion.div
        animate={{
          scale: [1, 2.3],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute w-28 h-28 rounded-full border border-cyan-400"
      />

      {/* ================= Orbit Dots ================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[340px] h-[340px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[240px] h-[240px]"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]" />
      </motion.div>

      {/* ================= AI Glow ================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute w-[180px] h-[180px] rounded-full bg-cyan-400/20 blur-[90px]"
      />

      {/* ================= AI Core ================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          boxShadow: [
            "0 0 60px rgba(34,211,238,.5)",
            "0 0 140px rgba(34,211,238,.9)",
            "0 0 60px rgba(34,211,238,.5)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="relative z-20 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-16 h-16 border-2 border-white/30 rounded-full"
        />

        <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_30px_white]" />
      </motion.div>

      {/* ================= Orbiting Skills ================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
       {skills.map((skill, index) => {
  const angle = (360 / skills.length) * index;
  const Icon = skill.icon;

  return (
    <div
      key={skill.name}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `
          rotate(${angle}deg)
          translateY(-215px)
          rotate(-${angle}deg)
          translate(-50%, -50%)
        `,
        transformOrigin: "center",
      }}
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-black/40
        px-4
        py-2
        backdrop-blur-xl
        shadow-[0_0_20px_rgba(6,182,212,0.08)]
      "
    >
      <Icon
        size={15}
        className="text-cyan-300"
      />

      <span className="whitespace-nowrap text-xs font-medium text-cyan-200">
        {skill.name}
      </span>
    </div>
  );
})}
      </motion.div>

    </div>
  );
}