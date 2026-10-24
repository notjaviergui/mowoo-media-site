import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import EditorialHeading from "../components/EditorialHeading";
import CTA from "../components/CTA";
const steps = [
  ["Listen first.", "01", "↗", "Your business sets the direction.", "We learn what you do, who you want to reach, and what you’re working toward. Your expertise and audience shape the brief.", "A shared brief. Clear priorities."],
  ["Make it matter.", "02", "✳", "Turn the plan into something people feel.", "We develop ideas, scripts, and visuals around your brand. From filming to editing, each piece has a purpose. You review the work before it goes live.", "Thoughtful creative. Your approval."],
  ["Learn. Refine.", "03", "↗", "The next round starts with what we learn.", "We look at the response, discuss what’s working, and refine the next set of ideas. Purposeful testing helps the work become more useful over time.", "Regular reviews. A stronger next round."],
  ["Keep moving.", "04", "↔", "Connect the parts that make work easier.", "We bring content and account management together, adding practical automation where it saves time and supports your team.", "A connected plan. Room to grow."],
];
function ApproachStep({ step }) {
  const [title, number, icon, lead, copy, output] = step;
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 30%"] });
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 8]);
  return <li className="approach-step" ref={ref}>
    <div className="approach-step-number"><span>{number}</span><motion.span className="approach-step-icon" aria-hidden="true" style={{ rotate: reduced ? 0 : rotate }}>{icon}</motion.span></div>
    <motion.div className="approach-step-copy" style={{ y: reduced ? 0 : y }}><h3>{title}</h3><p className="approach-lead">{lead}</p><p>{copy}</p><span className="approach-output">{output}</span></motion.div>
  </li>;
}
export default function Us() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 80%"] });
  return <>
    <EditorialHeading eyebrow="The Moowo approach / Built together" lines={["Good chemistry.", "Clear direction."]}>We connect strategy, hands-on creation, and consistent management. A creative partner with a process you can follow.</EditorialHeading>
    <section className="approach-manifesto section-shell"><span aria-hidden="true">✳</span><div><p className="eyebrow">Before the camera. Before the content.</p><h2>Understand the business.<br /><span>Then make the move.</span></h2><p>Your audience, expertise, and goals come first. We set priorities together and build a plan around what your business needs.</p></div></section>
    <section className="approach-journey section-shell" aria-labelledby="approach-process-title">
      <div className="approach-sidebar"><p className="eyebrow">How we get there</p><h2 id="approach-process-title">A little structure.<br /><span>A lot of possibility.</span></h2><p>Four steps. An ongoing conversation.</p><span className="approach-sidebar-arrow" aria-hidden="true">↘</span></div>
      <div className="approach-step-list" ref={ref}><div className="approach-rail" aria-hidden="true"><motion.div style={{ scaleY: reduced ? 1 : scrollYProgress }} /></div><ol>{steps.map(step => <ApproachStep key={step[1]} step={step} />)}</ol></div>
    </section>
    <section className="approach-principles section-shell"><p className="eyebrow">What you can expect</p><div><h2>On the same page.<br />At every step.</h2><ul><li><span>01</span> Clear priorities and an agreed scope.</li><li><span>02</span> Your review before publishing.</li><li><span>03</span> Honest updates and useful feedback.</li></ul></div></section>
    <CTA />
  </>;
}
