"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_0_40px_rgba(6,182,212,0.25)]",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`rounded-xl px-7 py-3 font-medium transition-all ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
}