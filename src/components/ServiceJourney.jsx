import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ideas = [
  { id: "performance", title: "Performance", description: "A clear goal. The right audience. A plan that moves your business forward.", icon: "target" },
  { id: "content", title: "Content", description: "Ideas, filming, and editing that make people stop, watch, and connect.", icon: "play" },
  { id: "optimization", title: "Optimization", description: "Read the response. Test the next idea. Make every round stronger.", icon: "chart" },
  { id: "automation", title: "Automation", description: "Connect the moving parts. Save time. Keep the conversation going.", icon: "bolt" },
];
const desktopPath = "M1260 -40 C1030 -10 760 65 760 180 C760 315 1030 320 930 190 C810 30 485 245 285 385 C170 465 220 570 350 555 C560 535 520 735 340 690 C110 630 180 895 480 815 C770 740 1090 850 910 1030 C750 1190 680 860 850 880 C1070 905 610 1190 320 1240 C105 1275 145 1440 480 1430 L1000 1510";
const mobilePath = "M430 -30 C350 35 175 25 230 165 C285 300 425 155 290 145 C60 130 25 350 155 420 C320 510 290 630 110 585 C-20 550 40 795 240 840 C450 890 260 1080 210 940 C160 800 10 1010 135 1190 C210 1300 380 1290 310 1400 C235 1510 140 1440 205 1370 C260 1310 365 1460 420 1500";

function IdeaIcon({ name }) {
  return <svg className="idea-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect className="icon-paper" x="9" y="9" width="82" height="82" rx="20" />
    {name === "target" && <><circle cx="47" cy="53" r="26" /><circle cx="47" cy="53" r="16" /><circle cx="47" cy="53" r="5" /><path d="M48 52 77 23m-14 2 15-3-3 15" /></>}
    {name === "play" && <><rect x="23" y="29" width="54" height="43" rx="7" /><path d="m43 39 18 12-18 11Z" /><path d="m25 21 8-6m14 6v-9m15 10 8-5" /></>}
    {name === "chart" && <><path d="M24 75V56h11v19m9 0V43h11v32m9 0V29h11v46M24 41l18-13 12 4 20-16m-13 0h14v14" /></>}
    {name === "bolt" && <><path d="M57 19 30 55h19l-6 27 29-38H52Z" /><path d="m24 26 7 5m43 39 6 5M20 67l9-3m46-41 5-5" /></>}
  </svg>;
}

// All parts follow the same progress as the connecting line, in both directions.
function JourneyNode({ idea, index, progress, reduced }) {
  const { id, title, description, icon } = idea;
  const start = [0, 0.23, 0.55, 0.8][index];
  const direction = index % 2 === 0 ? 1 : -1;
  const range = [start, start + 0.12, Math.min(start + 0.24, 1)];
  const y = useTransform(progress, range, [38, 0, -12]);
  const x = useTransform(progress, range, [direction * 18, 0, -direction * 6]);
  const rotate = useTransform(progress, range, [-direction * 16, direction * 3, 0]);
  const scale = useTransform(progress, range, [0.88, 1.04, 1]);
  const titleX = useTransform(progress, range, [direction * 14, 0, 0]);
  const captionY = useTransform(progress, [start + 0.025, start + 0.16], [24, 0]);
  return <li className={`idea-node idea-${id}`}>
    <motion.div className="idea-arrival" style={{ y: reduced ? 0 : y, x: reduced ? 0 : x }}>
      <div className="idea-title">
        <motion.div className="idea-icon-motion" style={{ rotate: reduced ? 0 : rotate, scale: reduced ? 1 : scale }}><IdeaIcon name={icon} /></motion.div>
        <motion.h3 style={{ x: reduced ? 0 : titleX }}>{title}</motion.h3>
      </div>
      <motion.div style={{ y: reduced ? 0 : captionY }}><p className="idea-caption">{description}</p></motion.div>
    </motion.div>
  </li>;
}

export default function ServiceJourney() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 80%"] });
  return (
    <section className="home-services section-shell" id="services" aria-labelledby="services-heading">
      <div className="ideas-heading"><h2 id="services-heading">Good ideas.<br /><span>Wildly connected.</span></h2><p>Four ways we<br />make things move. <span aria-hidden="true">↙</span></p></div>
      <div className="ideas-canvas" ref={ref}>
        <svg className="ideas-line ideas-line-desktop" viewBox="0 0 1200 1450" preserveAspectRatio="none" aria-hidden="true"><path className="ideas-track" d={desktopPath} /><motion.path d={desktopPath} style={{ pathLength: reduced ? 1 : scrollYProgress }} /></svg>
        <svg className="ideas-line ideas-line-mobile" viewBox="0 0 400 1500" preserveAspectRatio="none" aria-hidden="true"><path className="ideas-track" d={mobilePath} /><motion.path d={mobilePath} style={{ pathLength: reduced ? 1 : scrollYProgress }} /></svg>
        <ol className="idea-nodes">{ideas.map((idea, index) => <JourneyNode key={idea.id} idea={idea} index={index} progress={scrollYProgress} reduced={reduced} />)}</ol>
      </div>
      <div className="ideas-ending"><p>Better together.<br />Built around your business.</p><Link className="button button-dark" to="/services">Find your next step <span aria-hidden="true">↗</span></Link></div>
    </section>
  );
}
