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
      text: "Hi 👋 I’m Samir AI. Ask me about articles, AI, science, space, technology, projects, or hiring Samir.",
    },
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && boxRef.current && !boxRef.current.contains(event.target)) {
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
      const response = await fetch(
        "https://samir-portfolio-production-90a8.up.railway.app/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply || "Sorry, I could not answer that right now.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, the assistant is temporarily unavailable. You can still explore the articles or contact Samir directly.",
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
        onClick={(event) => {
          event.stopPropagation();
          setOpen(!open);
        }}
        aria-label={open ? "Close Samir AI Assistant" : "Open Samir AI Assistant"}
        type="button"
      >
        <span>{open ? "×" : "✨"}</span>
      </button>

      {open && (
        <div
          className="sitebot-box"
          ref={boxRef}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-label="Samir AI Assistant"
        >
          <div className="sitebot-header">
            <div className="sitebot-header-left">
              <div className="sitebot-avatar">✨</div>

              <div>
                <strong>Samir AI</strong>
                <span>
                  <i></i> Online assistant
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
            {messages.map((message, index) => (
              <div
                key={index}
                className={`sitebot-message ${
                  message.role === "user"
                    ? "sitebot-user-message"
                    : "sitebot-bot-message"
                }`}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      message.role === "bot"
                        ? formatBotText(message.text)
                        : message.text,
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
                <Link to="/articles" onClick={() => setOpen(false)}>
                  Articles
                </Link>

                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>

                <Link to="/hire" onClick={() => setOpen(false)}>
                  Hire Me
                </Link>

                <Link to="/#contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </div>
            )}
          </div>

          <div className="sitebot-footer">
            <input
              type="text"
              placeholder="Ask about articles, AI, science..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && sendMessage()}
              aria-label="Ask Samir AI"
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