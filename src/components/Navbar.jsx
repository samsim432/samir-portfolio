import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef(null);

  const links = [
    ["home", "Home", "/#home"],
    ["articles", "Articles", "/articles"],
    ["stack", "Stack", "/stack"],
    ["about", "About", "/about"],
    ["contact", "Contact", "/#contact"],
    ["quiz", "Quiz", "/quiz"],
  ];

  const getActivePage = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path === "/articles" || path.startsWith("/articles/")) {
      return "articles";
    }

    if (path === "/stack" || path.startsWith("/stack/")) {
      return "stack";
    }

    if (path === "/about") {
      return "about";
    }

    if (path === "/quiz") {
      return "quiz";
    }

    if (path === "/" && hash === "#contact") {
      return "contact";
    }

    return "home";
  };

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(getActivePage);

  /* =========================================
     SCROLL
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Only detect homepage sections on homepage
      if (window.location.pathname !== "/") {
        return;
      }

      const sections = ["home", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActive(id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     HASH CHANGE
  ========================================= */

  useEffect(() => {
    const handleHashChange = () => {
      setActive(getActivePage());
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  /* =========================================
     CLOSE MENU OUTSIDE / ESC
  ========================================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  /* =========================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================= */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================
     NAVIGATION
  ========================================= */

  const handleLinkClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header
      className={`navbar-wrap ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <nav
        ref={navRef}
        className="navbar"
        aria-label="Main navigation"
      >
        {/* LOGO */}

        <a
          href="/#home"
          className="logo"
          onClick={() => {
            setActive("home");
            setOpen(false);
          }}
          aria-label="Samir Simkhada homepage"
        >
          <span className="logo-full">
            Samir Simkhada
          </span>

          <img
            src="/profile.webp"
            alt="Samir Simkhada"
            className="logo-profile"
          />
        </a>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className={`menu-btn ${
            open ? "open" : ""
          }`}
          onClick={() =>
            setOpen((previous) => !previous)
          }
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION LINKS */}

        <div
          id="main-navigation"
          className={`nav-menu ${
            open ? "show" : ""
          }`}
        >
          {links.map(([id, label, href]) => (
            <a
              key={id}
              href={href}
              onClick={() =>
                handleLinkClick(id)
              }
              className={
                active === id ? "active" : ""
              }
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE OVERLAY */}

      <div
        className={`nav-overlay ${
          open ? "show" : ""
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}

export default Navbar;