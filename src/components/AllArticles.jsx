import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

import "./AllArticles.css";

import Badge from "../ui/Badge";
import Card from "../ui/Card";


function AllArticles() {
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

  const articles = firebaseArticles;

const suggestions = selectedArticle
  ? articles.filter(
      (a) =>
        a.id !== selectedArticle.id &&
        a.category === selectedArticle.category
    )
  : [];

  const selectedContent = Array.isArray(selectedArticle?.content)
    ? selectedArticle.content
    : [];

  return (
    <section className="all-articles-page">
      <div className="all-articles-container">
        <Link to="/" className="back-home-articles">
          ← Back Home
        </Link>

        <h1>All Articles</h1>

        <p>Explore all What If stories</p>

        <div className="all-articles-grid">
          {articles.map((article) => (
            <button
              type="button"
              key={article.id}
              className="all-article-click"
              onClick={() => setSelectedArticle(article)}
            >
              <Card className="all-article-card">
                <img src={article.image} alt={article.title} />

                <div style={{ padding: "14px" }}>
                  <Badge>{article.category}</Badge>

                  <h3>{article.title}</h3>

                  <p>{article.text}</p>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <div className="all-article-popup">
          <div
            className="all-article-popup-bg"
            onClick={() => setSelectedArticle(null)}
          />

          <div className="all-article-popup-box">
            <button
              type="button"
              className="all-close-popup"
              onClick={() => setSelectedArticle(null)}
            >
              ×
            </button>

            <img src={selectedArticle.image} alt={selectedArticle.title} />

            <h2>{selectedArticle.title}</h2>

            <p>{selectedArticle.text}</p>

            <div>
              {selectedContent.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="all-suggestion-section">
              <h3>Suggested Articles</h3>

              <div className="all-suggestion-grid">
                {suggestions.map((article) => (
                  <button
                    type="button"
                    key={article.id}
                    className="all-suggestion-card"
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

export default AllArticles;