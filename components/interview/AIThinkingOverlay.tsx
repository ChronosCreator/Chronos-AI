"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
};

const STEPS = [
  "Receiving your answer...",
  "Analyzing communication...",
  "Evaluating technical knowledge...",
  "Generating next interview question...",
];

export default function AIThinkingOverlay({
  open,
}: Props) {
 const [step, setStep] = useState(() =>
  open ? 0 : -1
);

  useEffect(() => {
  if (!open) return;

  const interval = setInterval(() => {
    setStep((prev) => {
      if (prev < 0) return 0;
      return prev >= STEPS.length - 1
        ? prev
        : prev + 1;
    });
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, [open]);
  return (
    <AnimatePresence>
     {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 backdrop-blur-md"
        >
          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
            }}
            className="w-[480px] rounded-3xl border border-cyan-400/20 bg-slate-950/95 p-10 shadow-[0_0_80px_rgba(6,182,212,.2)]"
          >
            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10"
              >
                <BrainCircuit
                  className="text-cyan-400"
                  size={32}
                />
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Chronos AI
                </h2>

                <p className="text-cyan-300">
                  Processing Interview...
                </p>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              {STEPS.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  {step >= 0 && index < step ? (
                    <CheckCircle2
                      className="text-green-400"
                      size={20}
                    />
                  ) : step >= 0 && index === step ? (
                    <Loader2
                      className="animate-spin text-cyan-400"
                      size={20}
                    />
                  ) : (
                    <div className="h-5 w-5 rounded-full border border-slate-500" />
                  )}

                  <span
                    className={`${
                     step >= 0 && index <= step
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-10 h-2 overflow-hidden rounded-full bg-white/10">

              <motion.div
                animate={{
                  width: `${((step + 1) / STEPS.length) * 100}%`,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}