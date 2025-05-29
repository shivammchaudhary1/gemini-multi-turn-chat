// import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// import readline from "readline";
// dotenv.config();

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-1.5-flash",
//     contents: "Explain how AI works in a few words",
//   });

//   // Proper way to print entire response object
//   console.dir(response, { depth: null });

//   console.log("Response from Gemini AI:\n");
//   console.log(response.text);
// }

// await main();

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    console.log("🤖 Welcome to Gemini Multi-Turn Chat!");

    // Optional: Let user set temperature
    const tempInput = await askQuestion(
      "Set creativity level (0.1-1.0, or press Enter for 0.7): "
    );
    let temperature = tempInput.trim() ? parseFloat(tempInput) : 0.7;

    if (isNaN(temperature) || temperature < 0.1 || temperature > 1.0) {
      console.log("Invalid temperature, using default 0.7");
      temperature = 0.7;
    }

    console.log(`Using temperature: ${temperature}\n`);

    // Conversation history to maintain context
    let conversationHistory = [];

    // First user input
    const input1 = await askQuestion("👤 You (1st message): ");
    conversationHistory.push({ role: "user", parts: [{ text: input1 }] });

    const result1 = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: conversationHistory,
      generationConfig: { temperature: temperature },
    });

    // console.dir(result1, { depth: null });

    // const response1 = result1.GenerateContentResponse.candidates[0].content.parts[0].text;
    let response1 = result1.text;
    console.log("\n🤖 Gemini:", response1);

    // Add AI response to history
    conversationHistory.push({ role: "model", parts: [{ text: response1 }] });

    // Second user input
    const input2 = await askQuestion("\n👤 You (2nd message): ");
    conversationHistory.push({ role: "user", parts: [{ text: input2 }] });

    const result2 = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: conversationHistory,
      generationConfig: { temperature: temperature },
    });

    let response2 = result2.text;
    console.log("\n🤖 Gemini:", response2);

    // Add AI response to history
    conversationHistory.push({ role: "model", parts: [{ text: response2 }] });

    // Bonus: Third turn
    const continueChat = await askQuestion(
      "\nContinue for a 3rd turn? (y/n): "
    );
    if (
      continueChat.toLowerCase() === "y" ||
      continueChat.toLowerCase() === "yes"
    ) {
      const input3 = await askQuestion("\n👤 You (3rd message): ");
      conversationHistory.push({ role: "user", parts: [{ text: input3 }] });

      const result3 = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: conversationHistory,
        generationConfig: { temperature: temperature },
      });

      let response3 = result3.text;
      console.log("\n🤖 Gemini Final Response:\n", response3);
    } else {
      console.log("\n🤖 Gemini Final Response:\n", response2);
    }
  } catch (error) {
    console.error("Error occurred:", error.message);
    if (error.message.includes("API key")) {
      console.error("Please check your GEMINI_API_KEY in the .env file");
    }
  } finally {
    rl.close();
  }
}

await main();
