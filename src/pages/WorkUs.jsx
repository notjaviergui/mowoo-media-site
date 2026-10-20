import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../config/site";
import { submitDemo } from "../lib/submitDemo.mjs";
export default function WorkUs() {
  const location = useLocation();
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
    <section className="booking-page section-shell">
      <div className="booking-copy">
        <p className="eyebrow">Let’s find your next move</p>
        <h1>
          Less guessing.
          <br />
          <span>More direction.</span>
        </h1>
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
            <span>03</span> Leave with a clear potential next step.
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
  );
}
