import React from "react";
import { motion, useInView } from "framer-motion";
import { useInView as useInViewObserver } from 'react-intersection-observer';

const WebsitesSection = () => {
  const [ref, inView] = useInViewObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built for speed with optimized performance and SEO baked in"
    },
    {
      icon: "📱", 
      title: "Mobile First",
      description: "Every site optimized for mobile with responsive design"
    },
    {
      icon: "🔄",
      title: "Scalable",
      description: "Modular architecture that grows with your business"
    }
  ];

  const techStack = [
    "React.js & Next.js", "Headless CMS", "Shopify Integration", "SEO Optimization"
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
            Web Experiences That <span className="text-blue-600">Convert</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We design and build fast, scalable websites that turn clicks into customers.
          </p>
        </div>
      </motion.div>

      {/* Features Grid - Apple Style with Glass Effects */}
      <div className="grid md:grid-cols-3 gap-12 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
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
                {feature.icon}
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack - Apple Style with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="relative mb-24"
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-2xl rounded-3xl border border-white/50"></div>
        <div className="relative z-10 p-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Tech Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div 
                key={tech} 
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
                {tech}
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
        className="text-center relative"
      >
        {/* Glass button effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-xl rounded-3xl shadow-2xl"></div>
        <a
          href="/WorkUs"
          className="relative z-10 inline-block bg-white/90 backdrop-blur-xl text-blue-600 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl border border-white/50"
        >
          Let's Build Something Great
        </a>
      </motion.div>
    </div>
  );
};

export default WebsitesSection;
