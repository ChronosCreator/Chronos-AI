"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  icon?: React.ElementType;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  title,
  icon: Icon,
  selected,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -6,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`
        w-full
        rounded-3xl
        border
        p-6
        text-left
        transition-all
        duration-300
        ${
          selected
            ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,.25)]"
            : "border-white/10 bg-white/5 hover:border-cyan-400/30"
        }
      `}
    >
      {Icon && (
        <Icon
          size={28}
          className="mb-5 text-cyan-300"
        />
      )}

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>
    </motion.button>
  );
}   