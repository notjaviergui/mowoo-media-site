import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MomentumScroll from "./MomentumScroll";
import BrandIntro, { shouldShowIntro } from "./BrandIntro";
export default function Layout({ children }) {
  const { pathname, hash } = useLocation();
  const contactPage = ["/book-demo", "/WorkUs", "/contact"].includes(pathname);
  const [intro, setIntro] = useState(() => shouldShowIntro(pathname, hash));
  const [introBlocking, setIntroBlocking] = useState(intro);
  const completeIntro = useCallback(() => setIntro(false), []);
  useEffect(() => { if (pathname !== "/" || hash) setIntro(false); }, [pathname, hash]);
  const firstVisit = useRef(true);
  useLayoutEffect(() => {
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "instant" });
    } else window.scrollTo({ top: 0, behavior: "instant" });
    if (!firstVisit.current)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    firstVisit.current = false;
    const titles = {
      "/": "Content that moves your business forward",
      "/services": "Our services",
      "/book-demo": "Book a demo",
      "/pages/clients": "Our work",
      "/pages/us": "Our approach",
      "/pages/newsletter": "The Moowo Memo",
      "/pages/join-us": "Create with us",
      "/pages/clients-portal": "Client support",
    };
    document.title = `${titles[pathname] || "Performance content & automation"} | Moowo Media`;
  }, [pathname, hash]);
  return (
    <>
      <MomentumScroll />
      <AnimatePresence onExitComplete={() => { setIntroBlocking(false); document.getElementById("main-content")?.focus({ preventScroll: true }); }}>
        {intro && <BrandIntro key="brand-intro" onComplete={completeIntro} />}
      </AnimatePresence>
      <div className="site-content" inert={introBlocking ? "" : undefined}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {!contactPage && <NavBar />}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      {!contactPage && <Footer />}
      </div>
    </>
  );
}
