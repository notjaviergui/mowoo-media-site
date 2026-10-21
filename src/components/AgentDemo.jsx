import React, { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../config/site";
const scenarios = [
  {
    label: "Answer an inquiry",
    question: "What can Moowo help my business with?",
    answer:
      "We help with content creation, account management, and AI automation. What would you like to improve first?",
    action: "Understand the need → Guide the next step",
  },
  {
    label: "Qualify a lead",
    question: "I need help staying consistent on social.",
    answer:
      "We can help plan and manage your content. Which channels do you use?",
    action: "Gather context → Prepare a useful handoff",
  },
  {
    label: "Arrange a handoff",
    question: "Can I speak with someone about a project?",
    answer: "Share your goals in the demo form. Our team will follow up.",
    action: "Capture the request → Connect with the team",
  },
];
export default function AgentDemo() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];
  const voiceLive = site.agentPhone && site.voiceVerified;
  const smsLive = site.agentPhone && site.smsVerified;
  return (
    <section className="agent-section section-shell" id="agent-demo">
      <div className="agent-copy">
        <p className="eyebrow">Try it yourself</p>
        <h2>Meet Mia, your AI sales assistant.</h2>
        <p>
          Call Mia to see how an agent answers questions and qualifies leads.
        </p>
        {voiceLive ? (
          <a href={`tel:${site.agentPhone}`} className="button button-lime">
            Call Mia, our AI assistant <span aria-hidden="true">↗</span>
          </a>
        ) : site.agentDemoUrl ? (
          <a
            href={site.agentDemoUrl}
            className="button button-lime"
            target="_blank"
            rel="noreferrer"
          >
            Try the live AI demo <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <Link to="/book-demo" className="button button-lime">
            Explore an agent demo <span aria-hidden="true">↗</span>
          </Link>
        )}
        {voiceLive && site.agentDemoUrl && (
          <a
            className="text-link agent-web-link"
            href={site.agentDemoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Or try the browser demo ↗
          </a>
        )}
        {site.agentDemoUrl && (
          <p className="agent-demo-note">Browser demo opens in ElevenLabs.</p>
        )}
        <p className="agent-availability">
          {voiceLive || smsLive || site.agentDemoUrl
            ? "Please use sample details in the demo."
            : "Request a demo to explore an agent for your business."}
        </p>
        {(voiceLive || smsLive) && (
          <div className="button-row">
            {smsLive && (
              <a className="text-link" href={`sms:${site.agentPhone}`}>
                Text the AI demo ↗
              </a>
            )}
            <span>
              {site.agentPhone === "+17864630490"
                ? "(786) 463-0490"
                : site.agentPhone}
            </span>
          </div>
        )}
      </div>
      <div className="conversation-panel">
        <div className="conversation-heading">
          <span className="status-dot" />
          <strong>See an example</strong>
          <span className="sample-badge">Scripted preview</span>
        </div>
        <div
          className="scenario-buttons"
          aria-label="Choose a conversation example"
        >
          {scenarios.map((item, index) => (
            <button
              key={item.label}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="conversation" aria-live="polite">
          <div className="chat-bubble visitor">
            <span>Visitor</span>
            <p>{scenario.question}</p>
          </div>
          <div className="chat-bubble agent">
            <span>
              <span aria-hidden="true">✳ </span>Moowo agent · example
            </span>
            <p>{scenario.answer}</p>
          </div>
          <p className="conversation-action">{scenario.action}</p>
        </div>
        <p className="preview-caption">
          Scripted example — use the call button to talk to Mia.
        </p>
      </div>
    </section>
  );
}
