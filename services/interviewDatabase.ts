import { supabase } from "@/lib/supabaseClient";
import { InterviewResult } from "@/types/interview";

export async function saveInterviewToDatabase(
  interview: InterviewResult
) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw userError;

  if (!user) {
    throw new Error("No authenticated user.");
  }

  const { error } = await supabase
    .from("interviews")
    .insert({
      id: interview.id,

      user_id: user.id,

      role: interview.role,

      difficulty: interview.difficulty,

      duration: interview.duration,

      score: interview.score,

      strengths: interview.strengths,

      improvements: interview.improvements,

      feedback: interview.feedback,

      transcript: interview.transcript,

      history: interview.history,

      created_at: interview.createdAt,
    });

  if (error) {
    throw error;
  }
}