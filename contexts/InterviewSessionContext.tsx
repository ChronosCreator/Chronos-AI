"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Session = {
  currentQuestion: string;
  currentIndex: number;
  transcript: string;
  finished: boolean;
};

type ContextType = {
  session: Session;
  setSession: React.Dispatch<
    React.SetStateAction<Session>
  >;
};

const InterviewSessionContext =
  createContext<ContextType | null>(null);

export function InterviewSessionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [session, setSession] =
    useState<Session>({
      currentQuestion: "",
      currentIndex: 0,
      transcript: "",
      finished: false,
    });

  return (
    <InterviewSessionContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </InterviewSessionContext.Provider>
  );
} // <-- THIS WAS MISSING

export function useInterviewSession() {
  const context = useContext(
    InterviewSessionContext
  );

  if (!context) {
    throw new Error(
      "InterviewSessionProvider missing."
    );
  }

  return context;
}