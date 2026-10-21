import React from "react";
import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="cta-section section-shell">
      <p className="eyebrow">Let’s talk</p>
      <h2>
        Ready to <span>grow?</span>
      </h2>
      <div className="cta-bottom">
        <p>Tell us what you need. We’ll help you find the next step.</p>
        <Link to="/book-demo" className="button button-dark">
          Book a demo <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
