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
            I create educational articles and explanations about artificial
            intelligence, science, space, technology, history, and future ideas.
            My goal is to make complex topics simple, useful, and interesting
            for students, curious readers, and knowledge lovers.
          </p>

          <p className="home-text">
            On this website, you will find easy-to-read articles, What If
            stories, AI explainers, science concepts, space topics, and digital
            learning resources written in clear language.
          </p>

          <p className="home-cta-text">
            Explore original educational content designed to make learning easier.
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
            <Button href="#articles" variant="primary">
              Read Articles
            </Button>

            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </div>

          <div className="trust-box">
            <h2>Why trust this website?</h2>
            <ul>
              <li>Original educational articles written in simple language</li>
              <li>Topics focused on AI, science, space, and technology</li>
              <li>Clear explanations for students and curious readers</li>
              <li>Regularly updated with new knowledge-based content</li>
            </ul>
          </div>

          <div className="social-links">
            <a href="https://www.youtube.com/@Samirsimkhada0" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://www.instagram.com/simkhadasamir333/?hl=en" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/samir.simkhada.3o" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.tiktok.com/@samir.simkhada0?_r=1&_t=ZN-96REvfztlPK" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
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
              <strong>Topics</strong>
              <span>AI • Science • Space • Tech</span>
            </div>

            <div className="stat-card">
              <strong>Purpose</strong>
              <span>Simple Learning for Everyone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;