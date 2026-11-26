import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RevealHeading, RevealText } from "./Reveal";

export default function ReelFullBleed() {
  const section = useRef(null);
  const video = useRef(null);
  const reduced = useReducedMotion();
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(!reduced);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [.84, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [44, 0]);
  const copyY = useTransform(scrollYProgress, [.4, 1], ["8vh", "0vh"]);

  useEffect(() => { if (reduced) setPlaying(false); }, [reduced]);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 });
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const element = video.current;
    // Only a blocked autoplay should flip the button; an interrupted play() is harmless.
    if (playing && visible) element.play().catch(error => { if (error.name === "NotAllowedError") setPlaying(false); });
    else element.pause();
  }, [playing, visible]);

  function toggleSound() {
    const next = !muted;
    setMuted(next);
    video.current.muted = next;
    if (!next && !playing) setPlaying(true);
  }

  return (
    <section ref={section} className="reel-bleed" aria-labelledby="reel-heading">
      <motion.div className="reel-bleed-frame" style={reduced ? undefined : { scale, borderRadius: radius }}>
        <video ref={video} muted loop playsInline preload="metadata" poster="/work/reel.jpg" aria-label="Moowo Media creative showreel">
          <source src="/work/reel.mp4" type="video/mp4" />
        </video>
        <div className="reel-bleed-shade" aria-hidden="true" />
        <motion.div className="reel-bleed-copy section-shell" style={reduced ? undefined : { y: copyY }}>
          <RevealText className="eyebrow">The Moowo reel</RevealText>
          <RevealHeading id="reel-heading" lines={["Thirty-six seconds.", "*Every* kind of work."]} delay={.15} />
        </motion.div>
        <div className="reel-bleed-controls">
          <button type="button" onClick={() => setPlaying(value => !value)} aria-pressed={playing}>{playing ? "Ⅱ Pause" : "▶︎ Play"}</button>
          <button type="button" onClick={toggleSound} aria-pressed={!muted}>{muted ? "Sound on" : "Sound off"}</button>
        </div>
      </motion.div>
    </section>
  );
}
