import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const AI_SERVICES = [
  {
    id: 'agents',
    icon: '🤖',
    label: 'AI Agents',
    link: '/ai-agents'
  },
  {
    id: 'video',
    icon: '🎬',
    label: 'AI Video',
    link: '/pages/services'
  }
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAIService, setActiveAIService] = useState(0);
  const { isDark } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isWorkUsPage = location.pathname === "/pages/WorkUs";
  const isLightBackground = (location.pathname !== "/" && location.pathname !== "/pages/clients-portal") || isDark;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-rotate AI service button every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAIService((prev) => (prev + 1) % AI_SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
        {/* Combined Rotating AI Services Button */}
        <div className="relative mr-4 overflow-hidden rounded-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAIService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="inline-block relative"
            >
              <Link
                to={AI_SERVICES[activeAIService].link}
                className="relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 hover:from-purple-500 hover:to-blue-500 active:scale-95 tracking-wide group inline-flex items-center gap-2 overflow-hidden"
              >
                {/* Gleam Effect */}
                <motion.div
                  className="absolute inset-0 opacity-40"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                    width: '50%',
                    transform: 'skewX(-20deg)'
                  }}
                />
                <span className="relative z-10">{AI_SERVICES[activeAIService].icon}</span>
                <span className="relative z-10">{AI_SERVICES[activeAIService].label}</span>
                <span className="relative z-10 text-xs bg-white/20 px-2 py-1 rounded-full font-semibold animate-pulse group-hover:bg-white/30 transition-all duration-300">NEW</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        
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
          {/* Mobile Combined AI Services Button */}
          <div className="relative overflow-hidden rounded-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAIService}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="inline-block relative"
              >
                <Link
                  to={AI_SERVICES[activeAIService].link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 hover:from-purple-500 hover:to-blue-500 active:scale-95 tracking-wide group inline-flex items-center gap-2 overflow-hidden"
                >
                  {/* Gleam Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-40"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "linear"
                    }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                      width: '50%',
                      transform: 'skewX(-20deg)'
                    }}
                  />
                  <span className="relative z-10">{AI_SERVICES[activeAIService].icon}</span>
                  <span className="relative z-10">{AI_SERVICES[activeAIService].label}</span>
                  <span className="relative z-10 text-xs bg-white/20 px-2 py-1 rounded-full font-semibold animate-pulse group-hover:bg-white/30 transition-all duration-300">NEW</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
          
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
