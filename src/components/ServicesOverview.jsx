import React from "react";
import { Link } from "react-router-dom";
import useScrollPlan from "./useScrollPlan";
import GrowthCake from "./GrowthCake";
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
    title: "Plan, publish, improve.",
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
const growthSteps = [
  {
    id: "research",
    title: "Find what works in your niche.",
    items: [
      "Research your audience and competitors.",
      "Find trends and content worth building on.",
    ],
  },
  {
    id: "create",
    title: "Create and publish.",
    items: [
      "Turn ideas into scripts, videos, and posts.",
      "Plan your calendar and manage publishing.",
    ],
  },
  {
    id: "refine",
    title: "Analyze. Reassess. Improve.",
    items: [
      "Review reach, engagement, and inquiries.",
      "Use the results to refine the next round.",
    ],
  },
  {
    id: "automate",
    title: "Automate the follow-up.",
    items: [
      "Answer common questions with AI agents.",
      "Qualify inquiries and route leads to your team.",
    ],
  },
  {
    id: "grow",
    title: "Build on what works.",
    items: [
      "Focus on the content that performs.",
      "Expand the plan as your business grows.",
    ],
  },
];
export default function ServicesOverview({ full = false }) {
  const planRef = useScrollPlan();
  const steps = full ? services : growthSteps;
  return (
    <section className="services-section section-shell" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Create. Manage. Grow.</h2>
        </div>
      </div>
      <div className={`growth-plan ${!full ? "cake-plan" : ""}`}>
        <div className="plan-header">
          <p className="eyebrow">Your growth plan</p>
          <span className="plan-edition">
            THE GROWTH PLAN / 01—{String(steps.length).padStart(2, "0")}
          </span>
        </div>
        <div className="plan-intro">
          <h3>
            Growth, built
            <br />
            layer by layer.
          </h3>
          {full && (
            <span className="plan-flower" aria-hidden="true">
              ✳
            </span>
          )}
        </div>
        <div className={full ? undefined : "cake-journey"}>
          {!full && (
            <div className="cake-stage" aria-hidden="true">
              <GrowthCake />
              <div className="cake-stage-caption">
                <span>THE MOOWO METHOD</span>
                <span>Built to grow.</span>
              </div>
            </div>
          )}
          <ol className="plan-steps" ref={planRef}>
            <li className="plan-rail" aria-hidden="true">
              <span />
            </li>
            {steps.map((service, index) => (
              <li
                className="plan-step"
                key={service.id}
                id={service.id}
                data-plan-step
              >
                <span className="plan-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="plan-step-copy">
                  {full && <p className="eyebrow">{service.label}</p>}
                  <h3>{service.title}</h3>
                  {full && (
                    <p className="plan-description">{service.description}</p>
                  )}
                  <ul className={full ? "plan-deliverables" : "plan-bullets"}>
                    {service.items.map((item) => (
                      <li key={item} data-plan-reveal={!full || undefined}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {full && <p className="plan-outcome">{service.outcome}</p>}
                  {full && (
                    <Link
                      className="text-link"
                      to={full ? "/book-demo" : `/services#${service.id}`}
                    >
                      {full ? "Let’s talk about it" : "Learn more"}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
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
