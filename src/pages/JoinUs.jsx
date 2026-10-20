import React from "react";
export default function JoinUs() {
  return (
    <>
      <section className="page-intro section-shell">
        <p className="eyebrow">Create with us</p>
        <h1>
          Good people.
          <br />
          <span>Good momentum.</span>
        </h1>
        <p>
          We’d love to hear from creative strategists, writers, and video
          editors who care about purposeful content.
        </p>
      </section>
      <section className="careers-section section-shell">
        <h2>Introduce yourself.</h2>
        <p>
          Share your portfolio, the work you enjoy, and how you’d like to
          collaborate. We’ll be in touch if there’s a fit. This is an expression
          of interest, not a listing of current vacancies.
        </p>
        <a
          className="button button-dark"
          href="mailto:hello@moowomedia.com?subject=Creative%20collaboration"
        >
          Share your work ↗
        </a>
      </section>
    </>
  );
}
