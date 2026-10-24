import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

function BounceWord({ word, reduced, row }) {
  return <span className="footer-brand-row" aria-hidden="true">{[...word].map((letter, index) => (
    <motion.span key={index} variants={{ hidden: { y: reduced ? 0 : "70%", rotate: reduced ? 0 : (index % 2 ? 5 : -5) }, visible: { y: 0, rotate: 0 } }}
      transition={{ type: "spring", stiffness: 170, damping: 12, mass: 0.8, delay: reduced ? 0 : index * 0.065 + row * 0.12 }}>{letter}</motion.span>
  ))}</span>;
}

export default function Footer() {
  const reduced = useReducedMotion();
  const { pathname } = useLocation();
  return (
    <footer className="site-footer editorial-footer">
      <div className="footer-invitation"><h2>Have a good feeling?<br /><span>Let’s make something.</span></h2><Link to="/book-demo" className="round-link"><span>Let’s talk</span><span aria-hidden="true">↗</span></Link></div>
      <div className="footer-links">
        <a href="mailto:hello@moowomedia.com">hello@moowomedia.com ↗</a>
        <nav aria-label="Explore"><Link to="/services">Services</Link><Link to="/pages/clients">Our work</Link><Link to="/pages/us">Our approach</Link></nav>
        <nav aria-label="Stay connected"><a href="https://instagram.com/moowomedia" target="_blank" rel="noreferrer">Instagram ↗</a><Link to="/pages/newsletter">The Moowo Memo</Link><Link to="/pages/join-us">Join us</Link><Link to="/pages/clients-portal">Client support</Link></nav>
      </div>
      <motion.div key={pathname} className="footer-brand" initial={reduced ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Link to="/" aria-label="Moowo Media home"><BounceWord word="MOOWO" reduced={reduced} row={0} /><BounceWord word="MEDIA" reduced={reduced} row={1} /></Link>
      </motion.div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Moowo Media</span><span>Good content. Clear direction.</span><a href="#main-content">Back to top ↑</a></div>
    </footer>
  );
}
