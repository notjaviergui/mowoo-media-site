import React from "react";
import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="cta-section section-shell">
      <p className="eyebrow">Your next move</p>
      <h2>
        Let’s turn attention
        <br />
        into <span>opportunity.</span>
      </h2>
      <div className="cta-bottom">
        <p>
          Tell us where you want to go.
          <br />
          We’ll explore how to get there, together.
        </p>
        <Link to="/book-demo" className="button button-dark">
          Book a demo <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
