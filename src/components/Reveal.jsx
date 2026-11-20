import React from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

// Text reveals shared by the work, sea and reel sections.
// Lines use *asterisks* to mark the lime highlight, e.g. "Made to *move.*".
// Without `progress` the text animates once when scrolled into view;
// with a `progress` MotionValue (0..1) it is scrubbed by scroll inside `range`.

const ease = [.22, 1, .36, 1];

function tokenize(line) {
  return line.split(/(\*[^*]+\*)/).filter(Boolean).flatMap(part => part.startsWith("*")
    ? [{ text: part.slice(1, -1), highlight: true }]
    : part.split(/\s+/).filter(Boolean).map(text => ({ text })));
}

const plain = lines => lines.join(" ").replace(/\*/g, "");

const wordVariants = {
  hidden: { y: "110%", rotate: 6 },
  show: { y: "0%", rotate: 0, transition: { duration: .85, ease } },
};
const highlightVariants = {
  hidden: { scale: .35, rotate: 10, opacity: 0 },
  show: { scale: 1, rotate: -3, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 17, mass: .8 } },
};

function ScrubbedToken({ token, progress, start, end }) {
  const y = useTransform(progress, [start, end], ["110%", "0%"]);
  const rotate = useTransform(progress, [start, end], [6, 0]);
  const scale = useTransform(progress, [start, end], [.35, 1]);
  const highlightRotate = useTransform(progress, [start, end], [10, -3]);
  const opacity = useTransform(progress, [start, start + (end - start) * .4], [0, 1]);
  if (token.highlight) return <motion.span className="reveal-hl" style={{ scale, rotate: highlightRotate, opacity }}>{token.text}</motion.span>;
  return <span className="reveal-mask"><motion.span className="reveal-word" style={{ y, rotate }}>{token.text}</motion.span></span>;
}

export function RevealHeading({ as = "h2", lines, id, className = "", progress, range = [0, 1], delay = 0, stagger = .07 }) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  const tokenLines = lines.map(tokenize);
  const total = tokenLines.reduce((sum, line) => sum + line.length, 0);
  const [from, to] = range;
  const span = to - from;
  let index = 0;

  const content = tokenLines.map((line, lineIndex) => (
    <span className="reveal-line" key={lineIndex}>
      {line.map((token, tokenIndex) => {
        const position = index++;
        const spacer = tokenIndex < line.length - 1 ? " " : null;
        if (reduced) return <React.Fragment key={tokenIndex}>{token.highlight ? <span className="reveal-hl is-static">{token.text}</span> : token.text}{spacer}</React.Fragment>;
        if (progress) {
          const start = from + (position / total) * span * .55;
          return <React.Fragment key={tokenIndex}><ScrubbedToken token={token} progress={progress} start={start} end={start + span * .45} />{spacer}</React.Fragment>;
        }
        return <React.Fragment key={tokenIndex}>{token.highlight
          ? <motion.span className="reveal-hl" variants={highlightVariants}>{token.text}</motion.span>
          : <span className="reveal-mask"><motion.span className="reveal-word" variants={wordVariants}>{token.text}</motion.span></span>}{spacer}</React.Fragment>;
      })}
    </span>
  ));

  const viewProps = progress || reduced ? {} : {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: .6 },
    variants: { hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } },
  };
  return (
    <Tag id={id} className={`reveal-heading ${className}`} {...viewProps}>
      <span className="sr-only">{plain(lines)}</span>
      <span aria-hidden="true">{content}</span>
    </Tag>
  );
}

export function RevealText({ as = "p", className = "", children, progress, range = [0, 1], delay = 0 }) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  const fallback = useMotionValue(1);
  const source = progress ?? fallback;
  const opacity = useTransform(source, range, [0, 1]);
  const y = useTransform(source, range, [28, 0]);
  if (reduced) return <Tag className={className}>{children}</Tag>;
  if (progress) return <Tag className={className} style={{ opacity, y }}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: .8 }}
      transition={{ duration: .9, delay, ease }}
    >
      {children}
    </Tag>
  );
}
