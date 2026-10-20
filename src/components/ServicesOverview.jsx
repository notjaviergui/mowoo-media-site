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
      "Turn audience insights and relevant trends into content with a clear purpose. From the first hook to the final edit, we help you show up with something worth watching.",
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
    title: "A presence that keeps growing.",
    label: "Account & content management",
    description:
      "Keep your content moving with a clear calendar, thoughtful publishing, and ongoing review. We make consistency easier and use what we learn to shape what comes next.",
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
    title: "More time for what matters.",
    label: "AI agents & automation",
    description:
      "Support the attention your content creates. We design agents and workflows around your customer inquiries, lead handoffs, and everyday operations.",
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
          <h2>
            One partner.
            <br />
            Your next stage of growth.
          </h2>
        </div>
        <p>
          Content leads the way. Consistent management keeps it moving.
          Automation helps you go further.
        </p>
      </div>
      <div className="growth-plan">
        <div className="plan-header">
          <p className="eyebrow">A little strategy. A lot of possibility.</p>
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
        <p className="plan-instruction">
          Three connected steps. One clear direction.
          <span aria-hidden="true">Scroll to follow the plan ↓</span>
        </p>
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
                <p className="plan-outcome">{service.outcome}</p>
                <Link
                  className="text-link"
                  to={full ? "/book-demo" : `/services#${service.id}`}
                >
                  {full ? "Let’s talk about it" : "Explore the service"}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
        <div className="plan-footer">
          <span>Research → Create → Refine → Grow</span>
          <span>
            Built around your business. <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </section>
  );
}
