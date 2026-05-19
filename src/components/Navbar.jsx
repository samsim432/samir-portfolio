import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    ["home", "Home", "/#home"],
    ["articles", "Articles", "/articles"],
    ["shop", "Shop", "/shop"],
    ["about", "About", "/about"],
    ["contact", "Contact", "/#contact"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      links.forEach(([id]) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 130;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <a href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-full">
            <strong>Samir</strong> Simkhada
          </span>

          <img
            src="/profile.jpg"
            alt="Samir Simkhada"
            className="logo-profile"
          />
        </a>

        <button
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${open ? "show" : ""}`}>
          {links.map(([id, label, href]) => (
            <a
              key={id}
              href={href}
              onClick={() => setOpen(false)}
              className={active === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;