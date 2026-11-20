import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { contentCount, shortClients, shorts } from "../data/shorts";
import ShortsLightbox from "./ShortsLightbox";
import { RevealHeading, RevealText } from "./Reveal";

// One spring for every layer so videos, rectangles and the background glide together.
const smoothing = { stiffness: 70, damping: 22, mass: .5, restDelta: .0005 };

// Deterministic pseudo-random numbers so the layout is stable between renders.
function seeded(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function useSmallScreen() {
  const query = "(max-width: 760px)";
  const [small, setSmall] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setSmall(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return small;
}

// Videos sit at different depths: near ones are big, sharp and fast; far ones small, soft and slow.
function buildField(items, small, full) {
  const random = seeded(full ? 29 : 11);
  const nearCount = small ? 6 : full ? 14 : 9;
  const farCount = small ? 7 : full ? 18 : 14;
  const lanes = small ? [2, 52, 26] : [3, 70, 22, 50, 84, 12, 38, 62];
  const tiles = [];
  for (let index = 0; index < nearCount + farCount; index += 1) {
    const near = index < nearCount;
    const order = near ? index : index - nearCount;
    const count = near ? nearCount : farCount;
    const depth = near ? .72 + random() * .28 : .28 + random() * .34;
    tiles.push({
      key: `${near ? "n" : "f"}${index}`,
      item: items[(near ? order : order * 5 + 3) % items.length],
      depth,
      near,
      left: Math.min(small ? 56 : 86, Math.max(1, lanes[(order + (near ? 0 : 3)) % lanes.length] + (random() - .5) * (small ? 10 : 12))),
      enterAt: -.22 + (order / count) * (near ? .86 : .95) + random() * .05,
      phase: random() * Math.PI * 2,
      rotate: (random() - .5) * (near ? 7 : 10),
    });
  }
  const rectangles = Array.from({ length: small ? 30 : 64 }, () => ({
    left: random() * 98,
    top: random() * 100,
    width: small ? 7 + random() * 8 : 2.4 + random() * 3.4,
    shade: random(),
    rotate: (random() - .5) * 12,
  }));
  return { tiles, rectangles };
}

function SeaVideo({ tile, progress, small, onOpen }) {
  const video = useRef(null);
  const { item, depth, enterAt, phase } = tile;
  const client = shortClients[item.client];
  const speed = 90 + depth * 250; // vh travelled over the whole pinned scroll
  const start = 100 + enterAt * speed; // top edge reaches the bottom of the screen at `enterAt`
  const sway = (small ? 3 : 1.6) + depth * 2.6;
  const y = useTransform(progress, value => `${start - value * speed}vh`);
  const x = useTransform(progress, value => `${Math.sin(value * Math.PI * (1.4 + depth) + phase) * sway}vw`);
  const rotate = useTransform(progress, value => tile.rotate + Math.sin(value * Math.PI * 1.2 + phase) * 4 * depth);
  const scale = useTransform(progress, value => .94 + Math.min(Math.max((value - enterAt) * 1.6, 0), 1) * .12);
  const playable = tile.near || !small;

  useEffect(() => {
    if (!playable) return undefined;
    const element = video.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.play().catch(() => {});
      else element.pause();
    }, { threshold: .15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [playable, item.loop]);

  const width = small ? 16 + depth * 30 : 4.5 + depth * 12;
  return (
    <motion.button
      type="button"
      className={`sea-front-tile ${tile.near ? "is-near" : "is-far"}`}
      style={{ left: `${tile.left}%`, width: `${width}vw`, zIndex: Math.round(depth * 10) + (tile.near ? 4 : 1), x, y, rotate, scale, "--tile-depth": depth }}
      onClick={onOpen}
      tabIndex={tile.near ? 0 : -1}
      aria-hidden={tile.near ? undefined : true}
      aria-label={tile.near ? `Play “${item.title}” for ${client.name}` : undefined}
    >
      <span className="sea-front-card">
        <video ref={video} muted loop playsInline preload="none" poster={item.poster} src={playable ? item.loop : undefined} aria-hidden="true" tabIndex={-1} />
        {tile.near && <span className="sea-tile-label">{client.short}</span>}
        {tile.near && <span className="sea-tile-play" aria-hidden="true">▶</span>}
      </span>
    </motion.button>
  );
}

function StaticTile({ item, onOpen }) {
  const client = shortClients[item.client];
  return (
    <button type="button" className="sea-front-tile" onClick={onOpen} aria-label={`Play “${item.title}” for ${client.name}`}>
      <span className="sea-front-card">
        <img src={item.poster} alt="" loading="lazy" />
        <span className="sea-tile-label">{client.short}</span>
        <span className="sea-tile-play" aria-hidden="true">▶</span>
      </span>
    </button>
  );
}

function ClientFilter({ value, onChange }) {
  const options = [["all", "All work"], ...Object.entries(shortClients).map(([key, client]) => [key, client.name])];
  return (
    <div className="sea-filter" role="group" aria-label="Filter short-form by client">
      {options.map(([key, label]) => <button type="button" key={key} aria-pressed={value === key} onClick={() => onChange(key)}>{label}</button>)}
    </div>
  );
}

const headlineLines = ["We don’t just post.", "We *flood the feed.*"];
const countTarget = parseInt(contentCount, 10) || 0;
const countSuffix = contentCount.replace(/^\d+/, "");

export default function ContentSea({ variant = "teaser" }) {
  const section = useRef(null);
  const reduced = useReducedMotion();
  const small = useSmallScreen();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const full = variant === "full";

  const items = useMemo(() => shorts.filter(item => filter === "all" || item.client === filter), [filter]);
  const field = useMemo(() => buildField(items, small, full), [items, small, full]);

  // Pinned journey through the field, smoothed by a spring.
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, smoothing);
  // The section sliding into view drives the headline reveal.
  const { scrollYProgress: entryRaw } = useScroll({ target: section, offset: ["start 90%", "start 5%"] });
  const entry = useSpring(entryRaw, smoothing);

  const farY = useTransform(progress, [0, 1], ["6vh", "-34vh"]);
  const nearY = useTransform(progress, [0, 1], ["14vh", "-70vh"]);
  const farX = useTransform(progress, value => `${Math.sin(value * Math.PI * 1.5) * 1.5}vw`);
  const nearX = useTransform(progress, value => `${Math.sin(value * Math.PI * 1.5 + 1.2) * -2.5}vw`);
  const darkness = useTransform(progress, [.46, .8], [0, 1]);
  const copyOpacity = useTransform(progress, [.3, .46], [1, 0]);
  const copyY = useTransform(progress, [0, .46], ["0vh", "-12vh"]);
  const copyScale = useTransform(progress, [0, .46], [1, .92]);
  const copyBlur = useTransform(progress, [.3, .46], ["blur(0px)", "blur(6px)"]);
  const countValue = useTransform(progress, [.56, .78], [0, countTarget]);
  const countText = useTransform(countValue, value => `${Math.round(value)}${countSuffix}`);
  const countOpacity = useTransform(progress, [.54, .62], [0, 1]);
  const countScale = useTransform(progress, [.54, .8], [.86, 1]);

  const lightbox = open != null && <ShortsLightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />;
  const openItem = item => setOpen(items.findIndex(candidate => candidate.id === item.id));

  if (reduced) {
    const visible = full ? items : items.slice(0, small ? 4 : 6);
    return (
      <section className={`content-sea is-static content-sea-${variant}`} id="content-sea" aria-labelledby="sea-heading">
        <div className="sea-static-copy section-shell">
          <RevealHeading id="sea-heading" lines={headlineLines} />
          <p className="sea-count"><strong>{contentCount}</strong> videos and counting.</p>
          {full && <ClientFilter value={filter} onChange={setFilter} />}
        </div>
        <div className="sea-static-grid section-shell">
          {visible.map(item => <StaticTile key={item.id} item={item} onOpen={() => openItem(item)} />)}
        </div>
        {lightbox}
      </section>
    );
  }

  const rectangles = depthGroup => field.rectangles.filter((_, index) => index % 2 === depthGroup).map((tile, index) => (
    <span key={index} style={{ left: `${tile.left}%`, top: `${tile.top}%`, width: `${tile.width * (depthGroup ? 1.25 : .8)}vw`, opacity: depthGroup ? .55 + tile.shade * .4 : .22 + tile.shade * .3, transform: `rotate(${tile.rotate}deg)` }} />
  ));

  return (
    <section ref={section} className={`content-sea content-sea-${variant}`} id="content-sea" aria-labelledby="sea-heading">
      <div className="sea-pin">
        <motion.div className="sea-rects is-far" aria-hidden="true" style={{ y: farY, x: farX }}>{rectangles(0)}</motion.div>
        <motion.div className="sea-rects is-near" aria-hidden="true" style={{ y: nearY, x: nearX }}>{rectangles(1)}</motion.div>
        <motion.div className="sea-darkness" aria-hidden="true" style={{ opacity: darkness }} />
        <motion.div className="sea-copy section-shell" style={{ opacity: copyOpacity, y: copyY, scale: copyScale, filter: copyBlur }}>
          <RevealHeading id="sea-heading" lines={headlineLines} progress={entry} range={[.2, 1]} />
          <RevealText className="sea-hint" progress={entry} range={[.75, 1]}>Scroll through it. Tap any video for sound. <span aria-hidden="true">↓</span></RevealText>
        </motion.div>
        <motion.div className="sea-count" style={{ opacity: countOpacity, scale: countScale }}>
          <motion.strong aria-hidden="true">{countText}</motion.strong>
          <span className="sr-only">{contentCount}</span>
          <RevealHeading as="span" className="sea-count-label" lines={["videos and counting.", "Made by *Moowo.*"]} progress={progress} range={[.6, .82]} />
        </motion.div>
        <div className="sea-field">
          {field.tiles.map(tile => <SeaVideo key={`${tile.key}-${tile.item.id}`} tile={tile} progress={progress} small={small} onOpen={() => openItem(tile.item)} />)}
        </div>
        {full && <ClientFilter value={filter} onChange={value => { setFilter(value); setOpen(null); }} />}
      </div>
      {lightbox}
    </section>
  );
}
