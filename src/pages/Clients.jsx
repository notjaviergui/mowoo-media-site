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
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-background text-foreground border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h1 data-aos="fade-down" className="text-5xl md:text-7xl font-black uppercase tracking-tight text-center mb-6">
          <span className="text-electric-green">Client</span> Logs
        </h1>
        <p data-aos="fade-down" data-aos-delay="100" className="text-center text-soft-gray text-xl mb-16 font-medium">
          The brands we've scaled. Performance data available upon request.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            const isAllSelected = tag === 'All' && selectedTags.length === 0;

            return (
              <div
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`flex items-center gap-2 px-6 py-2 cursor-pointer text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 rounded-none ${
                  isSelected || isAllSelected
                    ? 'bg-electric-green text-black border-electric-green'
                    : 'bg-transparent text-white border-white/20 hover:border-white'
                }`}
              >
                <span>{tag}</span>
                {(isSelected && tag !== 'All') && (
                  <span className="text-xs ml-2 font-black">✕</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredClients.map((client, i) => (
            <div key={i} data-aos="fade-up" className="group border border-white/10 p-6 bg-neutral-900 hover:border-electric-green transition-colors duration-300">
              <div className="overflow-hidden aspect-video relative mb-6">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img src={client.image} alt={client.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-electric-green transition-colors">{client.title}</h3>
                <div className="flex gap-2">
                  {client.tags.map((tag, index) => (
                    <span key={index} className="text-xs font-bold uppercase tracking-widest text-black bg-white px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}