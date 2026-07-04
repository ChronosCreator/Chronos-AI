export async function generateNextQuestion(
  role: string,
  difficulty: string,
  previousQuestion: string,
  candidateAnswer: string
) {
  const response = await fetch("/api/question", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      role,
      difficulty,
      previousQuestion,
      candidateAnswer,
    }),
  });

  if (!response.ok) {
    throw new Error("Question generation failed");
  }

  return await response.json();
}