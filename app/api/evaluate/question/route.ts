import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const {
      role,
      difficulty,
      previousQuestion,
      candidateAnswer,
    } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a senior ${role} interviewer.

Difficulty:
${difficulty}

Previous Question:
${previousQuestion}

Candidate Answer:
${candidateAnswer}

Generate ONLY ONE follow-up interview question.

Do not explain.

Return JSON only.

{
  "question":""
}
`;

    const result =
      await model.generateContent(prompt);

    const text = result.response.text();

    return NextResponse.json({
      response: text,
    });

  } catch {
    return NextResponse.json(
      {
        error: "Generation failed",
      },
      {
        status: 500,
      }
    );
  }
}