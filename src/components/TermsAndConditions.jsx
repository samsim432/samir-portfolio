import "./PrivacyPolicy.css";

function TermsAndConditions() {
  return (
    <section className="privacy-page">
      <div className="privacy-hero">
        <span className="privacy-badge">Website Terms</span>
        <h1>Terms & Conditions</h1>
        <p>These terms explain how visitors may use samirsimkhada.com.np.</p>
        <small>Last Updated: July 2026</small>
      </div>

      <div className="privacy-container">
        <div className="privacy-card">
          <h2>Use of This Website</h2>
          <p>
            Samir Simkhada publishes educational content about science,
            artificial intelligence, technology, space, and future ideas.
            By using this website, you agree to use it responsibly and legally.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Educational Content</h2>
          <p>
            Content on this website is for general educational and informational
            purposes only. It should not be treated as professional, financial,
            legal, medical, or technical advice.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Intellectual Property</h2>
          <p>
            Articles, images, layout, branding, and written content belong to
            Samir Simkhada unless otherwise stated. You may share links to our
            pages, but copying full content without permission is not allowed.
          </p>
        </div>

        <div className="privacy-card">
          <h2>External Links</h2>
          <p>
            This website may link to third-party websites. We are not
            responsible for their content, security, or privacy practices.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact:
            <br />
            <strong>Email:</strong> wrongsamir88@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions;