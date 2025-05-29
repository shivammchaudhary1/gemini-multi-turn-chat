import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import readline from "readline";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: "Explain how AI works in a few words",
  });

  // Proper way to print entire response object
  console.dir(response, { depth: null });

  console.log("Response from Gemini AI:\n");
  console.log(response.text);
}

await main();
