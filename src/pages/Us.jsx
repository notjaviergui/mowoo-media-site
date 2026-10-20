import React from "react";
import ProcessSteps from "../components/ProcessSteps";
import CTA from "../components/CTA";
export default function Us() {
  return (
    <>
      <section className="page-intro section-shell">
        <p className="eyebrow">The Moowo approach</p>
        <h1>
          A creative partner.
          <br />
          <span>A clear way forward.</span>
        </h1>
        <p>
          We connect content strategy, hands-on creation, and consistent
          management, with automation where it makes the work easier.
        </p>
      </section>
      <section className="approach-note section-shell">
        <span className="large-asterisk" aria-hidden="true">
          ✳
        </span>
        <div>
          <h2>
            Good work starts
            <br />
            with understanding.
          </h2>
          <p>
            Your audience, your expertise, and your business goals shape the
            plan. We research relevant trends, build tailored scripts, and work
            with you to create content that feels like your brand.
          </p>
          <p>
            We set priorities together, review content before publishing, and
            use performance signals to guide the next round. No promises of
            overnight growth. Just purposeful creative and a process you can
            follow.
          </p>
        </div>
      </section>
      <ProcessSteps />
      <CTA />
    </>
  );
}
