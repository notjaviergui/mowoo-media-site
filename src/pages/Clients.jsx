import React, { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, ProjectCard } from "../components/AdFeed";
import EditorialHeading from "../components/EditorialHeading";
import CTA from "../components/CTA";

const studies = {
  "Blue North Medical": ["Make the first impression feel clear and considered.", "Explore a simple digital experience that helps visitors find relevant information and take the next step.", ["Website content outline", "Visual direction", "Inquiry journey"]],
  Inopera: ["Give the product a story beyond its specifications.", "Build a visual world around everyday listening, using close-up product details and short, purposeful edits.", ["Product photography direction", "Short-form video concepts", "Creative variations"]],
  Mayu: ["Bring the character of the brand into every touchpoint.", "Pair a consistent visual language with content that celebrates atmosphere, detail, and the experience of being there.", ["Content pillars", "Social art direction", "Brand asset toolkit"]],
  "Miami Mojito Company": ["Make a distinctive identity feel instantly recognizable.", "Let the illustrated personality lead, with playful layouts and a repeatable system for seasonal stories.", ["Identity applications", "Social content concepts", "Campaign templates"]],
  "Suches Cabins": ["Turn a sense of place into a reason to explore.", "Build a story around quiet mornings, outdoor moments, and the details that make a stay memorable.", ["Destination storytelling", "Photo and video shot list", "Seasonal content plan"]],
  "Intl Rentals": ["Create a consistent presence across the customer journey.", "Use a clear visual system and practical content to make the brand easier to recognize and understand.", ["Brand applications", "Content templates", "Customer journey outline"]],
};

function CaseStudy({ project, open, onToggle, index }) {
  const id = useId();
  const reduced = useReducedMotion();
  const [brief, direction, deliverables] = studies[project.title];
  return <motion.div className={`case-study ${open ? "is-open" : ""}`} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .55 }}>
    <button className="case-trigger" aria-label={`${open ? "Close" : "Explore"} ${project.title} case study`} aria-expanded={open} aria-controls={id} onClick={onToggle}>
      <ProjectCard project={project} />
      <span className="case-trigger-bottom"><span>0{index + 1} / {open ? "Close case study" : "Explore case study"}</span><span aria-hidden="true">{open ? "−" : "↗"}</span></span>
    </button>
    <div id={id}>
      <AnimatePresence initial={false}>{open && <motion.section className="case-reveal" aria-label={`${project.title} sample case study`} initial={{ height: reduced ? "auto" : 0, opacity: reduced ? 1 : 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: reduced ? "auto" : 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .45, ease: [.22, 1, .36, 1] }}>
        <div className="case-content">
          <p className="sample-label">Sample case study · illustrative scope</p>
          <p className="case-disclaimer">A sample creative direction, not a record of completed deliverables or verified results.</p>
          <h4>The brief</h4><p>{brief}</p>
          <h4>The direction</h4><p>{direction}</p>
          <h4>What it could include</h4><ul>{deliverables.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="case-links">{project.website && <a href={project.website} target="_blank" rel="noreferrer">Visit client website ↗</a>}<Link to="/book-demo" state={{ project: `I’d like to discuss a project inspired by the ${project.title} case study.` }}>Build something like this ↗</Link></div>
        </div>
      </motion.section>}</AnimatePresence>
    </div>
  </motion.div>;
}

export default function Clients() {
  const [filter, setFilter] = useState("All work");
  const [opened, setOpened] = useState(null);
  const filters = ["All work", ...new Set(projects.map(p => p.category))];
  return <>
    <EditorialHeading eyebrow="The work / A closer look" lines={["Good brands.", "Real character."]}>Different businesses. Different stories. Explore the creative, then open a sample case study to see the thinking behind a possible direction.</EditorialHeading>
    <section className="portfolio section-shell editorial-portfolio" aria-label="Client portfolio">
      <div className="filter-row" aria-label="Filter work">{filters.map(label => <button key={label} aria-pressed={filter === label} onClick={() => { setFilter(label); setOpened(null); }}>{label}</button>)}</div>
      <p className="portfolio-note">Case-study copy is sample content for review. Existing portfolio assets are shown alongside a labeled Blue North concept.</p>
      <div className="project-grid">{projects.filter(p => filter === "All work" || p.category === filter).map(project => <CaseStudy key={project.title} project={project} index={projects.indexOf(project)} open={opened === project.title} onToggle={() => setOpened(opened === project.title ? null : project.title)} />)}</div>
      <div className="reel-section"><p className="eyebrow">Creative in motion</p><h2>The Moowo reel.</h2><video controls playsInline preload="none" poster="/images/inopera-creative.webp" aria-label="Moowo Media creative showreel" src="/reel-video.mp4" /><p className="muted">A selection of our creative work in motion.</p></div>
    </section><CTA />
  </>;
}
