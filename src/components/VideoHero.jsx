import React from "react";
import { Link } from "react-router-dom";
export default function VideoHero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Your next chapter starts here
        </p>
        <h1>
          Make content.
          <br />
          Build momentum.
          <br />
          <span className="accent-underline">Grow with purpose.</span>
        </h1>
        <p className="hero-description">
          A performance agency for brands ready to move forward. We create the
          content, manage the presence, and build the automations that support
          your growth.
        </p>
        <div className="button-row">
          <Link className="button button-dark" to="/book-demo">
            Book a demo <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" to="/pages/clients">
            Explore our work <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <p className="hero-footnote">
          Strategy-led. Creatively driven. Built around your business.
        </p>
      </div>
      <div
        className="hero-art"
        aria-label="Creative content and planning examples"
      >
        <div className="art-grid" aria-hidden="true" />
        <div className="creative-frame">
          <img
            src="/images/inopera-creative.webp"
            alt="Inopera headphones, photographed on a wooden desk"
            fetchPriority="high"
            width="700"
            height="700"
          />
          <div className="creative-topline">
            <span>INOPERA</span>
            <span>CREATIVE / 01</span>
          </div>
          <div className="creative-caption">
            Sound on.
            <br />
            World off.<span>Product storytelling / Creative direction</span>
          </div>
        </div>
        <div className="planning-note">
          <span className="eyebrow">
            A little strategy. A lot of possibility.
          </span>
          <strong>
            Great content
            <br />
            starts with a plan.
          </strong>
          <div className="note-progress">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="note-bottom">
            <span>Research → Create → Refine</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
        <div className="art-stamp" aria-hidden="true">
          Made to
          <br />
          <strong>move you.</strong>
          <span>✳</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>CREATIVE THINKING. MEASURABLE DIRECTION.</span>
        <a href="#services">
          Discover the approach <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
