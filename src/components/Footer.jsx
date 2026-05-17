import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <a href="/" className="footer-logo">
            <img src="/profile.jpg" alt="Samir Simkhada" />

            <div>
              <h3>Samir Simkhada</h3>
              <p>Science Storytelling Creator</p>
            </div>
          </a>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/simkhadasamir333/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/@Samirsimkhada0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a
              href="https://www.tiktok.com/@samir.simkhada0?_r=1&_t=ZN-96REvfztlPK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>

            <a
              href="https://www.facebook.com/samir.simkhada.3o"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="https://www.buymeacoffee.com/samirsim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Me A Coffee"
            >
              <i className="fa-solid fa-mug-hot"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Samir Simkhada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;