import React, { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pageTransition, transitionFrames } from "../lib/pageTransition.mjs";

const duration = 1.05;

// Keyed by pathname in Layout: anchors and form updates never replay the reveal.
// Two liquid layers (lime over ink) peel away from the new page in an organic shape.
export default function PageTransition({ pathname, skip }) {
  const skippedOnMount = useRef(skip);
  const [finished, setFinished] = useState(false);
  const reduced = useReducedMotion();
  const name = pageTransition(pathname);
  const frames = useMemo(() => ({ lime: transitionFrames(name), ink: transitionFrames(name, .22) }), [name]);
  if (skippedOnMount.current || reduced || finished) return null;
  return (
    <div aria-hidden="true" className={`page-wipe page-wipe-${name}`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          className="page-wipe-ink"
          initial={{ d: frames.ink[0] }}
          animate={{ d: frames.ink }}
          transition={{ duration: duration * 1.12, ease: "linear" }}
          onAnimationComplete={() => setFinished(true)}
        />
        <motion.path
          className="page-wipe-lime"
          initial={{ d: frames.lime[0] }}
          animate={{ d: frames.lime }}
          transition={{ duration, ease: "linear" }}
        />
      </svg>
      <motion.span
        className="page-wipe-spark"
        initial={{ rotate: -40, scale: .6, opacity: 0 }}
        animate={{ rotate: [-40, 20, 160], scale: [.6, 1, .2], opacity: [0, 1, 0] }}
        transition={{ duration: duration * .62, times: [0, .35, 1], ease: [.22, 1, .36, 1] }}
      >✳︎</motion.span>
    </div>
  );
}
