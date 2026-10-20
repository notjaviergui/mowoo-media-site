import React from "react";
const steps = [
  [
    "Listen & research",
    "We get to know your business, audience, and goals, then look for relevant content opportunities.",
  ],
  [
    "Create & publish",
    "We turn the strategy into scripts and creative, with your approval before content goes live.",
  ],
  [
    "Learn & refine",
    "We review reach, engagement, and inquiries to improve the next round of content.",
  ],
  [
    "Connect & scale",
    "When the foundation is ready, we connect workflows that help your team manage demand.",
  ],
];
export default function ProcessSteps() {
  return (
    <section className="process-section section-shell" id="process">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The way forward</p>
          <h2>
            Clear direction.
            <br />
            At every step.
          </h2>
        </div>
        <p>
          You bring the expertise. We bring the strategy, creative, and systems
          to help more people discover it.
        </p>
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
