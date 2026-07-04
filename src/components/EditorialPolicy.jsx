import "./PrivacyPolicy.css";

function EditorialPolicy() {
  return (
    <section className="privacy-page">
      <div className="privacy-hero">
        <span className="privacy-badge">Editorial Standards</span>
        <h1>Editorial Policy</h1>
        <p>How content is researched, written, reviewed, and updated on samirsimkhada.com.np.</p>
        <small>Last Updated: July 2026</small>
      </div>

      <div className="privacy-container">
        <div className="privacy-card">
          <h2>Our Content Focus</h2>
          <p>
            Samir Simkhada publishes educational explanations about science,
            artificial intelligence, technology, space, and future ideas for
            general readers, students, and curious learners.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Research Process</h2>
          <p>
            Articles are written using publicly available educational sources,
            scientific explanations, technology documentation, trusted news
            sources, and personal research. The goal is to explain complex
            topics in simple and understandable language.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Accuracy and Updates</h2>
          <p>
            We aim to keep information accurate at the time of publication.
            Since science and technology change quickly, older articles may be
            reviewed and updated when new reliable information becomes available.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Original Writing</h2>
          <p>
            Articles are written in an original explanatory style. We avoid
            copying full content from other websites and aim to add clear
            explanations, examples, and educational value for readers.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Corrections</h2>
          <p>
            If a reader notices an error, unclear explanation, outdated
            information, or missing context, they can contact us and we may
            correct or update the article after review.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Contact</h2>
          <p>
            For corrections or editorial questions, contact:
            <br />
            <strong>Email:</strong> wrongsamir88@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default EditorialPolicy;