import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { contentCount } from "../data/shorts";
import { RevealText } from "./Reveal";

// Our Work page opener, set in the same oversized Syne wordmark style as the home hero.
export default function WorkHero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: .4 });
  const proofX = useTransform(progress, [0, 1], [0, -60]);
  const feedX = useTransform(progress, [0, 1], [0, 50]);
  const feedRotate = useTransform(progress, [0, 1], [-2, 2]);
  const sparkRotate = useTransform(progress, [0, 1], [12, 200]);
  const lift = useTransform(progress, [0, 1], [0, 70]);
  const still = value => (reduced ? 0 : value);

  return (
    <section ref={ref} className="work-hero section-shell" aria-labelledby="work-hero-title">
      <div className="work-hero-topline">
        <span>The work / Straight from the feed</span>
        <span>{contentCount} videos · Blue North Medical Group · Cherylxxw</span>
      </div>
      <motion.h1 id="work-hero-title" className="work-hero-title" style={{ y: still(lift) }}>
        <span className="sr-only">The proof is in the feed.</span>
        <motion.span className="work-hero-row" aria-hidden="true" style={{ x: still(proofX) }}>
          <span className="work-hero-small work-hero-pop" style={{ "--i": 0 }}>The</span>
          <span className="work-hero-big">
            {Array.from("PROOF").map((letter, index) => <span className="work-hero-letter" style={{ "--i": index + 1 }} key={index}>{letter}</span>)}
          </span>
        </motion.span>
        <motion.span className="work-hero-row work-hero-row-end" aria-hidden="true" style={{ x: still(feedX) }}>
          <span className="work-hero-small work-hero-pop" style={{ "--i": 6 }}>is in the</span>
          <motion.span className="work-hero-feed" style={{ rotate: reduced ? -2 : feedRotate }}>
            <span className="work-hero-feed-word">Feed.</span>
            <motion.span className="work-hero-spark" style={{ rotate: reduced ? 12 : sparkRotate }}>✳︎</motion.span>
          </motion.span>
        </motion.span>
      </motion.h1>
      <div className="work-hero-bottom">
        <RevealText delay={.7}>Hundreds of vertical videos for the people we work with every week. Scroll the sea, tap anything for sound, then dig into the brands behind it.</RevealText>
        <a className="scroll-cue" href="#content-sea">Into the feed <span aria-hidden="true">↓</span></a>
      </div>
      <div className="work-hero-rule" aria-hidden="true" />
    </section>
  );
}
