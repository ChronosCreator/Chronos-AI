"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type InterviewConfig = {
  role: string;
  difficulty: string;
  duration: string;
};

type ContextType = {
  config: InterviewConfig;

  setConfig: (
    config: InterviewConfig
  ) => void;
};

const InterviewConfigContext =
  createContext<ContextType | null>(null);

export function InterviewConfigProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [config, setConfig] =
    useState<InterviewConfig>({
      role: "Frontend Developer",
      difficulty: "Medium",
      duration: "30 min",
    });

  return (
    <InterviewConfigContext.Provider
      value={{
        config,
        setConfig,
      }}
    >
      {children}
    </InterviewConfigContext.Provider>
  );
}

export function useInterviewConfig() {
  const context = useContext(
    InterviewConfigContext
  );

  if (!context) {
    throw new Error(
      "InterviewConfigProvider missing."
    );
  }

  return context;
}