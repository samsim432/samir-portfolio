import { useEffect, useMemo, useRef, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import "./SiteBot.css";

const QUICK_BUTTONS = [
  { label: "Articles", text: "Show me articles" },
  { label: "Shop", text: "Show me shop products" },
  { label: "Hire", text: "How can I hire Samir?" },
  { label: "About", text: "Who is Samir?" },
];

const BAD_WORDS = ["spam", "scam", "hack", "idiot", "stupid"];

const WEBSITE_PAGES = [
  {
    title: "About Samir",
    type: "page",
    category: "about",
    link: "/about",
    text: "Learn about Samir, the creator of this website.",
    keywords: ["samir", "about", "creator", "who is samir", "owner"],
  },
  {
    title: "Shop",
    type: "page",
    category: "shop",
    link: "/shop",
    text: "Explore products and recommendations from the website shop.",
    keywords: ["shop", "products", "buy", "recommendation"],
  },
  {
    title: "Hire Samir",
    type: "page",
    category: "hire",
    link: "/hire",
    text: "Contact Samir for work, collaboration, or hiring.",
    keywords: ["hire", "work", "contact", "collaboration"],
  },
  {
    title: "Reels",
    type: "page",
    category: "reels",
    link: "/reels",
    text: "Watch short videos and reels.",
    keywords: ["reels", "videos", "shorts"],
  },
];

function normalize(text = "") {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => []);

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

function fuzzyIncludes(text, word) {
  const cleanText = normalize(text);
  const cleanWord = normalize(word);

  if (!cleanWord) return false;
  if (cleanText.includes(cleanWord)) return true;

  const words = cleanText.split(" ");

  return words.some((item) => {
    if (item.length < 3 || cleanWord.length < 3) return false;
    return levenshtein(item, cleanWord) <= 2;
  });
}

function isGreeting(q) {
  const greetings = [
    "hi",
    "hello",
    "hey",
    "yo",
    "hii",
    "helo",
    "salam",
    "asc",
    "good morning",
    "good afternoon",
    "good evening",
  ];

  return greetings.some((item) => q === item || q.startsWith(item + " "));
}

function isThanks(q) {
  return q.includes("thank") || q.includes("thanks") || q.includes("appreciate");
}

function isBye(q) {
  return q.includes("bye") || q.includes("goodbye") || q.includes("see you");
}

function hasBadWords(q) {
  return BAD_WORDS.some((word) => q.includes(word));
}

function getArticleText(article) {
  const content = Array.isArray(article.content) ? article.content.join(" ") : "";

  return `
    ${article.title || ""}
    ${article.category || ""}
    ${article.text || ""}
    ${content}
  `;
}

function scoreItem(question, item) {
  const q = normalize(question);
  const words = q.split(" ").filter((word) => word.length > 2);

  const title = normalize(item.title);
  const category = normalize(item.category);
  const text = normalize(item.text);
  const keywords = Array.isArray(item.keywords) ? item.keywords.join(" ") : "";
  const fullText = normalize(`${title} ${category} ${text} ${keywords}`);

  let score = 0;

  if (title.includes(q)) score += 30;
  if (fullText.includes(q)) score += 15;

  words.forEach((word) => {
    if (fuzzyIncludes(title, word)) score += 8;
    if (fuzzyIncludes(category, word)) score += 5;
    if (fuzzyIncludes(text, word)) score += 3;
    if (fuzzyIncludes(keywords, word)) score += 6;
    if (fuzzyIncludes(fullText, word)) score += 1;
  });

  return score;
}

function makeArticleSummary(article) {
  const paragraphs = Array.isArray(article.content) ? article.content : [];
  const points = paragraphs.slice(0, 4);

  return `
I found this article: ${article.title}

${article.text || "Here is a short summary from this article."}

Key points:
${points.length ? points.map((p) => `• ${p}`).join("\n") : "• Open the article to read more details."}
  `.trim();
}

function detectLanguage(question) {
  const q = normalize(question);

  if (q.includes("somali") || q.includes("soomaali")) return "somali";
  if (q.includes("arabic") || q.includes("carabi")) return "arabic";

  return "english";
}

function SiteBot() {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [products, setProducts] = useState([]);
  const [trainingData, setTrainingData] = useState([]);
  const [firebaseLoading, setFirebaseLoading] = useState(true);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("sitebot-theme") === "dark"
  );

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("sitebot-messages");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }

    return [
      {
        role: "bot",
        text: "Hi! I’m Samir AI. I can help you find articles, learn about Samir, explore the shop, or understand this website.",
      },
    ];
  });

  useEffect(() => {
    const unsubscribeArticles = onSnapshot(
      query(collection(db, "articles")),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: "article",
          ...doc.data(),
        }));

        setArticles(data);
        setFirebaseLoading(false);
      },
      () => setFirebaseLoading(false)
    );

    const unsubscribeProducts = onSnapshot(
      query(collection(db, "products")),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: "product",
          ...doc.data(),
        }));

        setProducts(data);
      },
      () => {}
    );

    const unsubscribeTraining = onSnapshot(
      query(collection(db, "botTraining")),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: "training",
          ...doc.data(),
        }));

        setTrainingData(data);
      },
      () => {}
    );

    return () => {
      unsubscribeArticles();
      unsubscribeProducts();
      unsubscribeTraining();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("sitebot-messages", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("sitebot-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const searchableItems = useMemo(() => {
    const articleItems = articles.map((article) => ({
      ...article,
      title: article.title || "Untitled Article",
      text: getArticleText(article),
      link: `/articles/${article.slug || article.id}`,
    }));

    const productItems = products.map((product) => ({
      ...product,
      title: product.title || product.name || "Product",
      text: `${product.description || ""} ${product.category || ""}`,
      link: "/shop",
      category: product.category || "shop",
    }));

    const trainingItems = trainingData.map((item) => ({
      ...item,
      title: item.title || item.question || "Website Help",
      text: `${item.question || ""} ${item.answer || ""} ${
        item.keywords || ""
      }`,
      link: item.link || "/",
      category: item.category || "help",
    }));

    return [...articleItems, ...productItems, ...trainingItems, ...WEBSITE_PAGES];
  }, [articles, products, trainingData]);

  async function saveAnalytics(question) {
    try {
      await addDoc(collection(db, "botQuestions"), {
        question,
        createdAt: serverTimestamp(),
      });
    } catch {
      // optional analytics failed silently
    }
  }

  async function saveFeedback(messageText, rating) {
    try {
      await addDoc(collection(db, "botFeedback"), {
        message: messageText,
        rating,
        createdAt: serverTimestamp(),
      });
    } catch {
      // optional feedback failed silently
    }
  }

  async function saveLead(name, email, message) {
    try {
      await addDoc(collection(db, "botLeads"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
    } catch {
      // optional lead failed silently
    }
  }

  function findBestMatches(question) {
    return searchableItems
      .map((item) => ({
        ...item,
        score: scoreItem(question, item),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  function answerQuestion(question) {
    const q = normalize(question);
    const language = detectLanguage(question);

    if (hasBadWords(q)) {
      return {
        role: "bot",
        text: "Please keep the chat respectful. I can help with articles, shop, hire, about Samir, and website information.",
      };
    }

    if (firebaseLoading) {
      return {
        role: "bot",
        text: "I’m still loading website data. Please try again in a moment.",
      };
    }

    if (isGreeting(q)) {
      return {
        role: "bot",
        text: "Hello! 😊 What would you like to explore today — articles, shop, hire, or about Samir?",
        suggestions: [
          { title: "Articles", link: "/articles" },
          { title: "Shop", link: "/shop" },
          { title: "About Samir", link: "/about" },
          { title: "Hire Samir", link: "/hire" },
        ],
        followUp: "Do you want articles or shop?",
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
        text: "Goodbye! 👋 Come back anytime.",
      };
    }

    if (q.includes("my name is") || q.includes("email is")) {
      const emailMatch = question.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
      const nameMatch = question.match(/my name is ([a-zA-Z\s]+)/i);

      if (emailMatch || nameMatch) {
        saveLead(
          nameMatch ? nameMatch[1].trim() : "Unknown",
          emailMatch ? emailMatch[0] : "",
          question
        );

        return {
          role: "bot",
          text: "Thanks! I saved your contact details. Samir can use this to follow up.",
          suggestions: [{ title: "Contact / Hire", link: "/hire" }],
        };
      }
    }

    const matches = findBestMatches(question);
    const best = matches[0];
    const related = matches.slice(1, 4);

    if (best && best.score >= 8) {
      if (best.type === "article") {
        return {
          role: "bot",
          text: makeArticleSummary(best),
          suggestions: [{ title: `Read: ${best.title}`, link: best.link }],
          related,
        };
      }

      if (best.type === "product") {
        return {
          role: "bot",
          text: `I found a shop item that may help: ${best.title}. ${best.description || ""}`,
          suggestions: [{ title: "Open Shop", link: "/shop" }],
          related,
        };
      }

      if (best.type === "training") {
        return {
          role: "bot",
          text: best.answer || best.text || "I found this information from the website.",
          suggestions: best.link ? [{ title: best.title, link: best.link }] : [],
          related,
        };
      }

      return {
        role: "bot",
        text: best.text,
        suggestions: [{ title: best.title, link: best.link }],
        related,
      };
    }

    if (matches.length > 0) {
      return {
        role: "bot",
        text:
          language === "somali"
            ? "Si fiican uma fahmin, laakiin waxaa laga yaabaa inaad ula jeeddo kuwaan:"
            : language === "arabic"
            ? "لم أفهم تمامًا، لكن ربما تقصد أحد هذه الخيارات:"
            : "I’m not fully sure what you mean, but maybe you want one of these:",
        suggestions: matches.slice(0, 4).map((item) => ({
          title: item.title,
          link: item.link || "/articles",
        })),
        followUp: "Do you want articles, shop products, or information about Samir?",
      };
    }

    return {
      role: "bot",
      text:
        "I couldn’t find an exact answer from this website. Try asking about earth, moon, space, Samir, shop, reels, contact, or hire.",
      suggestions: [
        { title: "All Articles", link: "/articles" },
        { title: "About Samir", link: "/about" },
        { title: "Shop", link: "/shop" },
        { title: "Hire Samir", link: "/hire" },
      ],
      followUp: "Do you want me to show articles or website pages?",
    };
  }

  function sendBotReply(question) {
    setTyping(true);

    setTimeout(() => {
      const botAnswer = answerQuestion(question);
      setMessages((prev) => [...prev, botAnswer]);
      setTyping(false);
    }, 700);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const userQuestion = input.trim();

    setMessages((prev) => [...prev, { role: "user", text: userQuestion }]);
    setInput("");
    saveAnalytics(userQuestion);
    sendBotReply(userQuestion);
  }

  function handleQuickButton(text) {
    setMessages((prev) => [...prev, { role: "user", text }]);
    saveAnalytics(text);
    sendBotReply(text);
  }

  function clearChat() {
    const startMessage = [
      {
        role: "bot",
        text: "Chat cleared. Hi again! Ask me about articles, Samir, shop, hire, or this website.",
      },
    ];

    setMessages(startMessage);
    localStorage.setItem("sitebot-messages", JSON.stringify(startMessage));
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;

    window.speechSynthesis.speak(utterance);
  }

  function startVoiceInput() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Voice input is not supported in this browser. Try Chrome or Edge.",
        },
      ]);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }

  return (
    <>
      <button className="sitebot-toggle" onClick={() => setOpen(!open)}>
        <span>🤖</span>
      </button>

      {open && (
        <div className={`sitebot-box ${darkMode ? "dark" : "light"}`}>
          <div className="sitebot-header">
            <div className="sitebot-brand">
              <div className="sitebot-avatar bot-avatar">🤖</div>
              <div>
                <strong>Samir AI</strong>
                <span>
                  {firebaseLoading
                    ? "Loading website data..."
                    : "Website assistant"}
                </span>
              </div>
            </div>

            <div className="sitebot-header-actions">
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️" : "🌙"}
              </button>
              <button onClick={clearChat}>🧹</button>
              <button onClick={() => setOpen(false)}>×</button>
            </div>
          </div>

          <div className="sitebot-quick-buttons">
            {QUICK_BUTTONS.map((button) => (
              <button
                key={button.label}
                onClick={() => handleQuickButton(button.text)}
              >
                {button.label}
              </button>
            ))}
          </div>

          <div className="sitebot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`sitebot-row ${msg.role}`}>
                <div className="sitebot-avatar">
                  {msg.role === "user" ? "👤" : "🤖"}
                </div>

                <div className={`sitebot-message ${msg.role}`}>
                  <p>{msg.text}</p>

                  {msg.followUp && (
                    <small className="sitebot-followup">{msg.followUp}</small>
                  )}

                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="sitebot-suggestions">
                      {msg.suggestions.map((item, i) => (
                        <a key={i} href={item.link}>
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}

                  {msg.related && msg.related.length > 0 && (
                    <div className="sitebot-related">
                      <strong>Related:</strong>
                      {msg.related.map((item, i) => (
                        <a key={i} href={item.link || "/articles"}>
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}

                  {msg.role === "bot" && (
                    <div className="sitebot-feedback">
                      <button onClick={() => speak(msg.text)}>🔊</button>
                      <button onClick={() => saveFeedback(msg.text, "up")}>
                        👍
                      </button>
                      <button onClick={() => saveFeedback(msg.text, "down")}>
                        👎
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="sitebot-row bot">
                <div className="sitebot-avatar">🤖</div>
                <div className="sitebot-message bot typing">
                  Samir AI is typing<span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form className="sitebot-form" onSubmit={handleSubmit}>
            <button type="button" onClick={startVoiceInput}>
              🎤
            </button>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                firebaseLoading
                  ? "Loading website data..."
                  : "Ask about articles, Samir, shop..."
              }
              disabled={firebaseLoading}
            />

            <button type="submit" disabled={firebaseLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SiteBot;