import { Link } from "react-router-dom";
import "./Reels.css";

function Reels() {
  const reels = [
    {
      image: "/reel-1.jpg",
      title: "What If Earth Had Two Moons?",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
    {
      image: "/reel-2.jpg",
      title: "What If Humans Lived on Mars?",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
    {
      image: "/reel-3.jpg",
      title: "What If Dinosaurs Never Went Extinct?",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
    {
      image: "/reel-4.jpg",
      title: "What If AI Became More Intelligent?",
      link: "https://www.instagram.com/simkhadasamir333/",
    },
  ];

  return (
    <section className="reels-page">
      <div className="reels-container">
        <Link to="/" className="back-home">
          ← Back Home
        </Link>

        <p className="reels-badge">Instagram Reels</p>

        <h1>Watch Latest Reels</h1>

        <p className="reels-intro">
          Explore short What If videos, science stories, and creative reels.
        </p>

        <div className="reels-grid">
          {reels.map((reel, index) => (
            <a
              href={reel.link}
              className="reel-card"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={reel.image} alt={reel.title} />

              <div className="reel-overlay">
                <span>▶</span>
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