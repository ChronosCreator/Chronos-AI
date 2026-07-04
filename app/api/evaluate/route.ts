import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { question, answer, role, difficulty } =
      await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a Senior FAANG interviewer.

Role:
${role}

Difficulty:
${difficulty}

Current Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer.

Then generate ONE next interview question based on the candidate's answer.

Return ONLY valid JSON.

{
  "score":90,
  "strengths":["","",""],
  "improvements":["","",""],
  "feedback":"",
  "nextQuestion":""
}

No markdown.
Only JSON.
`;

    let result;

for (let i = 0; i < 3; i++) {
  try {
    result = await model.generateContent(prompt);
    break;
  } catch (error) {
    if (i === 2) throw error;

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );
  }
}

if (!result) {
  throw new Error("Gemini unavailable");
}
    const text = result.response.text();

    return NextResponse.json({
      response: text,
    });

  } catch (error) {
  console.error("Gemini Error:", error);

  return NextResponse.json(
    {
      error:
        error instanceof Error
          ? error.message
          : "Unknown error",
    },
    {
      status: 500,
    }
  );
}
}