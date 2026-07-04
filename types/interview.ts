import { InterviewHistoryItem } from "./interviewHistory";

export interface InterviewResult {
  id: string;

  role: string;

  difficulty: string;

  duration: string;

  score: number;

  strengths: string[];

  improvements: string[];

  feedback: string;

  transcript: string;

  createdAt: string;

  history: InterviewHistoryItem[];
}