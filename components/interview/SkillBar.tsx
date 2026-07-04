"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  label: string;
  value: number;
}

export default function SkillBar({
  label,
  value,
}: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-300 text-sm">
          {label}
        </span>

        <span className="text-cyan-300 text-sm">
          {value}%
        </span>
      </div>

      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
        />
      </div>
    </div>
  );
}