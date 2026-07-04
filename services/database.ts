import { supabase } from "@/lib/supabaseClient";
import { InterviewResult } from "@/types/interview";

export async function saveInterviewToCloud(
  interview: InterviewResult
) {
  const { error } = await supabase
    .from("interviews")
    .insert(interview);

  if (error) {
    throw error;
  }
}

export async function getInterviewHistory() {
  const { data, error } = await supabase
    .from("interviews")
    .select("*")
    .order("createdAt", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}