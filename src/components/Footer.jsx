import "./Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebookF,
  FaMugHot,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <a href="/" className="footer-logo">
            <img src="/profile.webp" alt="Samir Simkhada" />

            <div>
              <h3>Samir Simkhada</h3>
              <p>Science Storytelling Creator</p>
            </div>
          </a>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/articles">Articles</a>
            <a href="/about">About</a>
            <a href="/#contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>

          <div className="footer-social-section">
            <h4>Follow Me</h4>

            <div className="footer-socials">
              <a href="https://www.instagram.com/simkhadasamir333/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="https://www.youtube.com/@Samirsimkhada0" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>

              <a href="https://www.tiktok.com/@samir.simkhada0?_r=1&_t=ZN-96REvfztlPK" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>

              <a href="https://www.facebook.com/samir.simkhada.3o" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="https://www.buymeacoffee.com/samirsim" target="_blank" rel="noopener noreferrer" aria-label="Buy Me A Coffee">
                <FaMugHot />
              </a>
            </div>
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