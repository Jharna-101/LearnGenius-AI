import { Groq } from "groq-sdk";

// Initialize Groq client with error handling
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
  dangerouslyAllowBrowser: true // Only if you're testing in browser
});

export async function POST(req) {
  try {
    // 1. Validate input
    const { subject, age, learningStyle } = await req.json();
    if (!subject || !age || !learningStyle) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Call Groq API
    const completion = await groq.chat.completions.create({
      messages: [{
        role: "user",
        content: `
          Create a ${subject} learning plan for a ${age}-year-old ${learningStyle} learner.
          Respond in JSON format with these keys:
          - "explanation": "string" (3-5 sentences)
          - "resources": array of {name, url, description}
          
          Example:
          {
            "explanation": "...",
            "resources": [
              {"name": "Khan Academy", "url": "https://...", "description": "..."}
            ]
          }
        `
      }],
      model: "llama3-8b-8192",
      response_format: { type: "json_object" },
      temperature: 0.7
    });

    // 3. Parse response
    const result = JSON.parse(completion.choices[0]?.message?.content || "{}");
    return Response.json(result);

  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}