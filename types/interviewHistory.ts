import { EvaluationResult } from "./evaluation";

export interface InterviewHistoryItem {
  question: string;
  answer: string;
  evaluation: EvaluationResult;
}