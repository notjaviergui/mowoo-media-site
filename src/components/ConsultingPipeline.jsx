import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ConsultingPipeline() {
  const stepRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    stepRefs.current.forEach(el => el && observer.observe(el));
    return () => stepRefs.current.forEach(el => el && observer.unobserve(el));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (lineRef.current) {
        lineRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen' }}
      className="relative py-32 px-6 md:px-12 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">How We Work</h2>
        <p className="text-center text-gray-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto">
          Our in-house consulting process integrates creative strategy, full-scale media production, and advanced advertising solutions. From ideation and content creation to managing paid, organic, and programmatic campaigns, we handle it all. We also build intelligent sales funnels using automations, SMS, and iMessage to optimize conversions and drive growth.
        </p>

        <div className="relative before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#3b82f6] before:to-transparent before:z-0">
          {[
            {
              title: "🎯 Creative Gameplan",
              description:
                "We start with a strategy call to understand your goals and brainstorm ideas that match your brand and audience.",
            },
            {
              title: "🎥 Content Creation",
              description:
                "We handle the full production — writing, filming, and editing high-quality videos for all your marketing channels.",
            },
            {
              title: "📢 Ads That Perform",
              description:
                "We run and manage paid, organic, and programmatic ads to get your content in front of the right people.",
            },
            {
              title: "⚙️ Sales System Setup",
              description:
                "We build smart sales funnels using email, SMS, and iMessage to help you close more deals automatically.",
            },
            ].map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-24 opacity-0 translate-y-24 transition-all duration-1000 ease-out z-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                className="relative group rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-xl" />
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 md:p-10 hover:scale-[1.02] hover:animate-[wiggle_0.4s_ease-in-out] transition-transform duration-300">
                  <div className="text-[#3b82f6] text-4xl font-black mb-3 animate-bounce animate-delay-200">0{index + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}