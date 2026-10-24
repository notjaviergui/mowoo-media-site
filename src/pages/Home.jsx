import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import WorkCarousel from "../components/WorkCarousel";
import ServiceJourney from "../components/ServiceJourney";
import AgentDemo from "../components/AgentDemo";

const introduction = "We create content built for performance. Through constant optimization and smart automation, we help your business keep moving forward.";
const words = introduction.split(" ");

function FillWord({ word, index, progress, reduced }) {
  const emphasized = ["content", "performance", "optimization", "automation"].includes(word.toLowerCase().replace(/[^a-z]/g, ""));
  const color = useTransform(progress, [index / words.length, (index + 1) / words.length], ["#6d7464", emphasized ? "#c2f335" : "#f4f2e9"]);
  return <motion.span style={{ color: reduced ? (emphasized ? "#c2f335" : "#f4f2e9") : color }}>{word}{" "}</motion.span>;
}

function Introduction() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const fillProgress = useTransform(scrollYProgress, [0.03, 0.88], [0, 1]);
  return (
    <section className="home-introduction" id="about" ref={ref} aria-labelledby="intro-heading">
      <div className="intro-pin section-shell">
      <h2 className="section-kicker" id="intro-heading">Four things. One direction. <span aria-hidden="true">↙</span></h2>
      <p className="fill-paragraph">
        <span className="sr-only">{introduction}</span>
        <span aria-hidden="true">{words.map((word, index) => <FillWord key={index} word={word} index={index} progress={fillProgress} reduced={reduced} />)}</span>
      </p>
      <div className="intro-bottom"><span>Keep scrolling. Watch it connect.</span><div className="intro-progress" aria-hidden="true"><motion.div style={{ scaleX: reduced ? 1 : fillProgress }} /></div><a className="text-link" href="#work">Our work <span aria-hidden="true">↓</span></a></div>
      </div>
    </section>
  );
}

function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const moowoX = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const mediaX = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const brandY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const mediaRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const sparkRotate = useTransform(scrollYProgress, [0, 1], [12, 105]);
  return (
    <section ref={ref} className="brand-hero section-shell" aria-labelledby="home-title">
      <div className="hero-topline"><span>Built to move your business.</span><span>Content · Performance · Automation</span></div>
      <motion.div className="hero-brand" aria-label="Moowo Media" style={{ y: reduced ? 0 : brandY }}>
        <motion.span className="hero-moowo" aria-hidden="true" style={{ x: reduced ? 0 : moowoX }}>
          {Array.from("MOOWO").map((letter, index) => <span className="hero-letter" style={{ "--letter-index": index }} key={index}>{letter}</span>)}<span className="hero-registration">®</span>
        </motion.span>
        <motion.span className="hero-media" aria-hidden="true" style={{ x: reduced ? 0 : mediaX, rotate: reduced ? 0 : mediaRotate }}>
          <span className="hero-media-word">Media</span><motion.span className="brand-spark" style={{ rotate: reduced ? 12 : sparkRotate }}>✳</motion.span>
        </motion.span>
      </motion.div>
      <div className="brand-hero-bottom">
        <h1 id="home-title">Content that moves<br />your business forward.</h1>
        <Link className="round-link" to="/book-demo"><span>Let’s talk</span><span aria-hidden="true">↗</span></Link>
        <a className="scroll-cue" href="#about">A little further <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-rule" aria-hidden="true" />
    </section>
  );
}

const faqs = [
  ["What can we work on together?", "Content strategy, filming and editing, social media management, websites, and practical automation. We’ll help you choose the support that fits your business."],
  ["Can you work with our existing brand?", "Yes. We can build on your existing identity, assets, and content, with a plan that keeps everything consistent."],
  ["Do we need ongoing management?", "That depends on what you need. Tell us whether you’re looking for a specific project or ongoing content and account support, and we’ll discuss the right approach."],
  ["What happens after we get in touch?", "Share your goals through our demo request form. Our team will follow up to discuss the project and arrange a time. A meeting is only booked once it’s confirmed."],
];

function FAQ() {
  return (
    <section className="home-faq section-shell" aria-labelledby="faq-heading">
      <div><span className="faq-spark" aria-hidden="true">✳</span><h2 id="faq-heading">A few good<br /><span>questions.</span></h2></div>
      <div className="home-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>
  );
}

export default function Home() {
  return <div className="editorial-home"><Hero /><Introduction /><WorkCarousel /><ServiceJourney /><div className="home-agent"><AgentDemo /></div><FAQ /></div>;
}
