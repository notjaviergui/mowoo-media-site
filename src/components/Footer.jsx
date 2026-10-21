import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="wordmark">
            moowo<small>MEDIA</small>
          </Link>
          <p>
            Good content. Clear direction.
            <br />
            Room to grow.
          </p>
        </div>
        <nav aria-label="Explore">
          <span className="eyebrow">Explore</span>
          <Link to="/services">Services</Link>
          <Link to="/pages/clients">Our work</Link>
          <Link to="/pages/us">Our approach</Link>
          <Link to="/book-demo">Book a demo</Link>
        </nav>
        <nav aria-label="More from Moowo">
          <span className="eyebrow">Stay connected</span>
          <Link to="/pages/newsletter">The Moowo Memo</Link>
          <Link to="/pages/join-us">Join us</Link>
          <Link to="/pages/clients-portal">Client support</Link>
          <a
            href="https://instagram.com/moowomedia"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </nav>
        <div>
          <span className="eyebrow">Start a conversation</span>
          <a className="footer-email" href="mailto:hello@moowomedia.com">
            hello@moowomedia.com ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Moowo Media</span>
        <span>Content first. Performance always.</span>
      </div>
    </footer>
  );
}
