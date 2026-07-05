import { groq } from "@/lib/groq";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { question, answer, role, difficulty } =
      await req.json();

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

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const text =
      completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({
      response: text,
    });

  } catch (error) {
    console.error("Groq Error:", error);

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