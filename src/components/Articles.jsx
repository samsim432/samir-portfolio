import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

import "./Articles.css";

function Articles() {
  const [firebaseArticles, setFirebaseArticles] = useState([]);

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

  return (
    <section className="articles" id="articles">
      <div className="articles-container">
        <div className="articles-header">
          <div>
            <p className="articles-badge">Knowledge Hub</p>

            <h2>Latest Articles</h2>

            <p className="articles-intro">
              Read educational stories, science ideas,
              AI concepts, and creative explanations.
            </p>
          </div>

          <Link
            to="/articles"
            className="view-all-articles"
          >
            View All Articles
          </Link>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <Link
              to={`/articles/${article.slug || article.id}`}
              key={article.id}
              className="article-card-link"
            >
              <article className="article-card">
                <div className="article-img">
                  <img
                    src={article.image}
                    alt={article.title}
                  />

                  <span>{article.category}</span>
                </div>

                <div className="article-body">
                  <h3>{article.title}</h3>

                  <p>{article.text}</p>

                  <button type="button">
                    Read Article →
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;