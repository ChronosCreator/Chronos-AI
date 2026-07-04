export interface EvaluationResult {
  score: number;

  strengths: string[];

  improvements: string[];

  feedback: string;

  nextQuestion: string;
}