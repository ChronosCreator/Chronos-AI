"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
    >
      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-gray-400 leading-8">
        {description}
      </p>
    </motion.div>
  );
}