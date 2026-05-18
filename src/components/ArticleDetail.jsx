import { Link, useParams, Navigate } from "react-router-dom";
import { articles } from "../data/articles";
import "./AllArticles.css";

function ArticleDetail() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

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

          <p className="articles-badge">{article.category}</p>

          <h1>{article.title}</h1>

          <p>
            {article.date} • {article.readTime}
          </p>

          <p>{article.excerpt}</p>

          <div>
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ArticleDetail;