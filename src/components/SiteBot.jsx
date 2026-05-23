// src/components/SiteBot.jsx
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import "./SiteBot.css";

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isGreeting(q) {
  const greetings = [
    "hi",
    "hello",
    "hey",
    "yo",
    "hii",
    "helo",
    "good morning",
    "good afternoon",
    "good evening",
  ];

  return greetings.some((item) => q === item || q.startsWith(item + " "));
}

function isThanks(q) {
  return (
    q.includes("thank") ||
    q.includes("thanks") ||
    q.includes("appreciate")
  );
}

function isBye(q) {
  return (
    q.includes("bye") ||
    q.includes("goodbye") ||
    q.includes("see you")
  );
}

function scoreMatch(question, article) {
  const q = normalize(question);
  const title = normalize(article.title);
  const category = normalize(article.category);
  const text = normalize(article.text);
  const content = Array.isArray(article.content)
    ? normalize(article.content.join(" "))
    : "";

  const words = q.split(" ").filter((word) => word.length > 2);

  let score = 0;

  words.forEach((word) => {
    if (title.includes(word)) score += 5;
    if (category.includes(word)) score += 3;
    if (text.includes(word)) score += 2;
    if (content.includes(word)) score += 1;
  });

  if (title.includes(q)) score += 15;
  if (text.includes(q)) score += 8;

  return score;
}

function makeSummary(article) {
  const paragraphs = Array.isArray(article.content) ? article.content : [];

  return `
${article.title}

${article.text || ""}

Key points:
${paragraphs.slice(0, 3).map((p) => `• ${p}`).join("\n")}
  `;
}

function SiteBot() {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I’m Samir AI. I can help you find articles, learn about Samir, visit the shop, or explore this website.",
    },
  ]);

  useEffect(() => {
    const articlesQuery = query(collection(db, "articles"));

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const firebaseArticles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setArticles(firebaseArticles);
    });

    return () => unsubscribe();
  }, []);

  function answerQuestion(question) {
    const q = normalize(question);

    if (isGreeting(q)) {
      return {
        role: "bot",
        text:
          "Hello! Nice to see you here 😊 You can ask me about Samir, articles, shop, reels, or anything on this website.",
        suggestions: [
          { title: "Show me articles", link: "/articles" },
          { title: "About Samir", link: "/about" },
          { title: "Visit Shop", link: "/shop" },
        ],
      };
    }

    if (isThanks(q)) {
      return {
        role: "bot",
        text: "You’re welcome! 😊 Ask me anything else about this website.",
      };
    }

    if (isBye(q)) {
      return {
        role: "bot",
        text: "Goodbye! 👋 Come back anytime if you want to explore more.",
      };
    }

    if (
      q.includes("samir") ||
      q.includes("about you") ||
      q.includes("about me") ||
      q.includes("who are you") ||
      q.includes("who is samir")
    ) {
      return {
        role: "bot",
        text:
          "Samir is the creator of this website. You can learn more about him on the About page.",
        suggestions: [{ title: "About Samir", link: "/about" }],
      };
    }

    if (q.includes("shop") || q.includes("products") || q.includes("buy")) {
      return {
        role: "bot",
        text: "You can visit the shop page to see available products.",
        suggestions: [{ title: "Shop", link: "/shop" }],
      };
    }

    if (q.includes("hire") || q.includes("work") || q.includes("contact")) {
      return {
        role: "bot",
        text: "You can contact or hire Samir from the Hire or Contact section.",
        suggestions: [
          { title: "Hire Samir", link: "/hire" },
          { title: "Contact", link: "/" },
        ],
      };
    }

    const rankedArticles = articles
      .map((article) => ({
        ...article,
        score: scoreMatch(question, article),
      }))
      .filter((article) => article.score > 0)
      .sort((a, b) => b.score - a.score);

    if (rankedArticles.length > 0) {
      const bestArticle = rankedArticles[0];

      if (bestArticle.score >= 4) {
        return {
          role: "bot",
          text: makeSummary(bestArticle),
          suggestions: [
            {
              title: bestArticle.title,
              link: `/articles/${bestArticle.slug || bestArticle.id}`,
            },
          ],
        };
      }

      return {
        role: "bot",
        text: "I’m not fully sure, but maybe you mean one of these articles:",
        suggestions: rankedArticles.slice(0, 3).map((article) => ({
          title: article.title,
          link: `/articles/${article.slug || article.id}`,
        })),
      };
    }

    return {
      role: "bot",
      text:
        "I couldn’t find an exact answer from this website. Try asking with words like earth, moon, space, Samir, shop, reels, or contact.",
      suggestions: articles.slice(0, 3).map((article) => ({
        title: article.title,
        link: `/articles/${article.slug || article.id}`,
      })),
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const userQuestion = input;
    const botAnswer = answerQuestion(userQuestion);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userQuestion },
      botAnswer,
    ]);

    setInput("");
  }

  return (
    <>
      <button className="sitebot-toggle" onClick={() => setOpen(!open)}>
        AI
      </button>

      {open && (
        <div className="sitebot-box">
          <div className="sitebot-header">
            <div>
              <strong>Samir AI</strong>
              <span>Website assistant</span>
            </div>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="sitebot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`sitebot-message ${msg.role}`}>
                <p>{msg.text}</p>

                {msg.suggestions && (
                  <div className="sitebot-suggestions">
                    {msg.suggestions.map((item, i) => (
                      <a key={i} href={item.link}>
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form className="sitebot-form" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Say hi or ask about articles..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}

export default SiteBot;