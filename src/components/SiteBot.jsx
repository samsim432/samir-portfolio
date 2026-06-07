import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SiteBot.css";

function formatBotText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\s*-\s/g, "<br />• ")
    .replace(/\n/g, "<br />");
}

function SiteBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef(null);
  const bodyRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I’m Samir AI. Ask me about articles, projects, AI, space, React, Python, shop, or hiring Samir.",
    },
  ]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply || "Sorry, I could not answer right now.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Backend is not connected. Please run the server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const showSuggestions = messages.length === 1;

  return (
    <>
      <button
        className={`sitebot-toggle ${open ? "sitebot-toggle-open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        aria-label="Open Samir AI Assistant"
        type="button"
      >
        <span>{open ? "×" : "✨"}</span>
      </button>

      {open && (
        <div
          className="sitebot-box"
          ref={boxRef}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sitebot-header">
            <div className="sitebot-header-left">
              <div className="sitebot-avatar">✨</div>
              <div>
                <strong>Samir AI</strong>
                <span>
                  <i></i> Online
                </span>
              </div>
            </div>

            <button
              type="button"
              className="sitebot-close"
              onClick={() => setOpen(false)}
              aria-label="Close Samir AI Assistant"
            >
              ×
            </button>
          </div>

          <div className="sitebot-body" ref={bodyRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`sitebot-message ${
                  msg.role === "user"
                    ? "sitebot-user-message"
                    : "sitebot-bot-message"
                }`}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      msg.role === "bot"
                        ? formatBotText(msg.text)
                        : msg.text,
                  }}
                />
              </div>
            ))}

            {loading && (
              <div className="sitebot-message sitebot-bot-message">
                <p className="typing">Samir AI is typing...</p>
              </div>
            )}

            {showSuggestions && (
              <div className="sitebot-suggestions">
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link to="/articles" onClick={() => setOpen(false)}>
                  Articles
                </Link>
                <Link to="/shop" onClick={() => setOpen(false)}>
                  Shop
                </Link>
                <Link to="/hire" onClick={() => setOpen(false)}>
                  Hire Me
                </Link>
              </div>
            )}
          </div>

          <div className="sitebot-footer">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button type="button" onClick={sendMessage} disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SiteBot;