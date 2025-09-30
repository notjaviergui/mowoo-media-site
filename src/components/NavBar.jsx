import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isWorkUsPage = location.pathname === "/pages/WorkUs";
  const isLightBackground = location.pathname !== "/" && location.pathname !== "/pages/clients-portal";
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
    <div className={`fixed top-0 left-0 z-50 w-full px-8 py-6 flex items-center justify-between transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"} ${isLightBackground ? "bg-white text-black" : "bg-transparent text-white"}`}>
      {/* Logo */}
      <Link
        to="/"
        className="text-4xl font-black tracking-wide hover:scale-110 transition-transform duration-200"
      >
        Moowo Media
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4 font-medium text-lg items-center">
        {/* Floating AI Video Button - Left Side */}
        <Link
          to="/pages/services"
          className="relative mr-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 hover:from-purple-500 hover:to-blue-500 active:scale-95 tracking-wide animate-bounce group"
          style={{
            animation: 'float 3s ease-in-out infinite, glow 2s ease-in-out infinite'
          }}
        >
          <span className="flex items-center gap-2">
            🤖 AI Video
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-semibold animate-pulse group-hover:bg-white/30 transition-all duration-300">NEW</span>
          </span>
        </Link>
        
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="px-6 py-2 rounded-full border text-lg font-medium transition-all transform hover:scale-105 hover:shadow-md backdrop-blur-md bg-white/10 hover:bg-white/20 border-current text-current hover:text-black active:scale-95 tracking-wide"
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
          {/* Mobile AI Video Button - First */}
          <Link
            to="/pages/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 hover:from-purple-500 hover:to-blue-500 active:scale-95 tracking-wide animate-bounce group"
            style={{
              animation: 'float 3s ease-in-out infinite, glow 2s ease-in-out infinite'
            }}
          >
            <span className="flex items-center gap-2">
              🤖 AI Video
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-semibold animate-pulse group-hover:bg-white/30 transition-all duration-300">NEW</span>
            </span>
          </Link>
          
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2 rounded-full border text-lg font-medium transition-all transform hover:scale-105 hover:shadow-md backdrop-blur-md bg-white/10 hover:bg-white/20 border-current text-current hover:text-black active:scale-95 tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
