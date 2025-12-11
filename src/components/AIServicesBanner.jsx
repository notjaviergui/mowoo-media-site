import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  {
    id: 'agents',
    icon: '🤖',
    title: 'AI Agents',
    subtitle: '24/7 Customer Engagement',
    description: 'Never miss a lead again. AI agents handle inquiries, qualify leads, and book meetings automatically.',
    link: '/ai-agents',
    color: 'from-purple-600 via-blue-600 to-cyan-600',
    textColor: 'text-cyan-200'
  },
  {
    id: 'video',
    icon: '🎬',
    title: 'AI Ad Creation',
    subtitle: 'Lightning-Fast Production',
    description: 'Generate professional ads in minutes, not days. Unlimited iterations with AI-powered creative.',
    link: '/pages/services',
    color: 'from-purple-600 via-pink-600 to-red-600',
    textColor: 'text-pink-200'
  }
];

export default function AIServicesBanner() {
  const [activeService, setActiveService] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % SERVICES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentService = SERVICES[activeService];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-6 md:px-16 py-12 relative overflow-hidden"
    >
      {/* Smooth Background Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className={`absolute inset-0 bg-gradient-to-b transition-all duration-1000 ${
            currentService.id === 'agents'
              ? 'from-purple-50 via-blue-50 to-white'
              : 'from-purple-50 via-pink-50 to-white'
          }`}
          style={{
            background: currentService.id === 'agents'
              ? 'linear-gradient(to bottom, #faf5ff 0%, #e0e7ff 50%, #ffffff 100%)'
              : 'linear-gradient(to bottom, #faf5ff 0%, #fce7f3 50%, #ffffff 100%)'
          }}
        />
      </AnimatePresence>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Combined Banner - Using AnimatePresence for proper transitions */}
        <div className="relative min-h-[450px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className={`absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-r ${currentService.color} p-6 md:p-8 lg:p-10 shadow-2xl`}
            >
              {/* Gleam/Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear"
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  width: '50%',
                  transform: 'skewX(-20deg)'
                }}
              />
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
                <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    <span className="text-xl md:text-2xl">{currentService.icon}</span>
                    <span className="text-xs md:text-sm font-semibold text-white">NEW SERVICE</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                    {currentService.title}
                  </h2>
                  <p className={`text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 ${currentService.textColor}`}>
                    {currentService.subtitle}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6 max-w-2xl">
                    {currentService.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                    <Link
                      to={currentService.link}
                      className="px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                    >
                      Learn More →
                    </Link>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm whitespace-nowrap"
                    >
                      Book Demo
                    </a>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="hidden md:block relative flex-shrink-0">
                  <motion.div
                    key={`icon-${activeService}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-6xl lg:text-8xl opacity-80"
                  >
                    {currentService.icon}
                  </motion.div>
                </div>
              </div>

              {/* Service Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeService 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75 w-2'
                    }`}
                    aria-label={`Switch to ${service.title}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Links Below Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>{service.icon}</span>
              <span>{service.title}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

