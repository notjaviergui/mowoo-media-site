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
      "We can explore a content plan and ongoing management. Which channels are you using, and what does a successful month look like for you?",
    action: "Gather context → Prepare a useful handoff",
  },
  {
    label: "Arrange a handoff",
    question: "Can I speak with someone about a project?",
    answer:
      "Of course. Use the demo request form to share your goals and preferred time. The Moowo team will follow up to confirm a conversation.",
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
        <p className="eyebrow">Support the growth you create</p>
        <h2>
          Good conversations.
          <br />
          Fewer loose ends.
        </h2>
        <p>
          Give customer questions a clear next step. Explore how an AI agent
          could answer inquiries, gather lead details, and hand off to your
          team.
        </p>
        {site.agentDemoUrl ? (
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
        {site.agentDemoUrl && (
          <p className="agent-demo-note">
            Opens ElevenLabs in a new tab. Chat or talk using sample details
            only. ElevenLabs asks for consent before a conversation starts.
          </p>
        )}
        <p className="agent-availability">
          {voiceLive || smsLive
            ? "Try our dedicated AI demonstration line. Please use sample details only."
            : "Phone and SMS demos are not connected yet."}
        </p>
        {(voiceLive || smsLive) && (
          <div className="button-row">
            {voiceLive && (
              <a className="text-link" href={`tel:${site.agentPhone}`}>
                Call the AI demo ↗
              </a>
            )}
            {smsLive && (
              <a className="text-link" href={`sms:${site.agentPhone}`}>
                Text the AI demo ↗
              </a>
            )}
            <span>{site.agentPhone}</span>
          </div>
        )}
      </div>
      <div className="conversation-panel">
        <div className="conversation-heading">
          <span className="status-dot" />
          <strong>A conversation with possibility</strong>
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
          Illustrative interaction, not a live AI conversation.
        </p>
      </div>
    </section>
  );
}
