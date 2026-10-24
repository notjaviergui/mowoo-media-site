import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function shouldShowIntro(pathname, hash) {
  if (pathname !== "/" || hash || matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try { return sessionStorage.getItem("moowo-intro-seen") !== "1"; }
  catch { return true; }
}

export default function BrandIntro({ onComplete }) {
  const skip = useRef(null);
  useEffect(() => {
    try { sessionStorage.setItem("moowo-intro-seen", "1"); } catch { /* Storage may be blocked. */ }
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    document.body.dataset.intro = "active";
    skip.current?.focus({ preventScroll: true });
    const timer = setTimeout(onComplete, 2400);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const changed = () => { if (reduced.matches) onComplete(); };
    reduced.addEventListener("change", changed);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      delete document.body.dataset.intro;
      reduced.removeEventListener("change", changed);
      if (previousFocus instanceof HTMLElement && previousFocus !== document.body) previousFocus.focus({ preventScroll: true });
    };
  }, [onComplete]);
  return (
    <motion.div className="brand-intro" role="dialog" aria-modal="true" aria-label="Welcome to Moowo Media"
      exit={{ y: "-100%" }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}>
      <svg className="intro-lettering" viewBox="0 0 900 460" aria-hidden="true">
        <motion.text x="450" y="210" textAnchor="middle" textLength="840" lengthAdjust="spacingAndGlyphs"
          initial={{ strokeDashoffset: 1600, fillOpacity: 0 }}
          animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
          transition={{ strokeDashoffset: { duration: 1.5, ease: "easeInOut" }, fillOpacity: { delay: 1.35, duration: 0.35 } }}>MOOWO</motion.text>
        <motion.text className="intro-media" x="450" y="400" textAnchor="middle" textLength="660" lengthAdjust="spacingAndGlyphs"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>Media</motion.text>
      </svg>
      <button ref={skip} className="intro-skip" onClick={onComplete}
        onKeyDown={(event) => { if (event.key === "Tab") { event.preventDefault(); skip.current.focus(); } if (event.key === "Escape") onComplete(); }}>Skip intro ↗</button>
    </motion.div>
  );
}
