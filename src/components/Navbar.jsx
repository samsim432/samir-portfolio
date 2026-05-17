import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    ["home", "Home"],
    ["whatif", "What If"],
    ["articles", "Articles"],
    ["contact", "Contact"],
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

        {/* LOGO + PROFILE */}
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

        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION */}
        <div className={`nav-menu ${open ? "show" : ""}`}>
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`/#${id}`}
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