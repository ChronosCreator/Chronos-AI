"use client";

import { useMemo, useState } from "react";

import OptionCard from "@/components/interview/OptionCard";
import SetupProgress from "@/components/interview/SetupProgress";
import AIInitialization from "@/components/interview/AIInitialization";

import {
  ROLES,
  DIFFICULTIES,
  DURATIONS,
} from "@/constants/interviewSetup";

export default function InterviewSetupPage() {
  const [role, setRole] = useState(ROLES[0].title);
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[1]);
  const [duration, setDuration] = useState(DURATIONS[1]);

  const estimatedQuestions = useMemo(() => {
    switch (duration) {
      case "15 min":
        return 5;
      case "30 min":
        return 10;
      case "45 min":
        return 15;
      default:
        return 10;
    }
  }, [duration]);

  return (
    <main className="min-h-screen bg-black px-8 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <SetupProgress
          step={1}
          total={3}
        />

        <h1 className="text-center text-5xl font-bold">
          Configure Your Interview
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Choose your interview preferences before starting.
        </p>

        {/* Two Column Layout */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">

          {/* LEFT */}

          <div>

            {/* Roles */}

            <section>
              <h2 className="mb-6 text-2xl font-semibold">
                Select Role
              </h2>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
               {ROLES.map((item) => (
  <OptionCard
    key={item.title}
    title={item.title}
    icon={item.icon}
    selected={role === item.title}
    onClick={() => setRole(item.title)}
  />
))}
              </div>
            </section>

            {/* Difficulty */}

            <section className="mt-16">
              <h2 className="mb-6 text-2xl font-semibold">
                Difficulty
              </h2>

              <div className="grid gap-5 md:grid-cols-3">
                {DIFFICULTIES.map((item) => (
                  <OptionCard
                    key={item}
                    title={item}
                    selected={difficulty === item}
                    onClick={() => setDifficulty(item)}
                  />
                ))}
              </div>
            </section>

            {/* Duration */}

            <section className="mt-16">
              <h2 className="mb-6 text-2xl font-semibold">
                Duration
              </h2>

              <div className="grid gap-5 md:grid-cols-3">
                {DURATIONS.map((item) => (
                  <OptionCard
                    key={item}
                    title={item}
                    selected={duration === item}
                    onClick={() => setDuration(item)}
                  />
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT */}

         <AIInitialization
  role={role}
  difficulty={difficulty}
  duration={duration}
  questions={estimatedQuestions}
/>

        </div>

      </div>
    </main>
  );
}