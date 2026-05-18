import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <section className="privacy-page">

      <div className="privacy-hero">
        <span className="privacy-badge">Privacy & Data Protection</span>

        <h1>Privacy Policy</h1>

        <p>
          Your privacy matters. This page explains how information is collected,
          used, and protected while using the Samir Simkhada website and its
          educational content.
        </p>

        <small>Last updated: May 18, 2026</small>
      </div>

      <div className="privacy-container">

        <div className="privacy-card">
          <h2>Introduction</h2>

          <p>
            This website provides educational articles, science storytelling,
            What If scenarios, and informational content related to science,
            technology, history, space, artificial intelligence, and future
            ideas.
          </p>

          <p>
            By using this website, you agree to the terms outlined in this
            Privacy Policy.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Information We Collect</h2>

          <p>
            When visitors contact us through forms or email, basic information
            such as name, email address, and message details may be collected.
          </p>

          <p>
            This information is used only for communication, responding to
            inquiries, and improving the website experience.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Cookies</h2>

          <p>
            This website may use cookies and similar technologies to improve
            user experience, remember preferences, analyze traffic, and support
            advertising services.
          </p>

          <p>
            Cookies help understand how visitors interact with the website and
            allow certain website features to function properly.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Google AdSense & Advertising</h2>

          <p>
            Third-party vendors, including Google, may use cookies to serve ads
            based on previous visits to this website or other websites.
          </p>

          <p>
            Google’s advertising cookies help display more relevant ads to
            users. Visitors can learn more about personalized advertising by
            visiting Google Ads Settings.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Analytics</h2>

          <p>
            Analytics tools may be used to understand website traffic, visitor
            behavior, and content performance. This information helps improve
            articles, educational resources, and overall website quality.
          </p>
        </div>

        <div className="privacy-card">
          <h2>External Links</h2>

          <p>
            Some pages may contain links to external websites or social media
            platforms. This website is not responsible for the privacy practices
            or content of third-party websites.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Data Protection</h2>

          <p>
            Reasonable steps are taken to protect visitor information and
            maintain website security. However, no internet transmission or
            storage system can be guaranteed to be 100% secure.
          </p>
        </div>

        <div className="privacy-card">
          <h2>Contact</h2>

          <p>
            If you have questions regarding this Privacy Policy or your data,
            please contact through the Contact page available on this website.
          </p>
        </div>

      </div>
    </section>
  );
}

export default PrivacyPolicy;