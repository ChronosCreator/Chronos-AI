"use client";

import { motion } from "framer-motion";
import BackgroundGrid from "../effects/BackgroundGrid";
import MouseGlow from "../effects/MouseGlow";
import AICore from "../effects/AICore";
import { HERO } from "@/constants/hero";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import Link from "next/link";
export default function Hero() {
  return (
    <motion.section
      onMouseMove={(e) =>
        window.dispatchEvent(
          new CustomEvent("mouseMove", {
            detail: {
              x: e.clientX,
              y: e.clientY,
            },
          })
        )
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    className="min-h-screen flex items-center px-8 relative overflow-hidden"
    >
      {/* Background Effects */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[550px] h-[550px] bg-cyan-500/20 blur-[180px] rounded-full -top-48 -left-48"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full bottom-0 right-0"
      />

      <BackgroundGrid />

      <MouseGlow />

      {/* Main Content */}

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

         <motion.div
  animate={{
    y: [0, -4, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="mb-8"
>
  <Badge>{HERO.badge}</Badge>
</motion.div>
          {/* Heading */}

         <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white">
  {HERO.title}

  <br />

  <GradientText>
    {HERO.highlight}
  </GradientText>
</h1>
          {/* Description */}

         <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
  {HERO.description}
</p>

          {/* Buttons */}

          <div className="mt-10 flex gap-4">

 <Link href="/interview/setup">
  <Button>
    {HERO.primaryButton}
  </Button>
</Link>

  <Button variant="secondary">
    {HERO.secondaryButton}
  </Button>

</div>

          {/* Stats */}

         <div className="mt-12 flex flex-wrap gap-10">
  {HERO.stats.map((item) => (
    <div key={item.label}>
      <h3 className="text-3xl font-bold text-white">
        {item.value}
      </h3>

      <p className="text-slate-400">
        {item.label}
      </p>
    </div>
  ))}
</div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center items-center"
        >
          <AICore />
        </motion.div>

      </div>

    </motion.section>
  );
}