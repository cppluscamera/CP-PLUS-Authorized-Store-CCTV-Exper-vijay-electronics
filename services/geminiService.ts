
import { GoogleGenAI } from "@google/genai";

// Fix: Initializing GoogleGenAI with the API key directly from process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Vijay Electronics AI Assistant", a specialist security and computer consultant for Vijay Electronics in Unnao.
Your goal is to help customers understand CCTV products (CP Plus, Hikvision, Dahua), laptop repair options, and custom PC builds.
Provide professional, friendly advice. Mention that the shop is in Purani Bazar, Unnao.
If asked about pricing, suggest they contact the shop via WhatsApp for a personalized quote.
Focus on:
1. CCTV selection (IP vs Analog, 4G sim cameras).
2. Troubleshooting basic PC issues (slow performance, screen issues).
3. Promoting Vijay Electronics' local expertise in Unnao areas like Civil Lines, Shuklaganj, etc.
Keep answers concise and helpful.
`;

export async function askGemini(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Fix: Accessing .text as a property as per current SDK guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now. Please call us directly at 8090090051 for expert help!";
  }
}
