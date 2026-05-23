import { useState } from "react";
import "./SiteBot.css";

function SiteBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="sitebot-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Open Samir AI"
      >
        <span>🤖</span>
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

          <div className="sitebot-body">
            <div className="sitebot-coming-icon">🤖</div>

            <p className="sitebot-coming-badge">Coming Soon</p>

            <h2>Samir AI Assistant</h2>

            <p>
              A smart website assistant is coming soon. It will help users find
              articles, learn about Samir, explore the shop, and ask questions
              about the website.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SiteBot;