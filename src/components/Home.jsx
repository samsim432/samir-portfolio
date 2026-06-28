import "./Home.css";
import Button from "../ui/Button";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-bg" aria-hidden="true">
        <span className="shape shape-1">?</span>
        <span className="shape shape-2">✦</span>
        <span className="shape shape-3">AI</span>
        <span className="shape shape-4">🚀</span>
      </div>

      <div className="home-container">
        <div className="home-content">
          <p className="home-badge">AI • Science • Space • Technology</p>

          <h1>
            Hi, I am <span>Samir Simkhada</span>
          </h1>

          <p className="typing-text">
            Science Explainer • AI Writer • Knowledge Creator
          </p>

          <p className="home-text">
            I create simple and educational content about artificial intelligence,
            science, space, technology, history, and future ideas.
          </p>

          <p className="home-text">
            My goal is to make complex topics easy to understand for students,
            curious readers, and knowledge lovers.
          </p>

          <div className="topic-chips">
            <span>AI</span>
            <span>Science</span>
            <span>Space</span>
            <span>Technology</span>
            <span>History</span>
            <span>Future</span>
          </div>

          <div className="home-buttons">
            <Button href="/articles" variant="primary">
              Read Articles
            </Button>

            <Button href="/hire" variant="secondary">
              Hire Me
            </Button>
          </div>

          <div className="trust-box">
            <h2>Why trust this website?</h2>
            <ul>
              <li>Original educational articles in simple language</li>
              <li>Focused on AI, science, space, and technology</li>
              <li>Clear explanations for students and curious readers</li>
              <li>Regularly updated with new knowledge-based content</li>
            </ul>
          </div>

          <div className="social-links">
            <a href="https://www.youtube.com/@Samirsimkhada0" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.instagram.com/simkhadasamir333/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/samir.simkhada.3o" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@samir.simkhada0?_r=1&_t=ZN-96REvfztlPK" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>

        <div className="home-profile">
          <div className="profile-ring">
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.jpg"
                alt="Samir Simkhada"
                className="profile-img"
                width="320"
                height="320"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>20+</strong>
              <span>Educational Articles</span>
            </div>

            <div className="stat-card">
              <strong>AI</strong>
              <span>Science • Space • Tech</span>
            </div>

            <div className="stat-card">
              <strong>Simple</strong>
              <span>Learning for Everyone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;