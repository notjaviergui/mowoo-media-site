import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VideoPackages from './videopackages/VideoPackages';

export default function CreativeSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: "✍️",
      title: "Copywriting",
      description: "Copy that feels like your favorite song—familiar yet fresh"
    },
    {
      icon: "🎬",
      title: "Ad Production",
      description: "Thumb-stopping content that communicates your offer and brand"
    },
    {
      icon: "📱",
      title: "UGC",
      description: "Branded content that feels native yet sells effectively"
    },
    {
      icon: "🎨",
      title: "Brand Identity",
      description: "Consistent, memorable branding at the intersection of data and aesthetics"
    }
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
            Creative That <span className="text-blue-600">Converts</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Producing creative is more than just following brand guidelines. We take a data-driven approach, 
            working closely with performance data and making informed optimizations in real-time.
          </p>
        </div>
      </motion.div>

      {/* Services Grid - Apple Style with Glass Effects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
            transition={{ 
              delay: index * 0.15, 
              duration: 1, 
              ease: "easeOut" 
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="text-center group relative"
          >
            {/* Glass card effect */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500"></div>
            <div className="relative z-10 p-8">
              <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Packages Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="mb-24"
      >
        <VideoPackages />
      </motion.div>

      {/* CTA Section - Apple Style with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="relative text-center"
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-2xl rounded-3xl shadow-2xl"></div>
        <div className="relative z-10 p-16 text-white">
          <h3 className="text-4xl font-bold mb-8">Ready to Create Something Amazing?</h3>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Let's work together to produce creative that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/pages/join-us"
              className="bg-white/90 backdrop-blur-xl text-blue-600 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl border border-white/50"
            >
              Work with us
            </Link>
            <Link
              to="/pages/clients"
              className="bg-transparent border-2 border-white/80 text-white px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-xl"
            >
              View examples
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
