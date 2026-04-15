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
    <div className="bg-background text-foreground font-sans px-6 md:px-16 py-32 min-h-screen border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8">Join the engine</h1>
        <p className="text-xl text-soft-gray font-medium max-w-2xl leading-relaxed mb-16">
          We build systems that produce high-performing ads. We're looking for builders who prioritize performance over decoration. If you want to scale what works, let's talk.
        </p>

        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="border border-white/10 p-8 hover:border-electric-green transition-colors bg-neutral-900 group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 className="text-3xl font-bold uppercase group-hover:text-electric-green transition-colors">{job.title}</h2>
                <div className="text-sm font-bold uppercase tracking-widest text-soft-gray mt-2 md:mt-0 bg-white/5 px-4 py-1">{job.location} • {job.type}</div>
              </div>
              <p className="text-lg text-soft-gray mb-8 max-w-3xl">{job.description}</p>
              <button className="bg-white text-black font-bold uppercase tracking-wider px-8 py-3 rounded-none hover:bg-electric-green transition-colors duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
