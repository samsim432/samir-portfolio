import { Link, Navigate, useParams } from "react-router-dom";
import stacksData from "../data/stacksData";
import "./StackDetail.css";

function StackDetail() {
  const { slug } = useParams();

  const stack = stacksData.find(
    (item) => item.slug === slug
  );

  if (!stack) {
    return <Navigate to="/stack" replace />;
  }

  return (
    <main className="stack-detail-page">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="stack-detail-hero">
        <div className="stack-detail-container">
          <Link
            to="/stack"
            className="stack-detail-back"
          >
            <span>←</span>
            All Stacks
          </Link>

          <div className="stack-detail-hero-grid">
            <div className="stack-detail-main">
              <div className="stack-detail-icon">
                {stack.icon}
              </div>

              <span className="stack-detail-category">
                {stack.category}
              </span>

              <h1>{stack.title}</h1>

              <p className="stack-detail-description">
                {stack.description}
              </p>

              <div className="stack-detail-technologies">
                {stack.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <aside className="stack-summary-card">
              <div className="stack-summary-item">
                <span>Difficulty</span>
                <strong>{stack.level}</strong>
              </div>

              <div className="stack-summary-item">
                <span>Roadmap</span>
                <strong>
                  {stack.roadmap.length} stages
                </strong>
              </div>

              <div className="stack-summary-item">
                <span>Projects</span>
                <strong>
                  {stack.projects.length} projects
                </strong>
              </div>

              <div className="stack-summary-item">
                <span>Career Path</span>
                <strong>
                  {stack.shortTitle}
                </strong>
              </div>
            </aside>
          </div>
        </div>
      </section>


      {/* =================================================
          PREREQUISITES
      ================================================= */}

      {stack.prerequisites?.length > 0 && (
        <section className="stack-prerequisites">
          <div className="stack-detail-container">
            <div className="stack-section-heading">
              <span>Before you start</span>

              <h2>Prerequisites</h2>

              <p>
                You do not need to master everything here first.
                These are the basics that will make the roadmap
                easier to follow.
              </p>
            </div>

            <div className="prerequisite-grid">
              {stack.prerequisites.map(
                (prerequisite, index) => (
                  <article
                    className="prerequisite-card"
                    key={prerequisite}
                  >
                    <span className="prerequisite-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{prerequisite}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>
      )}


      {/* =================================================
          ROADMAP
      ================================================= */}

      <section className="roadmap-section">
        <div className="stack-detail-container">
          <div className="stack-section-heading">
            <span>Step-by-step</span>

            <h2>Learning Roadmap</h2>

            <p>
              Follow the stages in order. Learn the concepts,
              practice them with small exercises, then build
              projects before moving to the next stage.
            </p>
          </div>

          <div className="roadmap-list">
            {stack.roadmap.map((item) => (
              <article
                className="roadmap-item"
                key={item.step}
              >
                <div className="roadmap-rail">
                  <div className="roadmap-step">
                    {String(item.step).padStart(2, "0")}
                  </div>
                </div>

                <div className="roadmap-content">
                  <div className="roadmap-content-header">
                    <span>
                      Stage {item.step}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  <div className="roadmap-detail-grid">
                    <div className="roadmap-block">
                      <h4>What to learn</h4>

                      <div className="roadmap-topics">
                        {item.topics.map((topic) => (
                          <div key={topic}>
                            <span>✓</span>
                            <p>{topic}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="roadmap-block">
                      <h4>Tools to use</h4>

                      <div className="roadmap-tools">
                        {item.tools.map((tool) => (
                          <span key={tool}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

      <section className="stack-projects">
        <div className="stack-detail-container">
          <div className="stack-section-heading">
            <span>Practice</span>

            <h2>Projects to Build</h2>

            <p>
              Projects are where the roadmap becomes real.
              Build them yourself instead of copying a full
              tutorial from beginning to end.
            </p>
          </div>

          <div className="stack-project-grid">
            {stack.projects.map((project, index) => (
              <article
                className="stack-project-card"
                key={project}
              >
                <div className="stack-project-top">
                  <span className="stack-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="stack-project-arrow">
                    ↗
                  </span>
                </div>

                <h3>{project}</h3>

                <p>
                  Use the technologies from this roadmap and
                  build this project independently.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =================================================
          NEXT PATH
      ================================================= */}

      <section className="stack-next-section">
        <div className="stack-detail-container">
          <div className="stack-next-card">
            <div>
              <span>Keep exploring</span>

              <h2>
                Explore another developer roadmap
              </h2>

              <p>
                Compare different career paths and find the
                stack that matches your goals.
              </p>
            </div>

            <Link to="/stack">
              Browse all stacks
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StackDetail;