import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import {
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

import "./ArticleDetail.css";

function ArticleDetail() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const articlesQuery = query(collection(db, "articles"));

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const firebaseArticles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const foundArticle = firebaseArticles.find(
        (item) => item.slug === slug
      );

      setArticle(foundArticle || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [slug]);

  if (loading) {
    return (
      <section className="all-articles-page">
        <div className="all-articles-container">
          <p>Loading article...</p>
        </div>
      </section>
    );
  }

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <section className="all-articles-page">
      <div className="all-articles-container">
        <Link to="/articles" className="back-home-articles">
          ← Back to Articles
        </Link>

        <article className="article-detail-page">
          <img src={article.image} alt={article.title} />

          <p className="articles-badge">
            {article.category}
          </p>

          <h1>{article.title}</h1>

          <p>{article.text}</p>

          <div>
            {Array.isArray(article.content) &&
              article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ArticleDetail;