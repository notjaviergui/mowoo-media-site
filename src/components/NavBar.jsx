import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  const location = useLocation();
  const menuButton = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const resized = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resized);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resized);
    };
  }, [open]);
  const items = [
    ["Services", "/services"],
    ["Our work", "/pages/clients"],
    ["Our approach", "/pages/us"],
  ];
  return (
    <header
      ref={header}
      className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}
    >
      <Link to="/" className="wordmark" aria-label="Moowo Media home">
        MOOWO<span className="brand-dot">®</span>
        <small>Media</small>
      </Link>
      <button
        ref={menuButton}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="primary-navigation"
        className={`primary-nav ${open ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {items.map(([label, to]) => (
          <Link
            key={to}
            to={to}
            aria-current={location.pathname === to ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
        <Link to="/book-demo" className="button button-dark nav-cta">
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
