import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function AIAgents() {
  const [activeTab, setActiveTab] = useState('before');
  const { toggleTheme, isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const painPoints = [
    {
      icon: "😰",
      title: "Lost Leads",
      description: "Potential customers slip away when you can't respond instantly. Every minute counts."
    },
    {
      icon: "⏰",
      title: "24/7 Availability Gap",
      description: "Your team can't be online all the time, but your customers expect instant responses."
    },
    {
      icon: "💰",
      title: "High Labor Costs",
      description: "Hiring and training customer service staff is expensive and time-consuming."
    },
    {
      icon: "📉",
      title: "Missed Opportunities",
      description: "Without proper lead qualification, you're wasting time on unqualified prospects."
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Instant Response",
      description: "AI agents respond to inquiries in seconds, capturing leads before they go cold."
    },
    {
      icon: "🎯",
      title: "Smart Qualification",
      description: "Automatically qualify leads and route them to the right team member at the perfect time."
    },
    {
      icon: "📅",
      title: "Auto-Booking",
      description: "Seamlessly schedule meetings and demos without back-and-forth emails."
    },
    {
      icon: "🔗",
      title: "Media Integration",
      description: "Tightly integrated with your paid media campaigns for seamless customer journeys."
    },
    {
      icon: "📊",
      title: "Full Analytics",
      description: "Track every interaction, conversion, and ROI in real-time dashboards."
    },
    {
      icon: "🚀",
      title: "Easy Setup",
      description: "Get started in days, not months. No complex integrations or technical headaches."
    }
  ];

  const beforeAfter = {
    before: {
      title: "Before AI Agents",
      points: [
        "Leads wait hours or days for responses",
        "Manual lead qualification takes time",
        "Missed calls and messages pile up",
        "No integration with media campaigns",
        "Difficult to track lead sources",
        "High customer acquisition costs"
      ]
    },
    after: {
      title: "After AI Agents",
      points: [
        "Instant responses capture leads immediately",
        "Automated qualification saves hours daily",
        "24/7 availability never misses an opportunity",
        "Seamless integration with all media channels",
        "Complete visibility into lead sources",
        "Reduced costs with higher conversion rates"
      ]
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Clickable Fade Background - Smooth Gradient from Light to Dark */}
      <motion.div
        onClick={toggleTheme}
        className="fixed inset-0 z-0 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Smooth gradient that fades from light at top to darker at bottom */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isDark 
            ? 'bg-gradient-to-b from-gray-800 via-gray-850 to-gray-900' 
            : 'bg-gradient-to-b from-purple-50 via-blue-100 to-gray-200'
        }`} 
        style={{
          background: isDark 
            ? 'linear-gradient(to bottom, #1f2937 0%, #111827 50%, #030712 100%)'
            : 'linear-gradient(to bottom, #faf5ff 0%, #e0e7ff 30%, #c7d2fe 60%, #a5b4fc 100%)'
        }}></div>
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 backdrop-blur-[2px] opacity-30"></div>
      </motion.div>

      {/* Hero Section - SaaS Landing Style */}
      <section className="pt-32 pb-20 px-6 md:px-16 relative z-10">
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Theme Toggle Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className={`mb-4 text-xs transition-colors duration-500 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            💡 Click anywhere to toggle dark mode
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold shadow-lg"
          >
            <span>🤖</span>
            <span>AI-Powered Customer Engagement</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Never Miss a Lead Again.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              AI Agents That Work 24/7
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-500 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Stop losing leads to slow responses. Our AI agents handle customer inquiries, qualify leads, 
            and book meetings automatically—seamlessly integrated with your media campaigns.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 text-center w-full sm:w-auto"
            >
              Book Demo →
            </a>
            <Link
              to="/contact"
              className="px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg text-center w-full sm:w-auto"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`flex flex-wrap justify-center gap-8 text-sm transition-colors duration-500 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Easy Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Media Integration</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              The Problem: <span className="text-red-600">Lost Leads & Wasted Time</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Every day, businesses lose potential customers because they can't respond fast enough.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${
                  isDark ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-white/80'
                }`}
              >
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{point.title}</h3>
                <p className={`leading-relaxed transition-colors duration-500 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              The Solution: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">AI Agents</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Transform your customer engagement with AI that works around the clock.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30' : 'bg-gradient-to-br from-purple-50 to-blue-50'
                }`}></div>
                <div className={`relative p-8 rounded-2xl border shadow-lg group-hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${
                  isDark ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white/80 border-gray-200'
                }`}>
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{benefit.title}</h3>
                  <p className={`leading-relaxed transition-colors duration-500 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* See How It Works - Before/After Section */}
      <section className="py-20 px-6 md:px-16 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              See How It Works
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Compare the difference AI agents make in your business
            </p>
          </motion.div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-12">
            <div className={`inline-flex rounded-xl p-2 shadow-lg backdrop-blur-sm transition-colors duration-500 ${
              isDark ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-white/80'
            }`}>
              <button
                onClick={() => setActiveTab('before')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'before'
                    ? 'bg-red-100 text-red-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'after'
                    ? 'bg-green-100 text-green-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                After
              </button>
            </div>
          </div>

          {/* Before/After Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'before' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'before' ? 50 : -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className={`rounded-3xl shadow-2xl p-8 md:p-12 border-2 backdrop-blur-sm transition-colors duration-500 ${
                activeTab === 'before' 
                  ? isDark ? 'bg-gray-800/60 border-red-500/50' : 'bg-white/80 border-red-200'
                  : isDark ? 'bg-gray-800/60 border-green-500/50' : 'bg-white/80 border-green-200'
              }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`text-5xl ${activeTab === 'before' ? 'text-red-500' : 'text-green-500'}`}>
                    {activeTab === 'before' ? '😰' : '✨'}
                  </div>
                  <h3 className={`text-3xl font-bold ${
                    activeTab === 'before' ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {beforeAfter[activeTab].title}
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {beforeAfter[activeTab].points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className={`text-2xl flex-shrink-0 ${
                        activeTab === 'before' ? 'text-red-500' : 'text-green-500'
                      }`}>
                        {activeTab === 'before' ? '✗' : '✓'}
                      </span>
                      <span className={`text-lg leading-relaxed pt-1 transition-colors duration-500 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className={`border-2 rounded-2xl p-6 backdrop-blur-sm transition-colors duration-500 ${
              isDark ? 'bg-gray-800/50 border-red-500/30' : 'bg-red-50/80 border-red-200'
            }`}>
              <h4 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                isDark ? 'text-red-400' : 'text-red-700'
              }`}>Without AI Agents</h4>
              <div className={`space-y-3 transition-colors duration-500 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">●</span>
                  <span>Manual responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">●</span>
                  <span>Limited hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">●</span>
                  <span>Missed opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">●</span>
                  <span>Higher costs</span>
                </div>
              </div>
            </div>
            
            <div className={`border-2 rounded-2xl p-6 backdrop-blur-sm transition-colors duration-500 ${
              isDark ? 'bg-gray-800/50 border-green-500/30' : 'bg-green-50/80 border-green-200'
            }`}>
              <h4 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>With AI Agents</h4>
              <div className={`space-y-3 transition-colors duration-500 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <span>Instant responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <span>Never miss a lead</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <span>Lower costs, higher ROI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 md:px-16 relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Never Miss a Lead Again?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              See how AI agents can transform your customer engagement. Book a demo and get started in days.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-white text-purple-600 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Book Demo Now →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

