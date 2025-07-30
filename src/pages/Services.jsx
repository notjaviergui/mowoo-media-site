import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WebsitesSection from '../components/services/WebsitesSection';
import PaidMediaSection from '../components/services/PaidMediaSection';
import RetentionSection from '../components/services/RetentionSection';
import CreativeSection from '../components/services/CreativeSection';

export default function Services() {
  const [activeTag, setActiveTag] = useState("Websites");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const services = [
    {
      id: "Websites",
      title: "Websites",
      description: "Fast, scalable websites that convert",
      icon: "🌐"
    },
    {
      id: "Paid Media", 
      title: "Paid Media",
      description: "Performance-driven advertising",
      icon: "📈"
    },
    {
      id: "Creative",
      title: "Creative",
      description: "Thumb-stopping content & design",
      icon: "🎨"
    },
    {
      id: "Retention",
      title: "Retention", 
      description: "Turn buyers into loyal customers",
      icon: "🔄"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Apple Style with Glass Effects */}
      <motion.section 
        style={{ y, opacity }}
        className="pt-32 pb-20 px-6 md:px-16 relative overflow-hidden"
      >
        {/* Glass background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-2xl text-gray-600 mb-16 leading-relaxed"
          >
            Choose a service to learn more about how we can help your business grow.
          </motion.p>
          
          {/* Service Navigation - Glass Style Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTag(service.id)}
                className={`group relative p-8 rounded-3xl transition-all duration-500 ease-out backdrop-blur-xl ${
                  activeTag === service.id
                    ? 'bg-blue-600/90 text-white shadow-2xl shadow-blue-600/25 border border-blue-400/20'
                    : 'bg-white/70 text-gray-900 hover:bg-white/90 border border-white/50 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Glass effect overlay */}
                <div className={`absolute inset-0 rounded-3xl ${
                  activeTag === service.id 
                    ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20' 
                    : 'bg-gradient-to-br from-white/20 to-gray-100/20'
                }`}></div>
                
                <div className="relative z-10">
                  <div className={`text-4xl mb-4 transition-all duration-300 ${
                    activeTag === service.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    activeTag === service.id ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {service.description}
                  </p>
                  
                  {/* Glass-style active indicator */}
                  {activeTag === service.id && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/80 rounded-full backdrop-blur-sm"
                    ></motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dynamic Content Section */}
      <section className="px-6 md:px-16 pb-20">
        {activeTag === "Websites" && <WebsitesSection />}
        {activeTag === "Paid Media" && <PaidMediaSection />}
        {activeTag === "Creative" && <CreativeSection />}
        {activeTag === "Retention" && <RetentionSection />}
      </section>
    </div>
  );
}

















  