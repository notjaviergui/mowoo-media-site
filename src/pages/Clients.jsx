import React, { useState } from "react";
import { projects, ProjectCard } from "../components/AdFeed";
import CTA from "../components/CTA";
export default function Clients() {
  const [filter, setFilter] = useState("All work");
  const filters = ["All work", ...new Set(projects.map((p) => p.category))];
  return (
    <>
      <section className="page-intro section-shell">
        <p className="eyebrow">The work</p>
        <h1>
          Every brand has
          <br />
          <span>something to say.</span>
        </h1>
        <p>A selection of creative and brand assets from our portfolio.</p>
      </section>
      <section className="portfolio section-shell">
        <div className="filter-row" aria-label="Filter work">
          {filters.map((label) => (
            <button
              key={label}
              aria-pressed={filter === label}
              onClick={() => setFilter(label)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {projects
            .filter(
              (project) => filter === "All work" || project.category === filter,
            )
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
        <div className="reel-section">
          <p className="eyebrow">Creative in motion</p>
          <h2>The Moowo reel.</h2>
          <video
            controls
            playsInline
            preload="none"
            poster="/images/inopera-creative.webp"
            aria-label="Moowo Media creative showreel"
            src="/reel-video.mp4"
          />
          <p className="muted">A selection of our creative work in motion.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
