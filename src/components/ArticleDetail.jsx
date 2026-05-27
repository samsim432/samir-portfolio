import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import "./ArticleDetail.css";

function ArticleDetail() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState(18.5);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState("");

  useEffect(() => {
    const articlesQuery = query(collection(db, "articles"));

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const firebaseArticles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const foundArticle = firebaseArticles.find(
        (item) => item.slug === slug || item.id === slug
      );

      setAllArticles(firebaseArticles);
      setArticle(foundArticle || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!article?.id) return;

    const savedReaction = localStorage.getItem(`article-reaction-${article.id}`);
    setSelectedReaction(savedReaction || "");
  }, [article]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const contentBlocks = useMemo(() => {
    if (!article?.content) return [];

    return article.content.map((item) => {
      if (typeof item === "string") {
        return {
          type: "paragraph",
          text: item,
        };
      }

      return item;
    });
  }, [article]);

  const plainArticleText = useMemo(() => {
    return [
      article?.title,
      article?.summary || article?.text,
      ...contentBlocks.map((block) => block.text || block.code || ""),
    ]
      .filter(Boolean)
      .join(". ");
  }, [article, contentBlocks]);

  const readingStats = useMemo(() => {
    const words = plainArticleText.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return {
      wordCount,
      readingTime,
    };
  }, [plainArticleText]);

  const headings = useMemo(() => {
    return contentBlocks.filter((block) => block.type === "heading");
  }, [contentBlocks]);

  const keyTakeaways = useMemo(() => {
    if (Array.isArray(article?.takeaways) && article.takeaways.length > 0) {
      return article.takeaways.filter(Boolean).slice(0, 5);
    }

    const paragraphs = contentBlocks
      .filter((block) => block.type === "paragraph" && block.text)
      .map((block) => block.text);

    return paragraphs.slice(0, 3).map((paragraph) => {
      const sentence = paragraph.split(".")[0];
      return sentence.length > 125 ? `${sentence.slice(0, 125)}...` : sentence;
    });
  }, [article, contentBlocks]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];

    const sameCategory = allArticles.filter(
      (item) =>
        item.id !== article.id &&
        item.category &&
        article.category &&
        item.category === article.category
    );

    const otherArticles = allArticles.filter(
      (item) =>
        item.id !== article.id &&
        !sameCategory.some((related) => related.id === item.id)
    );

    return [...sameCategory, ...otherArticles].slice(0, 3);
  }, [allArticles, article]);

  const increaseFontSize = () => {
    setFontSize((current) => Math.min(current + 1, 23));
  };

  const decreaseFontSize = () => {
    setFontSize((current) => Math.max(current - 1, 15.5));
  };

  const resetFontSize = () => {
    setFontSize(18.5);
  };

  const listenToArticle = () => {
    if (!plainArticleText) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(plainArticleText);
    utterance.rate = 0.92;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopListening = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const copyArticleLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Article link copied!");
    } catch {
      alert("Could not copy link.");
    }
  };

  const handleReaction = (reaction) => {
    setSelectedReaction(reaction);

    if (article?.id) {
      localStorage.setItem(`article-reaction-${article.id}`, reaction);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <section className="all-articles-page">
        <div className="all-articles-container">
          <div className="article-loading-card">
            <span className="article-loader"></span>
            <p>Loading article...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const articleSummary = article.summary || article.text;
  const articleAuthor = article.author || "Samir Simkhada";

  return (
    <section className="all-articles-page">
      <div className="reading-progress">
        <div
          className="reading-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="all-articles-container">
        <Link to="/articles" className="back-home-articles">
          ← Back to Articles
        </Link>

        <article className="article-detail-page">
          {article.image && (
            <div className="article-hero-image-wrap">
              <img src={article.image} alt={article.title} />
            </div>
          )}

          <header className="article-header">
            <div className="article-topline">
              {article.category && (
                <p className="articles-badge">{article.category}</p>
              )}

              <span className="article-read-pill">
                {readingStats.readingTime} min read
              </span>
            </div>

            <h1>{article.title}</h1>

            <div className="article-author-card">
              <div className="article-author-avatar">
                {articleAuthor.charAt(0)}
              </div>

              <div>
                <p>Written by {articleAuthor}</p>

                <div className="article-meta">
                  {article.date && <span>{article.date}</span>}
                  <span>{readingStats.wordCount} words</span>
                  <span>Reader friendly</span>
                </div>
              </div>
            </div>

            {articleSummary && (
              <p className="article-detail-summary">{articleSummary}</p>
            )}
          </header>

          <section className="reader-tools">
            <div className="reader-tool-group">
              <span>Text size</span>

              <button type="button" onClick={decreaseFontSize}>
                A-
              </button>

              <button type="button" onClick={resetFontSize}>
                Reset
              </button>

              <button type="button" onClick={increaseFontSize}>
                A+
              </button>
            </div>

            <div className="reader-tool-group">
              {!isSpeaking ? (
                <button type="button" onClick={listenToArticle}>
                  🔊 Listen
                </button>
              ) : (
                <button type="button" onClick={stopListening}>
                  ⏹ Stop
                </button>
              )}

              <button type="button" onClick={copyArticleLink}>
                🔗 Copy link
              </button>
            </div>
          </section>

          {keyTakeaways.length > 0 && (
            <section className="key-takeaways">
              <div className="key-takeaways-heading">
                <span>✨</span>
                <div>
                  <p className="key-takeaways-title">Key takeaways</p>
                  <small>Quick points before you read the full article.</small>
                </div>
              </div>

              <ul>
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index}>{takeaway}</li>
                ))}
              </ul>
            </section>
          )}

          {headings.length > 0 && (
            <aside className="article-toc">
              <p>In this article</p>

              <div>
                {headings.map((heading, index) => (
                  <a key={index} href={`#section-${index}`}>
                    {heading.text}
                  </a>
                ))}
              </div>
            </aside>
          )}

          <div
            className="article-detail-content"
            style={{ "--reader-font-size": `${fontSize}px` }}
          >
            {contentBlocks.map((block, index) => {
              if (block.type === "heading") {
                const headingIndex = contentBlocks
                  .slice(0, index + 1)
                  .filter((item) => item.type === "heading").length - 1;

                return (
                  <h2 key={index} id={`section-${headingIndex}`}>
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "quote") {
                return <blockquote key={index}>{block.text}</blockquote>;
              }

              if (block.type === "image") {
                return (
                  <figure key={index}>
                    <img src={block.src} alt={block.alt || "Article image"} />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                  </figure>
                );
              }

              if (block.type === "code") {
                return (
                  <pre key={index}>
                    <code>{block.code}</code>
                  </pre>
                );
              }

              if (block.type === "list" && Array.isArray(block.items)) {
                return (
                  <ul key={index} className="article-custom-list">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={index}>{block.text}</p>;
            })}
          </div>

          <section className="article-reactions">
            <p>How was this article?</p>

            <div>
              {["Helpful 👍", "Inspiring 💡", "Easy to read ✅"].map(
                (reaction) => (
                  <button
                    key={reaction}
                    type="button"
                    className={selectedReaction === reaction ? "active" : ""}
                    onClick={() => handleReaction(reaction)}
                  >
                    {reaction}
                  </button>
                )
              )}
            </div>

            {selectedReaction && (
              <span className="reaction-thank-you">
                Thanks for your feedback!
              </span>
            )}
          </section>

          <div className="article-actions">
            <button type="button" onClick={copyArticleLink}>
              Copy article link
            </button>

            <Link to="/articles">Read more articles</Link>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="related-articles-section">
            <div className="related-articles-header">
              <p>Keep reading</p>
              <h2>Related articles</h2>
            </div>

            <div className="related-articles-grid">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  to={`/articles/${item.slug || item.id}`}
                  className="related-article-card"
                >
                  {item.image && <img src={item.image} alt={item.title} />}

                  <div>
                    {item.category && <span>{item.category}</span>}
                    <h3>{item.title}</h3>
                    {(item.summary || item.text) && (
                      <p>{item.summary || item.text}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {scrollProgress > 45 && (
        <button type="button" className="back-to-top-btn" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </section>
  );
}

export default ArticleDetail;