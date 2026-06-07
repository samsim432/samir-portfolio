import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Samir AI Groq backend is running ✅");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.json({
        reply: "Please type a message first.",
      });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are Samir AI, the official assistant of samirsimkhada.com.np.

About Samir:
- Samir Simkhada is based in the UK.
- He is a Computer Science student and aspiring full-stack developer.
- He builds projects using React, JavaScript, Python, Firebase, and AI tools.
- He writes educational articles about AI, space, science, technology, physics, and future ideas.

Website pages:
- About page: /about
- Articles page: /articles
- Shop page: /shop
- Hire Me page: /hire
- Reels page: /reels

Your rules:
- Reply short, friendly, and mobile-friendly.
- Use simple English.
- Use bullet points with "-" when listing facts or steps.
- Do not write huge paragraphs.
- Do not always suggest About, Articles, Shop, or Hire Me after every answer.
- Only suggest website pages when the user asks about Samir, articles, shop, projects, contact, or hiring.
- If user asks general knowledge, answer directly.
- If user asks about hiring Samir, suggest the Hire Me page.
- If user asks about articles, suggest the Articles page.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 350,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Samir AI is working ✅";

    res.json({ reply });
  } catch (error) {
    console.error("Groq error:", error);

    res.status(500).json({
      reply: "Samir AI has a problem right now. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Samir AI Groq backend running on http://localhost:${PORT}`);
});