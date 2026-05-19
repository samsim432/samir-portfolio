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

  return (
    <section className="all-articles-page">
      <div className="all-articles-container">
        <Link
          to="/"
          className="back-home-articles"
        >
          ← Back Home
        </Link>

        <h1>All Articles</h1>

        <p>
          Explore science, AI, space, future technology,
          and educational content.
        </p>

        <div className="all-articles-grid">
          {firebaseArticles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="all-article-click"
            >
              <Card className="all-article-card">
                <img
                  src={article.image}
                  alt={article.title}
                />

                <div style={{ padding: "14px" }}>
                  <Badge>{article.category}</Badge>

                  <h3>{article.title}</h3>

                  <p>{article.text}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllArticles;