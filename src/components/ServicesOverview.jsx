import React from "react";
import { Link } from "react-router-dom";
import useScrollPlan from "./useScrollPlan";
export const services = [
  {
    id: "content",
    number: "01",
    title: "Content that earns attention.",
    label: "Performance content creation",
    description:
      "We find relevant trends, write scripts, and create content for your audience.",
    items: [
      "Trend & audience research",
      "Tailored scripts & creative strategy",
      "Filming, editing & creative testing",
    ],
    outcome: "Built for reach, engagement, and visibility.",
  },
  {
    id: "management",
    number: "02",
    title: "Show up consistently.",
    label: "Account & content management",
    description:
      "We plan, publish, and improve your content so you can stay consistent.",
    items: [
      "Content calendars & publishing",
      "Account coordination",
      "Reporting & ongoing optimization",
    ],
    outcome: "A consistent presence. A clearer next step.",
  },
  {
    id: "automation",
    number: "03",
    title: "Save time with automation.",
    label: "AI agents & automation",
    description:
      "AI agents answer questions, qualify leads, and handle routine tasks.",
    items: [
      "Voice & messaging agent design",
      "Lead qualification & routing",
      "Connected business workflows",
    ],
    outcome: "Less manual follow-up. More room to scale.",
  },
];
export default function ServicesOverview({ full = false }) {
  const planRef = useScrollPlan();
  return (
    <section className="services-section section-shell" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Create. Manage. Grow.</h2>
        </div>
      </div>
      <div className="growth-plan">
        <div className="plan-header">
          <p className="eyebrow">Your growth plan</p>
          <span className="plan-edition">THE GROWTH PLAN / 01—03</span>
        </div>
        <div className="plan-intro">
          <h3>
            Great growth
            <br />
            starts with a plan.
          </h3>
          <span className="plan-flower" aria-hidden="true">
            ✳
          </span>
        </div>
        <ol className="plan-steps" ref={planRef}>
          <li className="plan-rail" aria-hidden="true">
            <span />
          </li>
          {services.map((service) => (
            <li
              className="plan-step"
              key={service.id}
              id={service.id}
              data-plan-step
            >
              <span className="plan-marker" aria-hidden="true">
                {service.number}
              </span>
              <div className="plan-step-copy">
                <p className="eyebrow">{service.label}</p>
                <h3>{service.title}</h3>
                <p className="plan-description">{service.description}</p>
                {full && (
                  <ul className="plan-deliverables">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {full && <p className="plan-outcome">{service.outcome}</p>}
                <Link
                  className="text-link"
                  to={full ? "/book-demo" : `/services#${service.id}`}
                >
                  {full ? "Let’s talk about it" : "Learn more"}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
        <div className="plan-footer">
          <span>Built around your business.</span>
          <span>
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </section>
  );
}
