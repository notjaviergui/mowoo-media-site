import React from "react";
import { motion, useReducedMotion } from "framer-motion";
export default function EditorialHeading({ eyebrow, lines, children }) {
  const reduced = useReducedMotion();
  return <section className="page-intro section-shell editorial-page-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{lines.map((line, index) => <span className="editorial-heading-mask" key={line}><motion.span initial={reduced ? false : { y: "110%", rotate: 3 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: .8, delay: index * .12, ease: [.22, 1, .36, 1] }}>{line}</motion.span></span>)}</h1>
    <div className="editorial-heading-bottom"><p>{children}</p><span aria-hidden="true">↙</span></div>
  </section>;
}
