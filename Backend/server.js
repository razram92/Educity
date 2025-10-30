const express = require("express");
const cors = require("cors");
require("dotenv").config();
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// global chat memory
let chatHistory = [
  {
    role: "system",
    content:
      "You are EduCity Assistant, a friendly and knowledgeable AI tutor who helps students with course advice, academic queries, and study guidance.",
  },
];

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  // Add user message
  chatHistory.push({ role: "user", content: message });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: chatHistory,
      max_tokens: 250,
      temperature: 0.8,
    });

    const aiMessage = response.choices[0].message.content;

    // Save assistant reply
    chatHistory.push({ role: "assistant", content: aiMessage });

    // Keep only the last 20 messages (plus system prompt)
    if (chatHistory.length > 21) {
      chatHistory = [chatHistory[0], ...chatHistory.slice(-20)];
    }

    res.json({ reply: aiMessage });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "AI response failed" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Server running on port ${process.env.PORT || 5000}`);
});


