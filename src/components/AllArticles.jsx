import { useState } from "react";
import "./AllArticles.css";

function AllArticles() {
  const articles = [
    {
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",

      tag: "Space",

      title: "What If Earth Had Two Moons?",

      text: "Explore how Earth’s tides and climate could completely change.",

      content: [
        "If Earth had two moons, the night sky would become much brighter and more beautiful.",

        "Ocean tides could become stronger and more dangerous because two moons would pull Earth’s water from different directions.",

        "Coastal cities might face more flooding, weather patterns could shift, and animals that depend on moonlight might behave differently.",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",

      tag: "AI",

      title: "Can AI Become Smarter Than Humans?",

      text: "Understanding future AI and its impact on humanity.",

      content: [
        "Artificial intelligence is improving very quickly in writing, coding, design, and research.",

        "But humans still have emotions, creativity, real-world understanding, and social intelligence that AI does not fully understand.",

        "The future depends on how people develop and control AI systems responsibly.",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?auto=format&fit=crop&w=900&q=80",

      tag: "History",

      title: "What If Dinosaurs Never Went Extinct?",

      text: "A creative science-based imagination article.",

      content: [
        "Dinosaurs ruled Earth for millions of years before the asteroid impact changed everything.",

        "If they survived, mammals may never have become dominant animals on Earth.",

        "Human civilization might never exist in the way we know today.",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80",

      tag: "Future",

      title: "What If Humans Lived on Mars?",

      text: "Could humans survive permanently on Mars?",

      content: [
        "Mars is cold, dry, and has almost no breathable atmosphere.",

        "Humans would need special habitats, oxygen systems, food farms, and radiation protection.",

        "Even with challenges, Mars could become humanity’s first permanent planet outside Earth.",
      ],
    },
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const suggestions = selectedArticle
    ? articles.filter(
        (article) => article.title !== selectedArticle.title
      )
    : [];

  return (
    <section className="all-articles-page">
      <div className="all-articles-container">

        <a href="/" className="back-home-articles">
          ← Back Home
        </a>

        <p className="all-articles-badge">
          Article Collection
        </p>

        <h1>All Articles</h1>

        <p className="all-articles-intro">
          Explore all educational What If stories,
          explanations, and imagination-based articles.
        </p>

        <div className="all-articles-grid">
          {articles.map((article, index) => (
            <article
              className="all-article-card"
              key={index}
              onClick={() => setSelectedArticle(article)}
            >

              <div className="all-article-image">
                <img
                  src={article.image}
                  alt={article.title}
                />

                <span>{article.tag}</span>
              </div>

              <div className="all-article-body">

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
        <div className="all-article-popup">

          <div
            className="all-article-popup-bg"
            onClick={() => setSelectedArticle(null)}
          ></div>

          <div className="all-article-popup-box">

            <button
              className="all-close-popup"
              onClick={() => setSelectedArticle(null)}
            >
              ×
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="all-popup-image"
            />

            <span className="all-popup-tag">
              {selectedArticle.tag}
            </span>

            <h2>{selectedArticle.title}</h2>

            <p className="all-popup-summary">
              {selectedArticle.text}
            </p>

            <div className="all-popup-content">
              {selectedArticle.content.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>

            {/* SUGGESTIONS */}

            <div className="all-suggestion-section">

              <h3>Suggested Articles</h3>

              <div className="all-suggestion-grid">
                {suggestions.map((article, index) => (
                  <button
                    className="all-suggestion-card"
                    key={index}
                    onClick={() =>
                      setSelectedArticle(article)
                    }
                  >

                    <img
                      src={article.image}
                      alt={article.title}
                    />

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

export default AllArticles;