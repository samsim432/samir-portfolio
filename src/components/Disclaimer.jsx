import "./PrivacyPolicy.css";

function Disclaimer() {
  return (
    <section className="privacy-page">
      <div className="privacy-hero">
        <span className="privacy-badge">Website Disclaimer</span>

        <h1>Disclaimer</h1>

        <p>
          The information published on samirsimkhada.com.np is intended for
          educational and informational purposes only.
        </p>

        <small>Last Updated: July 2026</small>
      </div>

      <div className="privacy-container">

        <div className="privacy-card">
          <h2>Educational Purpose</h2>

          <p>
            The articles on this website explain topics related to artificial
            intelligence, science, technology, space, and future concepts in a
            simplified way to help readers learn and understand complex ideas.
          </p>
        </div>

        <div className="privacy-card">
          <h2>No Professional Advice</h2>

          <p>
            Nothing on this website should be considered legal, medical,
            financial, investment, engineering, or professional advice.
            Readers should always consult qualified professionals when making
            important decisions.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Accuracy of Information</h2>

          <p>
            We work hard to publish accurate and well-researched content.
            However, technology and scientific knowledge change over time,
            therefore we cannot guarantee that every article will always remain
            completely up to date.
          </p>
        </div>

        <div className="privacy-card">
          <h2>External Links</h2>

          <p>
            Some articles may contain links to third-party websites for
            additional information. We are not responsible for the content,
            privacy practices, or availability of those websites.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Advertisements</h2>

          <p>
            This website may display advertisements through Google AdSense or
            other advertising partners. Advertisements do not influence the
            editorial opinions or educational content published on this website.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Contact</h2>

          <p>
            If you have any questions regarding this disclaimer, please contact:
          </p>

          <p>
            <strong>Email:</strong> wrongsamir88@gmail.com
          </p>
        </div>

      </div>
    </section>
  );
}

export default Disclaimer;