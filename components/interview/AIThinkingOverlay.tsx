"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit } from "lucide-react";

type Props = {
  open: boolean;
};

export default function AIThinkingOverlay({
  open,
}: Props) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md"
        >

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            className="w-[420px] rounded-3xl border border-cyan-400/20 bg-slate-900/90 p-10 text-center shadow-[0_0_80px_rgba(6,182,212,.2)]"
          >

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10"
            >
              <BrainCircuit
                size={42}
                className="text-cyan-400"
              />
            </motion.div>

            <h2 className="text-2xl font-bold text-white">
              AI is Thinking...
            </h2>

            <p className="mt-4 text-slate-300">
              Analyzing your answer and preparing
              the next interview question.
            </p>

            <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/10">

              <motion.div
                animate={{
                  x: [
                    "-100%",
                    "100%",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}