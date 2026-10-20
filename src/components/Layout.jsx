import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
export default function Layout({ children }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    } else window.scrollTo(0, 0);
    const titles = {
      "/": "Content that moves your business forward",
      "/services": "Our services",
      "/book-demo": "Book a demo",
      "/pages/clients": "Our work",
      "/pages/us": "Our approach",
      "/pages/newsletter": "The Moowo Memo",
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
