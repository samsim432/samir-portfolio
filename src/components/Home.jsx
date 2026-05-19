import "./Home.css";
import Button from "../ui/Button";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-bg">
        <span className="shape shape-1">?</span>
        <span className="shape shape-2">✦</span>
        <span className="shape shape-3">AI</span>
        <span className="shape shape-4">🚀</span>
      </div>

      <div className="home-container">
        <div className="home-content">
          <p className="home-badge">Personal Portfolio & Knowledge Creator</p>

          <h1>
            Hi, I am <span>Samir Simkhada</span>
          </h1>

          <h2 className="typing-text">
            Science Explainer • Content Creator • Web Learner
          </h2>

          <p className="home-text">
            I create educational explanations, knowledge-based content, and
            creative digital projects about science, history, imagination,
            space, AI, technology, and real-world possibilities.
          </p>

          <p className="home-cta-text">
            Need a creative person for content, ideas, writing, or digital work?
          </p>

          <div className="topic-chips">
            <span>Science</span>
            <span>History</span>
            <span>Space</span>
            <span>Future</span>
            <span>AI</span>
            <span>Technology</span>
          </div>

          <div className="home-buttons">
            <Button href="/hire" variant="primary">
              Hire Me
            </Button>

            <Button href="#articles" variant="secondary">
              Read Articles
            </Button>
          </div>

          <div className="social-links">
            <a
              href="https://www.youtube.com/@Samirsimkhada0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              YouTube
            </a>

            <a
              href="https://www.instagram.com/simkhadasamir333/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/samir.simkhada.3o"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>

            <a
              href="https://www.tiktok.com/@samir.simkhada0?_r=1&_t=ZN-96REvfztlPK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              TikTok
            </a>

            <a
              href="https://www.buymeacoffee.com/samirsim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Me a Coffee"
            >
              Buy Me Coffee
            </a>
          </div>
        </div>

        <div className="home-profile">
          <div className="profile-ring">
            <img
              src="/profile.jpg"
              alt="Samir Simkhada"
              className="profile-img"
            />
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>50+</strong>
              <span>Content Ideas</span>
            </div>

            <div className="stat-card">
              <strong>Science</strong>
              <span>Space • AI • Robot • Tech</span>
            </div>

            <div className="stat-card">
              <strong>Creative</strong>
              <span>Writing • Content • Digital Work</span>
            </div>
          </div>
        </div>
      </div>

      <a href="/hire" className="scroll-down">
        <span className="mouse">
          <span></span>
        </span>
        Hire me for your project
      </a>
    </section>
  );
}

export default Home;