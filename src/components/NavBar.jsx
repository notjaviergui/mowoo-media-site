import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isWorkUsPage = location.pathname === "/pages/WorkUs";
  const isLightBackground = false; // globally dark theme
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 10) {
        setIsVisible(true); // always show when at the top
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Services", to: "/components/services/creativesection" },
    { label: "Work", to: "/pages/clients" },
    { label: "Us", to: "/pages/us" },
    { label: "Newsletter", to: "/pages/newsletter" },
    { label: "Join Us", to: "/pages/join-us" },
    { label: "Clients", to: "/pages/clients-portal"},
  ];

  return (
    <div className={`fixed top-0 left-0 z-50 w-full px-8 py-6 flex items-center justify-between transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"} bg-transparent text-foreground`}>
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl md:text-3xl font-black uppercase tracking-tight hover:text-electric-green transition-colors duration-300"
      >
        Moowo Media
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="hover:text-electric-green transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Hamburger (Mobile Only) */}
      <button
        className="md:hidden z-20 flex flex-col justify-between w-6 h-5 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span
          className={`h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
            isMobileMenuOpen ? "rotate-45 translate-y-2 bg-electric-green" : ""
          }`}
        />
        <span
          className={`h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2.5 bg-electric-green" : ""
          }`}
        />
      </button>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-background flex flex-col items-center justify-center space-y-8 text-white text-3xl font-black uppercase tracking-tight md:hidden transition duration-300">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-electric-green transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
