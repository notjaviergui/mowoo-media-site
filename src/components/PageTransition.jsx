import React, { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { pageTransition } from "../lib/pageTransition.mjs";

// Keyed by pathname in Layout: anchors and form updates never replay the wipe.
export default function PageTransition({ pathname, skip }) {
  const skippedOnMount = useRef(skip);
  const [finished, setFinished] = useState(false);
  const reduced = useReducedMotion();
  if (skippedOnMount.current || reduced || finished) return null;
  return <div aria-hidden="true" className={`page-wipe page-wipe-${pageTransition(pathname)}`}
    onAnimationEnd={event => { if (event.target === event.currentTarget) setFinished(true); }} />;
}
