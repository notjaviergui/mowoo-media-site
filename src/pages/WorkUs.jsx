import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../config/site";
import { submitDemo } from "../lib/submitDemo.mjs";
export default function WorkUs() {
  const location = useLocation();
  const reduced = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    setError("");
    try {
      await submitDemo(
        site.formEndpoint,
        Object.fromEntries(new FormData(form)),
      );
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "We couldn’t send your request. Please try again or email hello@moowomedia.com.",
      );
    }
  }
  return (
    <div className="contact-experience">
      <section className="contact-stage" aria-labelledby="contact-title">
        <header className="contact-topbar">
          <Link className="contact-wordmark" to="/" aria-label="Moowo Media home">MOOWO<small>Media</small></Link>
          <Link className="contact-close" to="/" aria-label="Close contact page and return home">Close <span aria-hidden="true">×</span></Link>
        </header>
        <div className="contact-scene">
          <div className="contact-headline">
            <h1 id="contact-title" aria-label="Got a good feeling? Let’s make it move.">
              {["GOT A", "GOOD", "FEELING?"].map((line, index) => <span className="contact-line" key={line} aria-hidden="true"><motion.span
                initial={reduced ? false : { y: "115%", rotate: 5 }} animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.85, delay: 0.35 + index * 0.12, ease }}>{line}</motion.span></span>)}
            </h1>
            <motion.p initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.5 }}>Let’s make it move.</motion.p>
          </div>
          <motion.div className="contact-details" initial={reduced ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7, ease }}>
            <div className="contact-email"><p>New projects. Big ideas. Just hello.</p><a href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a></div>
            <a className="contact-ticket" href="#start-project">
              <span className="ticket-top">A good conversation starts here <span aria-hidden="true">↗</span></span>
              <strong>LET’S<br />TALK<span className="ticket-spark" aria-hidden="true">✳</span></strong>
              <span className="ticket-bottom">Tell us your idea <span aria-hidden="true">↓</span></span>
            </a>
          </motion.div>
        </div>
        <div className="contact-bottom"><a href="https://instagram.com/moowomedia" target="_blank" rel="noreferrer">Instagram ↗</a><span>Good content. Clear direction.</span><a href="#start-project">Start something ↓</a></div>
      </section>
      <section className="booking-page section-shell contact-form-section" id="start-project" aria-labelledby="request-heading">
      <div className="booking-copy">
        <p className="eyebrow">Let’s find your next move</p>
        <h2 id="request-heading">
          Less guessing.
          <br />
          <span>More direction.</span>
        </h2>
        <p>
          Book a demo to explore a content plan, ongoing management, or an
          automation built around your business.
        </p>
        <ol className="booking-expectations">
          <li>
            <span>01</span> Tell us what you’re working toward.
          </li>
          <li>
            <span>02</span> Explore the services and relevant demos.
          </li>
          <li>
            <span>03</span> Discuss the next step for your business.
          </li>
        </ol>
        <a className="text-link" href={`mailto:${site.email}`}>
          Prefer email? {site.email} ↗
        </a>
      </div>
      <div className="booking-panel">
        {status === "success" ? (
          <div className="booking-success" role="status">
            <span aria-hidden="true">↗</span>
            <h2>Your request is on its way.</h2>
            <p>
              Thanks for sharing your goals. The team will follow up to arrange
              a time. Your demo is not booked until confirmed.
            </p>
            <button className="text-link" onClick={() => setStatus("idle")}>
              Send another request ↗
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Book a demo</p>
            <h2>
              A conversation
              <br />
              about your growth.
            </h2>
            {site.bookingUrl && (
              <a
                href={site.bookingUrl}
                className="button button-dark"
                target="_blank"
                rel="noreferrer"
              >
                Choose a time ↗
              </a>
            )}
            <p className="form-intro">
              {site.bookingUrl
                ? "Or request a time below."
                : "Share a few details. We’ll follow up to confirm a time."}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength="100"
                  />
                </label>
                <label>
                  Work email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength="254"
                  />
                </label>
              </div>
              <label>
                Business or brand
                <input
                  name="company"
                  autoComplete="organization"
                  required
                  maxLength="150"
                />
              </label>
              <label>
                I’m interested in
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Content creation</option>
                  <option>Account & content management</option>
                  <option>AI agents & automation</option>
                  <option>A connected plan / Not sure yet</option>
                </select>
              </label>
              <label>
                What would you like to achieve?
                <textarea
                  name="project"
                  rows="3"
                  maxLength="3000"
                  required
                  defaultValue={location.state?.project || ""}
                  placeholder="Tell us about your goals and preferred demo times (with time zone)."
                />
              </label>
              <label className="honeypot" aria-hidden="true">
                Leave this blank
                <input name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
              <p className="form-note">
                We’ll use these details to respond to your request. Please don’t
                include sensitive customer information.
              </p>
              {error && (
                <p role="alert" className="form-error">
                  {error}
                </p>
              )}
              <button
                className="button button-dark"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Request my demo"}{" "}
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          </>
        )}
      </div>
      </section>
      <div className="contact-signoff"><Link to="/">← Back to Moowo</Link><span>Let’s make something good.</span></div>
    </div>
  );
}
