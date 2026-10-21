import React from "react";
const steps = [
  ["Listen & research", "We learn your goals and find content opportunities."],
  [
    "Create & publish",
    "We create the content. You approve it before publishing.",
  ],
  ["Learn & refine", "We review results and improve the next round."],
  ["Connect & scale", "We add automation where it saves your team time."],
];
export default function ProcessSteps() {
  return (
    <section className="process-section section-shell" id="process">
      <div className="section-heading">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>A clear next step.</h2>
        </div>
      </div>
      <ol className="process-grid">
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span className="step-index">
              0{index + 1}
              <span aria-hidden="true">↗</span>
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
