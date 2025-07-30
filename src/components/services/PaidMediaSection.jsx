import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function PaidMediaSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: "🎯",
      title: "Strategy & Planning",
      description: "Custom media plans aligned with your business goals. From targeting to budget allocation."
    },
    {
      icon: "🧪",
      title: "Creative Testing",
      description: "Continuous testing framework to find high performers quickly with clear success metrics."
    },
    {
      icon: "📊",
      title: "Platform Management",
      description: "Expert management across Meta, Google, TikTok, and YouTube. Setup to optimization."
    }
  ];

  const platforms = [
    "Meta Ads", "Google Ads", "TikTok Ads", "YouTube Ads", "LinkedIn Ads"
  ];

  return (
    <div className="max-w-6xl mx-auto" ref={ref}>
      {/* Hero Section - Apple Style with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-24 relative"
      >
        {/* Glass background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 rounded-3xl"></div>
        <div className="absolute inset-0 backdrop-blur-2xl rounded-3xl"></div>
        
        <div className="relative z-10 p-16">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Performance-Driven <span className="text-blue-600">Paid Media</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We help brands scale with precision. Our media buying team combines deep platform expertise 
            with creative testing frameworks to drive measurable ROI.
          </p>
        </div>
      </motion.div>

      {/* Services Grid - Apple Style with Glass Effects */}
      <div className="grid md:grid-cols-3 gap-12 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
            transition={{ 
              delay: index * 0.2, 
              duration: 1, 
              ease: "easeOut" 
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="text-center group relative"
          >
            {/* Glass card effect */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500"></div>
            <div className="relative z-10 p-12">
              <div className="text-6xl mb-8 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">{service.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Platforms - Apple Style with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="relative mb-24"
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-2xl rounded-3xl border border-white/50"></div>
        <div className="relative z-10 p-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Platforms We Master</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <motion.div 
                key={platform} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  delay: 0.8 + index * 0.1, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-xl px-8 py-6 rounded-2xl text-center text-lg font-medium text-gray-700 hover:shadow-lg transition-all duration-300 border border-white/50"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Results Section - Apple Style with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="relative text-center"
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-2xl rounded-3xl shadow-2xl"></div>
        <div className="relative z-10 p-16 text-white">
          <h3 className="text-4xl font-bold mb-8">Want to see results like 3.5x ROAS?</h3>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Let's talk about how we can build a paid media strategy that actually works.
          </p>
          <a
            href="/WorkUs"
            className="inline-block bg-white/90 backdrop-blur-xl text-blue-600 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl border border-white/50"
          >
            Work with Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
