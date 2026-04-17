
import { GoogleGenAI } from "@google/genai";

// Standardizing Gemini API service implementation following the latest guidelines
export const getWhaleWisdom = async (topic: string) => {
  // Creating a new GoogleGenAI instance inside the call ensures the most up-to-date API key is used
  // The API key must be obtained exclusively from process.env.API_KEY without fallback values
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the spirit of the giant glowing whale from Jonah & The World Changers. 
      The brand theme is "Empowering Minds, Shaping the Futures". 
      Provide a visionary, inspiring, and concise 2-sentence thought on the topic: ${topic}.`,
      config: {
        temperature: 0.9,
        // When maxOutputTokens is configured for Gemini 3/2.5 models, thinkingBudget must also be set
        maxOutputTokens: 200,
        thinkingConfig: { thinkingBudget: 100 },
      }
    });
    // Use the .text property directly to extract the string output
    return response.text || "Believe in the infinite horizon of your potential.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The future belongs to those who dare to dream of a better world.";
  }
};
