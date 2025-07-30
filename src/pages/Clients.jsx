import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Clients.css';

const clientsData = [
  {
    title: 'Mayu',
    image: '/Images/Clients/Mayu.jpg',
    tags: ['Web', 'Creative'],
    description: 'E-commerce platform redesign with improved conversion rates'
  },
  {
    title: 'Miami Mojito Company',
    image: '/Images/Clients/MiamiMojito.jpeg',
    tags: ['Web', 'Creative'],
    description: 'Brand identity and website development for premium beverage company'
  },
  {
    title: 'Inopera',
    image: '/Images/Clients/Inopera Headphones.png',
    tags: ['Web', 'Media'],
    description: 'Audio equipment brand with integrated e-commerce solution'
  },
  {
    title: 'Suches Cabins',
    image: '/Images/Clients/Suches Cabins.jpeg',
    tags: ['Web', 'Creative'],
    description: 'Luxury cabin rental platform with booking system'
  },
  {
    title: 'Intl',
    image: '/Images/Clients/INLT rentals.png',
    tags: ['Retention', 'Media'],
    description: 'Rental service platform with customer retention automation'
  },
  {
    title: 'ESmooth',
    image: 'https://instagram.fclo1-1.fna.fbcdn.net/v/t51.2885-15/245203799_122357176842916_5354720512083912117_n.jpg',
    tags: ['Creative'],
    description: 'Creative content and brand development'
  },
  {
    title: 'Coming Soon',
    image: '/Images/placeholder.jpg',
    tags: ['Creative'],
    description: 'New project launching soon'
  },
  {
    title: 'Coming Soon',
    image: '/Images/placeholder.jpg',
    tags: ['Creative'],
    description: 'New project launching soon'
  },
];

const allTags = ['All', 'Web', 'Creative', 'Retention', 'Media'];

export default function Clients() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [modalClient, setModalClient] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleTag = (tag) => {
    if (tag === 'All') {
      setSelectedTags([]);
    } else {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    }
  };

  const filteredClients = selectedTags.length
    ? clientsData.filter((client) =>
        selectedTags.every((tag) => client.tags.includes(tag))
      )
    : clientsData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Apple Style */}
      <section className="pt-32 pb-20 px-6 md:px-16 relative overflow-hidden">
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
            Our <span className="text-blue-600">Clients</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-2xl text-gray-600 mb-16 leading-relaxed"
          >
            We help brands grow with design, technology, and strategy.
          </motion.p>
        </div>
      </section>

      {/* Filter Section - Apple Style */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {allTags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              const isAllSelected = tag === 'All' && selectedTags.length === 0;
              return (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleTag(tag)}
                  className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-xl ${
                    isSelected || isAllSelected
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-white/70 text-gray-700 hover:bg-white/90 border border-white/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {tag}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Clients Grid - Apple Style */}
      <section className="px-6 md:px-16 pb-20" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <AnimatePresence>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredClients.map((client, index) => (
                <motion.div
                  key={client.title + index}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  exit={{ opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glass card effect */}
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500"></div>
                  
                  <div className="relative z-10 p-6 rounded-3xl overflow-hidden">
                    {/* Image container */}
                    <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                      <img
                        src={client.image}
                        alt={client.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{client.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{client.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {client.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ 
                              delay: 0.3 + index * 0.1 + tagIndex * 0.05, 
                              duration: 0.5 
                            }}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal - Apple Style */}
      <AnimatePresence>
        {modalClient && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalClient(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            {/* Modal content */}
            <motion.div
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full p-8 border border-white/50"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                onClick={() => setModalClient(null)}
              >
                ×
              </button>
              
              <div className="mb-6">
                <img 
                  src={modalClient.image} 
                  alt={modalClient.title} 
                  className="w-full h-48 object-cover rounded-2xl mb-4" 
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{modalClient.title}</h2>
                <p className="text-gray-600 mb-4">{modalClient.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {modalClient.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}