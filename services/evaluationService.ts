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
  const data = await response.json();

  throw new Error(
    data.error || "Evaluation failed"
  );
}

  return await response.json();
}