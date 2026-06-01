import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

import "./AllArticles.css";

function AllArticles() {
  const [firebaseArticles, setFirebaseArticles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const articlesQuery = query(collection(db, "articles"));

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const articlesFromFirebase = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFirebaseArticles(articlesFromFirebase);
    });

    return () => unsubscribe();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = firebaseArticles
      .map((article) => article.category)
      .filter(Boolean);

    return ["All", ...new Set(uniqueCategories)];
  }, [firebaseArticles]);

  const filteredArticles = useMemo(() => {
    return firebaseArticles.filter((article) => {
      const title = article.title || "";
      const category = article.category || "";
      const text = article.text || article.summary || "";

      const matchesSearch =
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        category.toLowerCase().includes(searchText.toLowerCase()) ||
        text.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [firebaseArticles, searchText, selectedCategory]);

  return (
    <section className="all-articles-page">
      <div className="all-articles-container">
        <Link to="/" className="back-home-articles">
          ← Back Home
        </Link>

        <div className="all-articles-header">
          <p className="all-articles-badge">Knowledge Hub</p>

          <h1>All Articles</h1>

          <p>
            Explore science, AI, space, future technology, and educational
            content in a clean reader-friendly layout.
          </p>
        </div>

        <div className="all-articles-toolbar">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="all-articles-empty">
            <h2>No articles found</h2>
            <p>Try changing your search or category filter.</p>
          </div>
        ) : (
          <div className="all-articles-grid">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug || article.id}`}
                className="all-article-click"
              >
                <article className="all-article-card">
                  <div className="all-article-image-wrap">
                    <img
                      src={
                        article.image ||
                        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
                      }
                      alt={article.title || "Article image"}
                    />

                    <span>{article.category || "General"}</span>
                  </div>

                  <div className="all-article-content">
                    <h3>{article.title || "Untitled Article"}</h3>

                    <p>
                      {article.text ||
                        article.summary ||
                        "Read this article to learn more."}
                    </p>

                    <div className="all-article-footer">
                      <small>{article.author || "Samir Simkhada"}</small>
                      <strong>Read →</strong>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AllArticles;