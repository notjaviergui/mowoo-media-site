import React from 'react';
import { motion } from 'framer-motion';

export default function JoinUs() {
  const jobs = [
    {
      title: "Creative Strategist",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead client creative strategy, develop compelling concepts, and collaborate with performance teams to execute ideas that convert.",
    },
    {
      title: "Copywriter",
      location: "Remote",
      type: "Part-time",
      description:
        "Write sharp, brand-aligned copy across ads, emails, and landing pages. Experience with DTC brands preferred.",
    },
    {
      title: "Video Editor",
      location: "Remote",
      type: "Contract",
      description:
        "Edit video assets for paid and organic content. Must have strong motion design and storytelling skills.",
    },
  ];

  return (
    <div className="bg-white text-black font-sans px-6 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight">Join the team</h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-12">
          We’re a team of creative minds, brand builders, and performance marketers driven by data and storytelling. If you’re excited by great ideas and great results, let’s talk.
        </p>

        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              layout
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
              whileTap={{ scale: 1.05 }}
              className="border border-gray-300 p-6 rounded-lg shadow-sm cursor-grab active:cursor-grabbing"
            >
              <h2 className="text-2xl font-semibold mb-1">{job.title}</h2>
              <div className="text-sm text-gray-600 mb-4">{job.location} • {job.type}</div>
              <p className="text-base text-gray-700 mb-4">{job.description}</p>
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
