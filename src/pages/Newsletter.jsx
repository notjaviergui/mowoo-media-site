import React, { useState } from "react";
import { site } from "../config/site";
const notes = [
  [
    "Start with one useful question",
    "A content plan starts with your audience, not an empty calendar.",
    "List the questions your team answers most often. Choose one, write a direct opening line, and use the rest of the video to explain it clearly. Give each piece a specific purpose before deciding how often to post.",
  ],
  [
    "Make the next round smarter",
    "Use a small set of signals to guide your creative decisions.",
    "Review reach, watch time, saves, and relevant inquiries alongside the purpose of each post. Look for patterns across several pieces of content. Test one meaningful change at a time so you can learn from the result.",
  ],
  [
    "Map the handoff before automating",
    "A helpful agent needs a clear destination for each conversation.",
    "Write down common inquiries, the information needed to help, and who should take over. Decide when an agent should stop and bring in a person. Start with a narrow workflow and test it with sample details before connecting customer data.",
  ],
];
export default function Newsletter() {
  const [status, setStatus] = useState("idle");
  async function subscribe(event) {
    event.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${site.apiBase}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: new FormData(event.currentTarget).get("email"),
        }),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <>
      <section className="page-intro section-shell">
        <p className="eyebrow">The Moowo Memo</p>
        <h1>
          A fresh perspective.
          <br />
          <span>A practical next step.</span>
        </h1>
        <p>
          Notes on thoughtful content, consistent management, and useful
          automation.
        </p>
      </section>
      <section className="memo-section section-shell">
        {notes.map(([title, intro, content], i) => (
          <details key={title}>
            <summary>
              <span className="eyebrow">FIELD NOTE / 0{i + 1}</span>
              <h2>{title}</h2>
              <p>{intro}</p>
              <span className="text-link">Read the note +</span>
            </summary>
            <p className="memo-body">{content}</p>
          </details>
        ))}
      </section>
      <section className="memo-subscribe section-shell">
        <h2>A little more Moowo.</h2>
        {site.apiBase ? (
          <form onSubmit={subscribe}>
            <label>
              Your email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <button
              className="button button-dark"
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" ? "Subscribing…" : "Subscribe ↗"}
            </button>
            <p role="status">
              {status === "success"
                ? "You’re subscribed."
                : status === "error"
                  ? "Subscription unavailable. Please try again later or email us."
                  : "Subscribe to receive future Moowo notes. Unsubscribe anytime."}
            </p>
          </form>
        ) : (
          <>
            <p>
              Email subscriptions are not available here yet. Explore the notes
              above, or get in touch.
            </p>
            <a className="text-link" href="mailto:hello@moowomedia.com">
              Talk to the team ↗
            </a>
          </>
        )}
      </section>
    </>
  );
}
