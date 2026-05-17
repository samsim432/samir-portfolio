import { useState } from "react";
import "./Articles.css";

function Articles() {
  const articles = [
    {
      tag: "Space",
      title: "What If Earth Had Two Moons?",
      text: "A simple explanation of how tides, nights, climate, and life could change.",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
      content: [
        "If Earth had two moons, our planet would look very different. The night sky would be brighter, tides would become stronger and more complex, and coastal areas could face more flooding.",
        "Two moons could also affect Earth’s rotation over a long period of time. Days might slowly become longer or shorter depending on the moons’ gravity.",
        "Life on Earth would adapt to these changes. Animals, oceans, weather, and even human cities near the coast could be affected.",
      ],
    },
    {
      tag: "AI",
      title: "Can AI Become Smarter Than Humans?",
      text: "A beginner-friendly article about future AI and real-world possibilities.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
      content: [
        "AI is already very good at tasks like writing, coding, image generation, research, and data analysis. But being smarter than humans in every way is much harder.",
        "Human intelligence includes emotion, creativity, survival instinct, social understanding, and real-world experience.",
        "The future of AI depends on how people build, control, and use it. It could become a powerful tool for education, science, medicine, and creativity.",
      ],
    },
    {
      tag: "History",
      title: "What If Dinosaurs Never Went Extinct?",
      text: "A creative science-based look at how Earth might be different today.",
      image:
        "https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?auto=format&fit=crop&w=900&q=80",
      content: [
        "If dinosaurs never went extinct, mammals may not have become dominant in the same way. Human evolution might never have happened.",
        "Large dinosaurs would have changed ecosystems, food chains, forests, and the survival of smaller animals.",
        "Earth today could be a planet ruled by giant reptiles instead of humans.",
      ],
    },
    {
      tag: "Future",
      title: "What If Humans Lived on Mars?",
      text: "How people could survive on Mars using technology, science, and teamwork.",
      image:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80",
      content: [
        "Living on Mars would be one of humanity’s biggest challenges. Mars has no breathable air, very cold temperatures, and dangerous radiation.",
        "Humans would need special homes, oxygen systems, water recycling, food farms, and strong protection from space radiation.",
        "Mars life would be difficult, but it could teach us how to survive beyond Earth.",
      ],
    },
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const suggestions = selectedArticle
    ? articles.filter((article) => article.title !== selectedArticle.title)
    : [];

  return (
    <section className="articles" id="articles">
      <div className="articles-container">
        <div className="articles-header">
          <div>
            <p className="articles-badge">Knowledge Hub</p>

            <h2>Latest Articles</h2>

            <p className="articles-intro">
              Read short explanations behind my What If stories, reels, and
              future video ideas.
            </p>
          </div>

          <a href="/articles-page" className="view-all-articles">
            View All Articles
          </a>
        </div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <article
              className="article-card"
              key={index}
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
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="suggestion-section">
              <h3>Suggested Articles</h3>

              <div className="suggestion-grid">
                {suggestions.map((article, index) => (
                  <button
                    className="suggestion-card"
                    key={index}
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