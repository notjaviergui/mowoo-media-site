import React, { useEffect, useRef, useState } from 'react';

const clients = [
  {
    title: "INLT Exotics",
    description: "Premier exotic car rental service offering a fleet of luxury vehicles for unforgettable driving experiences.",
    image: "/src/assets/inlt-exotics.png",
  },
  {
    title: "Inopera",
    description: "Brand identity and motion creative for Inopera’s product launch campaign.",
    image: "/src/assets/Inopera.png",
  },
  {
    title: "Client C",
    description: "Campaign production for a health supplement line.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Centrum_logo.svg/2560px-Centrum_logo.svg.png",
  },
  {
    title: "Client D",
    description: "Full-funnel design and video for a beverage launch.",
    image: "https://1000logos.net/wp-content/uploads/2018/06/Gatorade-logo.png",
  },
];

export default function Clients() {
  return (
    <section className="bg-white min-h-screen py-32 px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-indigo-600">Client</span> Showcase
      </h1>
      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {clients.map((client, index) => {
          const ref = useRef(null);
          const [isVisible, setIsVisible] = useState(false);

          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => setIsVisible(entry.isIntersecting),
              { threshold: 0.3 }
            );
            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
          }, []);

          return (
            <div
              key={index}
              ref={ref}
              className={`border border-white p-2 shadow-lg transition-all duration-700 ease-in-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${index % 2 === 0 ? "self-start ml-0 md:ml-12" : "self-end mr-0 md:mr-12"} mt-${index * 10}`}
              style={{ willChange: 'transform' }}
            >
              <img
                src={client.image}
                alt={client.title}
                className="w-full mb-2 rounded"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "transform 1s ease-out",
                }}
              />
              <h3 className="text-lg font-semibold text-indigo-600 mb-1">{client.title}</h3>
              <p className="text-sm text-gray-700">{client.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
