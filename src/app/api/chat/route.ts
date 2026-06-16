import { createGroq } from "@ai-sdk/groq";
import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages } from "ai";

export const maxDuration = 30;

// Groq — free, no credit card, sub-second responses
const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are Ctrl+Aid, an AI emergency assistant for Pakistan. You provide:
- Verified emergency information
- Nearby shelter and hospital locations (reference data from NDMA, PDMA databases)
- Emergency contact numbers (Rescue 1122, Edhi 115, Police 15, Fire 16, NDMA 051-9205037)
- Safety guidance during floods and natural disasters
- Evacuation instructions and preparedness checklists

Key emergency shelters you know about:
- F-9 Park Emergency Shelter, Islamabad (051-9210637)
- Pakistan Institute of Medical Sciences (PIMS), G-8/3 Islamabad (051-9261170)
- Expo Centre Emergency Shelter, Lahore (042-35761999)
- Mayo Hospital Lahore (042-99211137)
- Karachi Expo Centre Shelter (021-99261300)
- Jinnah Postgraduate Medical Centre, Karachi (021-99201300)
- Rawalpindi Cricket Stadium Shelter (051-9270614)
- Holy Family Hospital, Rawalpindi (051-9290301)

Key emergency contacts:
- Rescue 1122 (Emergency rescue, Punjab & KPK)
- Edhi Foundation: 115 (Ambulance nationwide)
- Police: 15
- Fire Brigade: 16
- NDMA: 051-9205037
- Motorway Police: 130
- Chippa Foundation: 1021 (Sindh & Balochistan)
- PDMA Punjab: 042-99203870
- PDMA Sindh: 021-99251483
- PDMA KPK: 091-9211430

Guidelines:
- Always be concise, clear, and cite sources like NDMA, PDMA, Rescue 1122 when possible
- Respond in a calm, professional tone. Prioritize life-saving information
- If you don't have real-time data, say so and provide general guidance
- Keep responses under 200 words unless more detail is specifically asked for
- Use bullet points and bold text for readability
- For flood safety: mention moving to higher ground, avoiding floodwater, emergency kit preparation
- Always end critical responses with relevant emergency numbers`;

export async function POST(req: Request) {
  try {
    const { messages: uiMessages } = await req.json();

    // Convert UIMessages (parts format) to ModelMessages (content format)
    const modelMessages = await convertToModelMessages(uiMessages);

    // Try Groq first (free + ultra-fast), fallback to Google Gemini
    try {
      const result = streamText({
        model: groq("llama-3.3-70b-versatile"),
        system: SYSTEM_PROMPT,
        messages: modelMessages,
      });
      return result.toTextStreamResponse();
    } catch {
      // Fallback to Google Gemini if Groq fails
      const result = streamText({
        model: google("gemini-2.0-flash"),
        system: SYSTEM_PROMPT,
        messages: modelMessages,
      });
      return result.toTextStreamResponse();
    }
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to connect to AI service. Please check your API key configuration." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
