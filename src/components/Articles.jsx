import { useEffect, useState } from "react";
import "./Articles.css";


import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

function Articles() {
  const [firebaseArticles, setFirebaseArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const articlesQuery = query(
      collection(db, "articles"),
      orderBy("publishedAt", "desc")
    );

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const articlesFromFirebase = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFirebaseArticles(articlesFromFirebase);
    });

    return () => unsubscribe();
  }, []);

  const articles = firebaseArticles.slice(0, 4);

const suggestions = selectedArticle
  ? firebaseArticles.filter(
      (a) =>
        a.id !== selectedArticle.id &&
        a.category === selectedArticle.category
    )
  : [];

  const selectedContent = Array.isArray(selectedArticle?.content)
    ? selectedArticle.content
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
          {articles.map((article) => (
            <article
              key={article.id}
              className="article-card"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="article-img">
                <img src={article.image} alt={article.title} />
                <span>{article.category}</span>
              </div>

              <div className="article-body">
                <h3>{article.title}</h3>
                <p>{article.text}</p>

                <button
                  type="button"
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
              type="button"
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

            <span className="popup-tag">{selectedArticle.category}</span>

            <h2>{selectedArticle.title}</h2>

            <p className="popup-summary">{selectedArticle.text}</p>

            <div className="popup-content">
              {selectedContent.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="suggestion-section">
              <h3>Suggested Articles</h3>

              <div className="suggestion-grid">
                {suggestions.map((article) => (
                  <button
                    type="button"
                    key={article.id}
                    className="suggestion-card"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <img src={article.image} alt={article.title} />

                    <div>
                      <span>{article.category}</span>
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