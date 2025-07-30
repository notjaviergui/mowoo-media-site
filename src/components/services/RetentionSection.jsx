import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const RetentionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const channels = [
    {
      icon: "📧",
      title: "Email Automations",
      description: "Welcome emails, abandoned carts, and post-purchase flows—automated and personalized to convert."
    },
    {
      icon: "💬",
      title: "SMS & iMessage",
      description: "Real-time messages delivered where your customers pay attention. Short, smart, and perfectly timed."
    },
    {
      icon: "🔄",
      title: "Smart Funnels",
      description: "From first click to long-term loyalty. Our funnel systems guide customers every step of the way."
    }
  ];

  const features = [
    "AI-powered segmentation",
    "Live performance optimization", 
    "Smart send-time predictions",
    "Unified automations across tools",
    "Behavior-based logic flows",
    "Built for Shopify, Klaviyo, Meta"
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
            Smarter Retention = <span className="text-blue-600">More Revenue</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We turn one-time buyers into loyal customers with smart, automated retention systems 
            that drive results—email, SMS, iMessage, and beyond.
          </p>
        </div>
      </motion.div>

      {/* Channels Grid - Apple Style with Glass Effects */}
      <div className="grid md:grid-cols-3 gap-12 mb-24">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.title}
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
                {channel.icon}
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">{channel.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{channel.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features Section - Apple Style with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="relative mb-24"
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-2xl rounded-3xl border border-white/50"></div>
        <div className="relative z-10 p-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Next-Gen Funnel Tech</h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            We use AI, real-time behavior tracking, and journey mapping to build smarter funnels 
            that feel personal and convert better.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={feature} 
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
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section - Apple Style with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="relative text-center"
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-2xl rounded-3xl shadow-2xl"></div>
        <div className="relative z-10 p-16 text-white">
          <h3 className="text-4xl font-bold mb-8">Ready to Build Your Retention Engine?</h3>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Let's create automated systems that turn customers into advocates.
          </p>
          <a
            href="/WorkUs"
            className="inline-block bg-white/90 backdrop-blur-xl text-blue-600 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl border border-white/50"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default RetentionSection;
