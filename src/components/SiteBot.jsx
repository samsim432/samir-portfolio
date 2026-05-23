import "./SiteBot.css";

function SiteBot() {
  return (
    <>
      <button className="sitebot-toggle" aria-label="Open Samir AI">
        <span>🤖</span>
      </button>

      <div className="sitebot-coming-soon">
        <div className="sitebot-coming-card">
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
    </>
  );
}

export default SiteBot;