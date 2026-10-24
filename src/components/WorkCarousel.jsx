import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { projects, ProjectCard } from "./AdFeed";

export default function WorkCarousel() {
  const rail = useRef(null);
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(!document.hidden);
  const [position, setPosition] = useState({ index: 0, start: true, end: false });
  const progress = useMotionValue(0);
  const direction = useRef(1);
  const drag = useRef(null);
  const suppressClick = useRef(false);
  const [dragging, setDragging] = useState(false);

  function syncPosition() {
    const element = rail.current;
    if (!element) return;
    const max = Math.max(0, element.scrollWidth - element.clientWidth);
    const step = element.children[1]?.offsetLeft - element.children[0]?.offsetLeft || 1;
    const next = { index: Math.round(element.scrollLeft / step), start: element.scrollLeft <= 1, end: element.scrollLeft >= max - 1 };
    progress.set(max ? element.scrollLeft / max : 0);
    setPosition(previous => previous.index === next.index && previous.start === next.start && previous.end === next.end ? previous : next);
  }

  useEffect(() => {
    const element = rail.current;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    const resize = new ResizeObserver(syncPosition);
    observer.observe(element);
    resize.observe(element);
    const visibility = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    syncPosition();
    return () => { observer.disconnect(); resize.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);

  useEffect(() => { if (reduced) setPlaying(false); }, [reduced]);
  useEffect(() => {
    if (!playing || reduced || hovered || focused || !visible || !documentVisible) return;
    let frame;
    let previous;
    const element = rail.current;
    let target = element.scrollLeft;
    const tick = time => {
      const dt = previous == null ? 0 : Math.min(time - previous, 50);
      previous = time;
      const max = Math.max(0, element.scrollWidth - element.clientWidth);
      if (max > 0) {
        if (target >= max - 1) direction.current = -1;
        else if (target <= 0) direction.current = 1;
        target = Math.max(0, Math.min(max, target + dt * 0.035 * direction.current));
        element.scrollLeft = target;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, reduced, hovered, focused, visible, documentVisible]);

  function move(delta) {
    setPlaying(false);
    const element = rail.current;
    const step = element.children[1].offsetLeft - element.children[0].offsetLeft;
    const index = delta > 0 ? Math.floor((element.scrollLeft + 2) / step) + 1 : Math.ceil((element.scrollLeft - 2) / step) - 1;
    element.scrollTo({ left: Math.max(0, Math.min(element.scrollWidth - element.clientWidth, index * step)), behavior: reduced ? "instant" : "smooth" });
  }

  function startDrag(event) {
    setPlaying(false);
    if (event.pointerType === "mouse" && event.button === 0) {
      suppressClick.current = false;
      drag.current = { x: event.clientX, left: rail.current.scrollLeft, moved: false };
    }
  }
  function moveDrag(event) {
    const current = drag.current;
    if (!current) return;
    if (event.buttons === 0) { endDrag(event); return; }
    const distance = event.clientX - current.x;
    if (!current.moved && Math.abs(distance) > 6) {
      current.moved = true;
      rail.current.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    if (current.moved) { event.preventDefault(); rail.current.scrollLeft = current.left - distance; }
  }
  function endDrag(event) {
    if (drag.current?.moved) {
      suppressClick.current = true;
      if (rail.current.hasPointerCapture(event.pointerId)) rail.current.releasePointerCapture(event.pointerId);
    }
    drag.current = null;
    setDragging(false);
  }

  return (
    <section className="home-work" id="work" aria-labelledby="work-heading">
      <div className="work-heading section-shell"><h2 id="work-heading">Made to <span>move.</span></h2><Link className="round-link" to="/pages/clients"><span>Our work</span><span aria-hidden="true">↗</span></Link></div>
      <div className="carousel-toolbar section-shell">
        <p>Good work doesn’t sit still.</p>
        <div className="carousel-controls">
          {!reduced && <button className="carousel-play" onClick={() => setPlaying(value => !value)} aria-pressed={playing}>{playing ? "Ⅱ Pause" : "▶ Play"}</button>}
          <span className="carousel-count" aria-hidden="true">{String(position.index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          <button className="carousel-button" aria-label="Previous project" aria-controls="project-carousel" disabled={position.start} onClick={() => move(-1)}>←</button>
          <button className="carousel-button" aria-label="Next project" aria-controls="project-carousel" disabled={position.end} onClick={() => move(1)}>→</button>
        </div>
      </div>
      <div ref={rail} id="project-carousel" className={`project-carousel ${dragging ? "is-dragging" : ""}`} role="region" aria-roledescription="carousel" aria-label="Selected Moowo projects" tabIndex={0}
        onScroll={syncPosition} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag}
        onLostPointerCapture={() => { drag.current = null; setDragging(false); }}
        onClickCapture={event => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }}
        onDragStart={event => event.preventDefault()} onWheel={() => setPlaying(false)}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
          else if (event.key === "Home" || event.key === "End") { event.preventDefault(); setPlaying(false); rail.current.scrollTo({ left: event.key === "Home" ? 0 : rail.current.scrollWidth, behavior: reduced ? "instant" : "smooth" }); }
        }}>
        {projects.map(project => <Link key={project.title} className="work-slide" to="/pages/clients" aria-label={`Explore our work for ${project.title}`}><ProjectCard project={project} /><span className="project-arrow" aria-hidden="true">↗</span></Link>)}
      </div>
      <div className="carousel-bottom section-shell"><span>Drag, swipe, or follow the arrows.</span><div className="carousel-progress" aria-hidden="true"><motion.div style={{ scaleX: progress }} /></div></div>
      <div className="home-reel section-shell"><div className="reel-heading"><h3>And in motion.</h3><span>Press play. Get a feel for us. ↘</span></div><video controls playsInline preload="none" poster="/images/inopera-creative.webp" aria-label="Moowo Media creative reel"><source src="/reel-video.mp4" type="video/mp4" />Your browser does not support video playback.</video></div>
    </section>
  );
}
