import React, { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
export default function Layout({ children }) {
  const { pathname, hash } = useLocation();
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
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
