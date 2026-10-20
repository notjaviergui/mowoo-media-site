import React from "react";
export default function ClientsPortal() {
  return (
    <section className="page-intro section-shell">
      <p className="eyebrow">For our clients</p>
      <h1>
        Your next step,
        <br />
        <span>taken care of.</span>
      </h1>
      <p>
        The self-service portal is not available yet. For project updates,
        content approvals, or access to your files, reach out to the Moowo team.
      </p>
      <a
        className="button button-dark"
        href="mailto:hello@moowomedia.com?subject=Client%20support"
      >
        Contact your team ↗
      </a>
    </section>
  );
}
