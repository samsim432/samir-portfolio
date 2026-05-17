import "./Home.css";

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
          <p className="home-badge">Personal Portfolio & What If Stories</p>

          <h1>
            Hi, I am <span>Samir Simkhada</span>
          </h1>

          <h2 className="typing-text">
            What If Writer • Science Explainer • Knowledge Creator
          </h2>

          <p className="home-text">
            I create interesting “What If” stories, educational explanations,
            and knowledge-based content about science, history, imagination,
            space, AI, technology, and real-world possibilities.
          </p>

          <p className="home-cta-text">
            Start exploring impossible questions with real explanations.
          </p>

          <div className="topic-chips">
            <span>Science</span>
            <span>History</span>
            <span>Space</span>
            <span>Future</span>
            <span>Imagination</span>
            <span>Real World</span>
          </div>

          <div className="home-buttons">
            <a href="#whatif" className="home-btn primary">
              Explore What If
            </a>

            <a href="#articles" className="home-btn secondary">
              Read Articles
            </a>
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
              <span>Stories</span>
            </div>

            <div className="stat-card">
              <strong>Science</strong>
              <span>Space • AI • Robot • Tech</span>
            </div>

            <div className="stat-card">
              <strong>Educational</strong>
              <span>Content</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#whatif" className="scroll-down">
        <span className="mouse">
          <span></span>
        </span>
        Scroll to explore
      </a>
    </section>
  );
}

export default Home;