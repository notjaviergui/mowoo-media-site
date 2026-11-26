import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { shortClients } from "../data/shorts";

export default function ShortsLightbox({ items, index, onIndex, onClose }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const video = useRef(null);
  const swipe = useRef(null);
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = items[index];
  const client = shortClients[item.client];
  const instagram = item.instagram || client.instagram;

  const go = useCallback(step => onIndex((index + step + items.length) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    setProgress(0);
    setPaused(false);
  }, [item.id]);

  useEffect(() => {
    const keydown = event => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") go(1);
      else if (event.key === "ArrowLeft") go(-1);
      else if (event.key === "Tab") {
        const focusable = [...dialog.current.querySelectorAll("button, a[href]")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [go, onClose]);

  function togglePlay() {
    const element = video.current;
    if (element.paused) { element.play().catch(() => {}); setPaused(false); }
    else { element.pause(); setPaused(true); }
  }

  return createPortal(
    <motion.div
      ref={dialog}
      className="shorts-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${client.name}: ${item.title}`}
      data-native-scroll
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : .3 }}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="lightbox-top">
        <span className="sea-tile-label">{client.name}</span>
        <span className="lightbox-count" aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <button ref={closeButton} type="button" className="lightbox-close" onClick={onClose}>Close <span aria-hidden="true">×</span></button>
      </div>
      <div
        className="lightbox-stage"
        onPointerDown={event => { swipe.current = event.clientX; }}
        onPointerUp={event => {
          if (swipe.current == null) return;
          const distance = event.clientX - swipe.current;
          swipe.current = null;
          if (Math.abs(distance) > 50) go(distance < 0 ? 1 : -1);
        }}
      >
        <button type="button" className="carousel-button lightbox-arrow" aria-label="Previous video" onClick={() => go(-1)}>←</button>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            className="lightbox-frame"
            initial={reduced ? false : { opacity: 0, scale: .94, rotate: -1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={reduced ? undefined : { opacity: 0, scale: .96 }}
            transition={{ duration: .35, ease: [.22, 1, .36, 1] }}
          >
            <video
              ref={video}
              src={item.src}
              poster={item.poster}
              autoPlay
              playsInline
              onClick={togglePlay}
              onTimeUpdate={event => setProgress(event.currentTarget.duration ? event.currentTarget.currentTime / event.currentTarget.duration : 0)}
              onEnded={() => go(1)}
            />
            <button type="button" className="lightbox-toggle" onClick={togglePlay} aria-label={paused ? "Play video" : "Pause video"}>{paused ? "▶︎" : "Ⅱ"}</button>
            <span className="lightbox-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></span>
          </motion.div>
        </AnimatePresence>
        <button type="button" className="carousel-button lightbox-arrow" aria-label="Next video" onClick={() => go(1)}>→</button>
      </div>
      <div className="lightbox-bottom">
        <p>{item.title}</p>
        {instagram && <a href={instagram} target="_blank" rel="noreferrer">View on Instagram <span aria-hidden="true">↗︎</span></a>}
      </div>
    </motion.div>,
    document.body,
  );
}
