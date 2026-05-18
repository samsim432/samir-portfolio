import { useState } from "react";
import "./Articles.css";

function Articles() {
  const articles = [
  // ================= SPACE =================
  {
    tag: "Space",
    title: "What If Earth Had Two Moons?",
    text: "A deep dive into how an extra moon would reshape tides, nights, and life on Earth.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    content: [
      "If Earth had two moons, the gravitational pull on our oceans would become far more complex.",
      "Tides would no longer follow a simple daily pattern — instead, multiple high and low tides could occur in unpredictable cycles.",
      "Nighttime illumination would increase, as a second moon reflects additional sunlight back to Earth.",
      "Animal behavior, especially marine life, would evolve differently due to changing tidal rhythms.",
      "Over long periods, the orbital stability of both moons could also influence Earth's axial tilt and climate patterns."
    ],
  },
  {
    tag: "Space",
    title: "What If the Sun Disappeared for 5 Seconds?",
    text: "A terrifying scenario exploring the instant effects of temporary solar disappearance.",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
    content: [
      "If the Sun vanished for just 5 seconds, Earth would immediately lose its gravitational anchor in space.",
      "After about 8 minutes (the time light takes to reach Earth), the sky would suddenly go dark.",
      "Planets in the solar system would slightly drift off their stable orbits during that brief window.",
      "Temperatures wouldn't drop instantly, but the absence of sunlight would create widespread confusion and panic.",
      "When the Sun returns, gravitational stability would restore, but the disturbance could still ripple through the solar system."
    ],
  },

  // ================= AI =================
  {
    tag: "AI",
    title: "What If AI Controlled the Entire World?",
    text: "Exploring a future where artificial intelligence manages governments, economies, and daily life.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    content: [
      "In an AI-governed world, decision-making would be driven by data analysis instead of human emotions or politics.",
      "Public services like healthcare, transportation, and law enforcement could become more efficient and optimized.",
      "However, the lack of human judgment might create ethical blind spots in complex moral situations.",
      "AI systems would need strict transparency and regulation to prevent bias or misuse of power.",
      "Ultimately, society would face the challenge of balancing efficiency with human freedom and responsibility."
    ],
  },

  // ================= EARTH =================
  {
    tag: "Earth",
    title: "What If Dinosaurs Never Went Extinct?",
    text: "A world where dinosaurs continue to dominate ecosystems instead of humans.",
    image: "https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?auto=format&fit=crop&w=900&q=80",
    content: [
      "If dinosaurs never went extinct, mammals would likely never have evolved into dominant species.",
      "Humans might not exist at all, or could be small, hidden creatures in a dinosaur-ruled world.",
      "Large herbivores and predators would control ecosystems, shaping vegetation and geography.",
      "Birds (modern descendants of dinosaurs) might have evolved differently under competition from larger species.",
      "Earth’s biodiversity would be completely different, with evolution following an entirely alternate path."
    ],
  },


];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const suggestions = selectedArticle
    ? articles.filter((a) => a.title !== selectedArticle.title)
    : [];

  return (
    <section className="articles" id="articles">
      <div className="articles-container">

        <div className="articles-header">
          <div>
            <p className="articles-badge">Knowledge Hub</p>
            <h2>Latest Articles</h2>
            <p className="articles-intro">
              Read short explanations behind my What If stories.
            </p>
          </div>

          <a href="/articles-page" className="view-all-articles">
            View All Articles
          </a>
        </div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <article
              key={index}
              className="article-card"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="article-img">
                <img src={article.image} alt={article.title} />
                <span>{article.tag}</span>
              </div>

              <div className="article-body">
                <h3>{article.title}</h3>
                <p>{article.text}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(article);
                  }}
                >
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {selectedArticle && (
        <div className="article-popup">
          <div
            className="article-popup-bg"
            onClick={() => setSelectedArticle(null)}
          ></div>

          <div className="article-popup-box">
            <button
              className="close-popup"
              onClick={() => setSelectedArticle(null)}
            >
              ×
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="popup-image"
            />

            <span className="popup-tag">{selectedArticle.tag}</span>

            <h2>{selectedArticle.title}</h2>

            <p className="popup-summary">{selectedArticle.text}</p>

            <div className="popup-content">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="suggestion-section">
              <h3>Suggested Articles</h3>

              <div className="suggestion-grid">
                {suggestions.map((article, index) => (
                  <button
                    key={index}
                    className="suggestion-card"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <img src={article.image} alt={article.title} />
                    <div>
                      <span>{article.tag}</span>
                      <h4>{article.title}</h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Articles;