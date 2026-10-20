import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function VideoHero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const userPaused = useRef(false);
  const inView = useRef(true);
  const [paused, setPaused] = useState(true);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (
        reducedMotion.matches ||
        document.hidden ||
        userPaused.current ||
        !inView.current
      )
        video.pause();
      else video.play().catch(() => setPaused(true));
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    observer.observe(heroRef.current);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);
    sync();
    return () => {
      observer.disconnect();
      video.pause();
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);
  function toggleVideo() {
    const video = videoRef.current;
    userPaused.current = !video.paused;
    if (video.paused) video.play().catch(() => setPaused(true));
    else video.pause();
  }
  return (
    <section className="hero hero-video section-shell" ref={heroRef}>
      <div className="hero-video-backdrop" aria-hidden="true">
        <video
          ref={videoRef}
          src="/reel-video.mp4"
          muted
          playsInline
          loop
          preload="metadata"
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onError={() => setFailed(true)}
        />
        {failed && <img src="/images/inopera-creative.webp" alt="" />}
      </div>
      <div className="hero-video-shade" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Content first. Performance always.
        </p>
        <h1>
          Make content.
          <br />
          Build momentum.
          <br />
          <span>Grow with purpose.</span>
        </h1>
        <p className="hero-description">
          A performance agency for brands ready to move forward. Content
          creation and management, supported by automation that helps you scale.
        </p>
        <div className="button-row">
          <Link className="button button-dark" to="/book-demo">
            Book a demo <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" to="/pages/clients">
            Explore our work <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#services">
          Discover the approach <span aria-hidden="true">↓</span>
        </a>
        {!failed && (
          <button
            className="video-toggle"
            onClick={toggleVideo}
            aria-label={
              paused ? "Play background video" : "Pause background video"
            }
          >
            <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
            {paused ? "Play reel" : "Pause reel"}
          </button>
        )}
      </div>
    </section>
  );
}
