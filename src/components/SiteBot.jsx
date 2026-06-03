import { useState } from "react";
import { Link } from "react-router-dom";
import "./SiteBot.css";

function SiteBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`sitebot-toggle ${open ? "sitebot-toggle-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open Samir AI Assistant"
        type="button"
      >
        <span>{open ? "×" : "✨"}</span>
      </button>

      {open && (
        <div className="sitebot-box">
          <div className="sitebot-header">
            <div className="sitebot-header-left">
              <div className="sitebot-avatar">✨</div>

              <div>
                <strong>Samir AI</strong>
                <span><i></i> Coming Soon</span>
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

          <div className="sitebot-body">
            <div className="sitebot-message">
              <p>
                Hi, I’m <strong>Samir AI</strong>. Soon I’ll help you explore
                articles, projects, shop, and contact options easily.
              </p>
            </div>

            <div className="sitebot-suggestions">
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/articles" onClick={() => setOpen(false)}>Articles</Link>
              <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
              <Link to="/hire" onClick={() => setOpen(false)}>Hire Me</Link>
            </div>

            <div className="sitebot-info-card">
              <p className="sitebot-coming-badge">Coming Soon</p>
              <h2>Smart assistant</h2>
              <p>
                Soon this assistant will guide visitors and recommend helpful
                content from the website.
              </p>
            </div>
          </div>

          <div className="sitebot-footer">
            <input
              type="text"
              placeholder="Ask me anything..."
              disabled
            />

            <button type="button" disabled>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SiteBot;