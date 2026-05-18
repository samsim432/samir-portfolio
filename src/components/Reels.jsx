import { Link } from "react-router-dom";
import "./Reels.css";

function Reels() {
  const reels = [
    {
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
      title: "What If Earth Had Two Moons?",
      category: "Space",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
    {
image:
  "https://images.unsplash.com/photo-1614726365930-627c75da663e?q=80&w=1200&auto=format&fit=crop",
  title: "What If Humans Lived on Mars?",
      category: "Future",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1200&auto=format&fit=crop",
      title: "What If Dinosaurs Never Went Extinct?",
      category: "History",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      title: "What If AI Became More Intelligent?",
      category: "Technology",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
  ];

  return (
    <section className="reels-page">
      <div className="reels-container">
        <Link to="/" className="back-home">
          ← Back Home
        </Link>

        <div className="reels-hero">
          <p className="reels-badge">Instagram Reels</p>

          <h1>Watch Latest Reels</h1>

          <p className="reels-intro">
            Explore short What If videos, science stories, future ideas, and
            creative educational reels by Samir Simkhada.
          </p>
        </div>

        <div className="reels-grid">
          {reels.map((reel, index) => (
            <a
              href={reel.link}
              className="reel-card"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${reel.title} on Instagram`}
            >
              <img
                src={reel.image}
                alt={reel.title}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="reel-overlay">
                <span className="play-icon">▶</span>

                <small>{reel.category}</small>

                <h3>{reel.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/simkhadasamir333/"
          className="instagram-more-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More on Instagram →
        </a>
      </div>
    </section>
  );
}

export default Reels;