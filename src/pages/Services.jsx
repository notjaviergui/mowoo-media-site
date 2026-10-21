import React from "react";
import ServicesOverview from "../components/ServicesOverview";
import AgentDemo from "../components/AgentDemo";
import CTA from "../components/CTA";
export function SupportingServices() {
  return (
    <section className="supporting-section section-shell">
      <div>
        <p className="eyebrow">More ways we can help</p>
        <h2>Support for your next step.</h2>
        <p>Bring these into the plan when they serve your goals.</p>
      </div>
      <div className="supporting-list">
        {[
          [
            "Ad creative & AI-assisted production",
            "Turn strong content concepts into paid creative. Explore AI-assisted variations alongside filmed content, with human review and testing before scaling.",
          ],
          [
            "Websites & landing pages",
            "Give visitors a clear destination, with focused messaging, thoughtful design, and a practical path to inquire.",
          ],
          [
            "Retention & brand identity",
            "Keep your brand recognizable and continue the conversation through useful follow-up and consistent creative.",
          ],
        ].map(([title, text]) => (
          <details key={title}>
            <summary>
              {title}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{text}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export default function Services() {
  return (
    <>
      <section className="page-intro section-shell">
        <p className="eyebrow">Built around your business</p>
        <h1>
          Content is the start.
          <br />
          <span>Growth is the direction.</span>
        </h1>
        <p>
          Start with the support you need today. Build a connected approach as
          your business grows.
        </p>
      </section>
      <ServicesOverview full />
      <SupportingServices />
      <AgentDemo />
      <CTA />
    </>
  );
}
