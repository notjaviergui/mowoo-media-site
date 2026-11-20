import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { site } from "../config/site";
import { RevealHeading, RevealText } from "./Reveal";

const ease = [.22, 1, .36, 1];
const cycle = 6500;

// Live-looking voice line: bars breathe at staggered speeds while Mia "talks".
function VoiceLine({ active }) {
  return (
    <div className={`mia-voice ${active ? "is-talking" : ""}`} aria-hidden="true">
      <span className="mia-voice-orb"><span>✳</span></span>
      <span className="mia-voice-bars">{Array.from({ length: 28 }, (_, index) => <span key={index} style={{ "--bar": index }} />)}</span>
      <span className="mia-voice-label">{active ? "Mia is talking" : "Mia is listening"}</span>
    </div>
  );
}
const scenarios = [
  {
    label: "Answer an inquiry",
    question: "What can Moowo help my business with?",
    answer:
      "We help with content creation, account management, and AI automation. What would you like to improve first?",
    action: "Understand the need → Guide the next step",
  },
  {
    label: "Qualify a lead",
    question: "I need help staying consistent on social.",
    answer:
      "We can help plan and manage your content. Which channels do you use?",
    action: "Gather context → Prepare a useful handoff",
  },
  {
    label: "Arrange a handoff",
    question: "Can I speak with someone about a project?",
    answer: "Share your goals in the demo form. Our team will follow up.",
    action: "Capture the request → Connect with the team",
  },
];
export default function AgentDemo() {
  const [active, setActive] = useState(0);
  const [typing, setTyping] = useState(false);
  const [userPicked, setUserPicked] = useState(false);
  const section = useRef(null);
  const panel = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(panel, { amount: .5 });
  const scenario = scenarios[active];

  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });
  const drift = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: .4 });
  const panelY = useTransform(drift, [0, 1], [90, -70]);
  const panelRotate = useTransform(drift, [0, .5, 1], [4, 0, -2]);
  const orbY = useTransform(drift, [0, 1], [140, -140]);
  const orbScale = useTransform(drift, [0, .5, 1], [.7, 1.1, .85]);

  // Each example "types" for a beat before Mia answers.
  useEffect(() => {
    if (reduced) return undefined;
    setTyping(true);
    const timer = setTimeout(() => setTyping(false), 1100);
    return () => clearTimeout(timer);
  }, [active, reduced]);

  // Examples play on their own while visible, until someone picks one.
  useEffect(() => {
    if (reduced || userPicked || !inView) return undefined;
    const timer = setTimeout(() => setActive(index => (index + 1) % scenarios.length), cycle);
    return () => clearTimeout(timer);
  }, [active, inView, reduced, userPicked]);
  const voiceLive = site.agentPhone && site.voiceVerified;
  const smsLive = site.agentPhone && site.smsVerified;
  return (
    <section ref={section} className="agent-section section-shell" id="agent-demo">
      <motion.div className="mia-orb" aria-hidden="true" style={reduced ? undefined : { y: orbY, scale: orbScale }} />
      <div className="agent-copy">
        <RevealText className="eyebrow">Try it yourself</RevealText>
        <RevealHeading lines={["Meet *Mia,*", "your AI sales", "assistant."]} />
        <RevealText delay={.2}>
          Call Mia to see how an agent answers questions and qualifies leads.
        </RevealText>
        <VoiceLine active={!typing && inView && !reduced} />
        {voiceLive ? (
          <a href={`tel:${site.agentPhone}`} className="button button-lime">
            Call Mia, our AI assistant <span aria-hidden="true">↗</span>
          </a>
        ) : site.agentDemoUrl ? (
          <a
            href={site.agentDemoUrl}
            className="button button-lime"
            target="_blank"
            rel="noreferrer"
          >
            Try the live AI demo <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <Link to="/book-demo" className="button button-lime">
            Explore an agent demo <span aria-hidden="true">↗</span>
          </Link>
        )}
        {voiceLive && site.agentDemoUrl && (
          <a
            className="text-link agent-web-link"
            href={site.agentDemoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Or try the browser demo ↗
          </a>
        )}
        {site.agentDemoUrl && (
          <p className="agent-demo-note">Browser demo opens in ElevenLabs.</p>
        )}
        <p className="agent-availability">
          {voiceLive || smsLive || site.agentDemoUrl
            ? "Please use sample details in the demo."
            : "Request a demo to explore an agent for your business."}
        </p>
        {(voiceLive || smsLive) && (
          <div className="button-row">
            {smsLive && (
              <a className="text-link" href={`sms:${site.agentPhone}`}>
                Text the AI demo ↗
              </a>
            )}
            <span>
              {site.agentPhone === "+17864630490"
                ? "(786) 463-0490"
                : site.agentPhone}
            </span>
          </div>
        )}
      </div>
      <motion.div ref={panel} className="conversation-panel" style={reduced ? undefined : { y: panelY, rotate: panelRotate }}>
        <div className="conversation-heading">
          <span className="status-dot" />
          <strong>See an example</strong>
          <span className="sample-badge">Scripted preview</span>
        </div>
        <div
          className="scenario-buttons"
          aria-label="Choose a conversation example"
        >
          {scenarios.map((item, index) => (
            <button
              key={item.label}
              aria-pressed={active === index}
              onClick={() => { setUserPicked(true); setActive(index); }}
            >
              {item.label}
              {active === index && !userPicked && !reduced && inView && <motion.span key={active} className="scenario-timer" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: cycle / 1000, ease: "linear" }} />}
            </button>
          ))}
        </div>
        <div className="conversation" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={active} className="conversation-thread" exit={reduced ? undefined : { opacity: 0, y: -14, transition: { duration: .25 } }}>
              <motion.div className="chat-bubble visitor" initial={reduced ? false : { opacity: 0, x: 40, scale: .92 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .55, ease }}>
                <span>Visitor</span>
                <p>{scenario.question}</p>
              </motion.div>
              <AnimatePresence mode="wait" initial={false}>
                {typing ? (
                  <motion.div key="typing" className="chat-bubble agent chat-typing" initial={{ opacity: 0, y: 12, scale: .9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .9, transition: { duration: .15 } }} transition={{ duration: .35, ease }} aria-label="Mia is typing">
                    <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div key="answer" className="chat-bubble agent" initial={reduced ? false : { opacity: 0, y: 18, scale: .94, rotate: -1.5 }} animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} transition={{ duration: .6, ease }}>
                    <span>
                      <span aria-hidden="true" className="agent-spark">✳ </span>Moowo agent · example
                    </span>
                    <p>{scenario.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.p className="conversation-action" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: typing ? .35 : 1 }} transition={{ duration: .4, delay: typing ? 0 : .25 }}>{scenario.action}</motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="preview-caption">
          Scripted example — use the call button to talk to Mia.
        </p>
      </motion.div>
    </section>
  );
}
