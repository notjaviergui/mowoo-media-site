import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isWorkUsPage = location.pathname === "/pages/WorkUs";
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
    { label: "Clients", to: "/pages/clients" },
    { label: "Us", to: "/pages/us" },
    { label: "Newsletter", to: "/pages/newsletter" },
    { label: "Join Us", to: "/pages/join-us" },
  ];

  return (
    <div className={`fixed top-0 left-0 z-50 w-full px-8 py-6 flex items-center justify-between transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"} ${isWorkUsPage ? "bg-white" : "bg-transparent"}`}>
      {/* Logo */}
      <Link
        to="/"
        className={`text-4xl font-black tracking-wide hover:scale-105 transition-transform duration-200 ${isHomePage ? "text-white" : isWorkUsPage ? "text-blue-600" : "text-black"}`}
      >
        Moowo Media
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4 text-white font-medium text-sm">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`px-4 py-2 rounded-full border transition ${
              isHomePage
                ? "border-white text-white hover:bg-white hover:text-black"
                : isWorkUsPage
                ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                : "border-black text-white bg-black hover:bg-white hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Hamburger (Mobile Only) */}
      <button
        className="md:hidden z-20 flex flex-col justify-between w-6 h-5 focus:outline-none transform transition duration-200 hover:scale-110"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span
          className={`h-[3px] w-full ${isWorkUsPage ? "bg-blue-600" : "bg-white"} transform transition duration-300 ease-in-out ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-[3px] w-full ${isWorkUsPage ? "bg-blue-600" : "bg-white"} transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[3px] w-full ${isWorkUsPage ? "bg-blue-600" : "bg-white"} transform transition duration-300 ease-in-out ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-10 ${isWorkUsPage ? "bg-white" : "bg-black bg-opacity-90"} flex flex-col items-center justify-center space-y-6 ${isWorkUsPage ? "text-blue-600" : "text-white"} text-xl font-semibold md:hidden transition duration-300`}>
          <button
            className={`absolute top-6 right-8 ${isWorkUsPage ? "text-blue-600" : "text-white"} text-3xl font-bold transform transition duration-200 hover:scale-110`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            &times;
          </button>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-2 rounded-full border transition ${
                isHomePage
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : isWorkUsPage
                  ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  : "border-black text-white bg-black hover:bg-white hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
