export async function evaluateInterview(
  question: string,
  answer: string,
  role: string,
  difficulty: string
) {
  const response = await fetch("/api/evaluate", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      question,
      answer,
      role,
      difficulty,
    }),
  });

  if (!response.ok) {
    throw new Error("Evaluation failed");
  }

  return await response.json();
}