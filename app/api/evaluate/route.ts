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

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    return NextResponse.json({
      response: text,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Evaluation failed",
      },
      {
        status: 500,
      }
    );
  }
}