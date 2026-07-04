import { supabase } from "@/lib/supabaseClient";
import { InterviewResult } from "@/types/interview";

export async function getUserInterviews(): Promise<InterviewResult[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("interviews")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    role: item.role,
    difficulty: item.difficulty,
    duration: item.duration,
    score: item.score,
    strengths: item.strengths,
    improvements: item.improvements,
    feedback: item.feedback,
    transcript: item.transcript,
    history: item.history,
    createdAt: item.created_at,
  }));
}