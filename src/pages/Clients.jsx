import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    title: 'Headphones',
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
];

const allTags = ['All', 'Web', 'Creative', 'Retention', 'Logo', 'Media', 'Consulting', 'Automations'];

export default function Clients() {
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

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
    <section className="min-h-screen pt-32 pb-20 px-8 bg-white">
      <h1 data-aos="fade-down" className="text-4xl text-center font-bold mb-4">
        <span className="text-blue-600">Client</span> Showcase
      </h1>
      <p data-aos="fade-down" data-aos-delay="100" className="text-center text-gray-500 mb-10">
        Explore the brands we've elevated
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          const isAllSelected = tag === 'All' && selectedTags.length === 0;

          return (
            <div
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full cursor-pointer text-sm font-medium transition duration-200 shadow-sm ${
                isSelected || isAllSelected
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <span>{tag}</span>
              {(isSelected && tag !== 'All') && (
                <span className="text-xs">✕</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {filteredClients.map((client, i) => (
          <div key={i} data-aos="fade-up" className="flex flex-col items-center group border border-gray-300 rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition duration-300">
            <img src={client.image} alt={client.title} className="w-full h-80 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {client.tags.map((tag, index) => (
                <span key={index} className="text-xs font-medium text-gray-600 bg-gray-200 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}