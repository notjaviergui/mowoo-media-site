import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Clients.css';

const clientsData = [
  {
    title: 'Mayu',
    image: '/Images/Clients/Mayu.jpg',
    tags: ['Web', 'Creative'],
  },
  {
    title: 'Miami Mojito Company',
    image: '/Images/Clients/MiamiMojito.jpeg',
    tags: ['Web', 'Creative'],
  },
  {
    title: 'Inopera',
    image: '/Images/Clients/Inopera Headphones.png',
    tags: ['Web', 'Media'],
  },
  {
    title: 'Suches Cabins',
    image: '/Images/Clients/Suches Cabins.jpeg',
    tags: ['Web', 'Creative'],
  },
  {
    title: 'Intl',
    image: '/Images/Clients/INLT rentals.png',
    tags: ['Retention', 'Media'],
  },
  {
    title: 'ESmooth',
    image: 'https://instagram.fclo1-1.fna.fbcdn.net/v/t51.2885-15/245203799_122357176842916_5354720512083912117_n.jpg',
    tags: ['Creative'],
  },
  {
    title: 'Coming Soon',
    image: '/Images/placeholder.jpg',
    tags: ['Creative'],
  },
  {
    title: 'Coming Soon',
    image: '/Images/placeholder.jpg',
    tags: ['Creative'],
  },
  {
    title: 'Coming Soon',
    image: '/Images/placeholder.jpg',
    tags: ['Creative'],
  },
];

const allTags = ['All', 'Web', 'Creative', 'Retention', 'Logo', 'Media', 'Consulting', 'Automations'];

const tagColors = {
  Web: 'from-blue-500 to-cyan-500',
  Creative: 'from-pink-500 to-purple-500',
  Retention: 'from-green-500 to-emerald-500',
  Logo: 'from-yellow-500 to-orange-500',
  Media: 'from-indigo-500 to-blue-700',
  Consulting: 'from-fuchsia-500 to-pink-600',
  Automations: 'from-teal-500 to-green-400',
};

export default function Clients() {
  const [selectedTags, setSelectedTags] = useState([]);

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
    <section className="clients-bg min-h-screen pt-32 pb-20 px-4 md:px-12 flex flex-col items-center relative overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#181824] via-[#23243a] to-[#1a1a2e] opacity-95" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-gradient-to-tr from-blue-900/30 via-fuchsia-700/20 to-transparent rounded-full blur-3xl opacity-60 -z-10" />

      {/* Hero header section */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="text-5xl md:text-7xl text-center font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-500 drop-shadow-lg"
      >
        Client Showcase
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-2xl text-center text-gray-300 mb-12"
      >
        Explore the brands we've elevated
      </motion.p>

      {/* Tag filter bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          const isAllSelected = tag === 'All' && selectedTags.length === 0;
          return (
            <motion.div
              whileTap={{ scale: 0.95 }}
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`cursor-pointer px-6 py-2 rounded-full font-semibold text-base shadow-md transition-all duration-200 flex items-center gap-2 
                ${isSelected || isAllSelected
                  ? 'bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white shadow-lg'
                  : 'bg-zinc-800 text-gray-200 hover:bg-zinc-700'}
              `}
            >
              <span>{tag}</span>
              {(isSelected && tag !== 'All') && (
                <span className="text-xs">✕</span>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Client cards grid */}
      <div className="w-full max-w-7xl">
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
          >
            {filteredClients.map((client, i) => (
              <motion.div
                key={client.title + i}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', bounce: 0.2 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                className="client-glass-card group relative flex flex-col items-center p-6 rounded-2xl shadow-xl border border-zinc-700/40 bg-white/5 backdrop-blur-md transition-all duration-300"
              >
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                  <img
                    src={client.image}
                    alt={client.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 rounded-xl pointer-events-none" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">{client.title}</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {client.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.08 }}
                      className={`px-4 py-1 rounded-full text-xs font-semibold shadow-md bg-gradient-to-r ${tagColors[tag] || 'from-gray-700 to-gray-900'} text-white border border-white/10`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                {/* Optional: Add a floating overlay or button on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-semibold shadow-lg text-sm hover:scale-105 transition-transform">View Details</button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}