import { Link } from 'react-router-dom';
import { useState } from 'react';
import WebsitesSection from '../components/services/WebsitesSection';
import PaidMediaSection from '../components/services/PaidMediaSection';
import RetentionSection from '../components/services/RetentionSection';
import VideoPackages from '../components/services/videopackages/VideoPackages';
import CreativeSection from '../components/services/CreativeSection';

export default function Services() {
  const [activeTag, setActiveTag] = useState(null);

    return (
      <div className="bg-background text-foreground font-sans min-h-screen">
        {/* Section: Title + Nav Tags */}
        <section className="px-6 md:px-16 pt-32 pb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8">
            The <span className="text-electric-green">Engine</span> <br/> Capabilities
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            {["Websites", "Paid Media", "Creative", "Retention"].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`border-2 rounded-none px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTag === tag
                    ? 'bg-electric-green text-black border-electric-green'
                    : 'bg-transparent text-white border-white/20 hover:border-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
  
        {/* Section: Creative Summary */}
        <div className="bg-background">
          {activeTag === "Websites" && <WebsitesSection />}
          {activeTag === "Paid Media" && <PaidMediaSection />}
          {activeTag === "Creative" && <CreativeSection />}
          {activeTag === "Retention" && <RetentionSection />}
        </div>
  
        {/* Section: Service Cards */}
        <section className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-24 bg-background border-t border-white/10">
          <div className="border border-white/10 p-10 hover:border-electric-green transition-colors bg-neutral-900 group">
            <h3 className="text-3xl font-bold uppercase mb-4 group-hover:text-electric-green transition-colors">Ad Production</h3>
            <p className="text-soft-gray text-lg mb-6">
              The average person scrolls a quarter-mile on their phone daily.
              We specialize in thumb-stopping content that communicates value and drives action.
            </p>
            <ul className="list-disc list-inside text-white font-medium space-y-2">
              <li>Strategy</li>
              <li>Scriptwriting</li>
              <li>On-set Direction</li>
              <li>Filming & Editing</li>
            </ul>
          </div>
  
          <div className="border border-white/10 p-10 hover:border-high-voltage-blue transition-colors bg-neutral-900 group">
            <h3 className="text-3xl font-bold uppercase mb-4 group-hover:text-high-voltage-blue transition-colors">Copywriting</h3>
            <p className="text-soft-gray text-lg mb-6">
              Direct-response copy that hooks attention and demands conversion.
              No fluff, just persuasive messaging engineered to sell.
            </p>
            <ul className="list-disc list-inside text-white font-medium space-y-2">
              <li>Audience Research</li>
              <li>Offer Positioning</li>
              <li>Retention Flows</li>
              <li>Full Funnel Audit</li>
            </ul>
          </div>
  
          <div className="border border-white/10 p-10 hover:border-electric-green transition-colors bg-neutral-900 group">
            <h3 className="text-3xl font-bold uppercase mb-4 group-hover:text-electric-green transition-colors">UGC</h3>
            <p className="text-soft-gray text-lg mb-6">
              Branded content that feels native. We manage the entire creator
              pipeline to produce high-volume, high-converting assets.
            </p>
            <ul className="list-disc list-inside text-white font-medium space-y-2">
              <li>Creator Sourcing</li>
              <li>Briefing & Scripting</li>
              <li>Quality Assurance</li>
              <li>Performance Editing</li>
            </ul>
          </div>
  
          <div className="border border-white/10 p-10 hover:border-high-voltage-blue transition-colors bg-neutral-900 group">
            <h3 className="text-3xl font-bold uppercase mb-4 group-hover:text-high-voltage-blue transition-colors">Brand Identity</h3>
            <p className="text-soft-gray text-lg mb-6">
              Design systems that sit at the intersection of consumer psychology
              and premium aesthetics. Built for scale.
            </p>
            <ul className="list-disc list-inside text-white font-medium space-y-2">
              <li>Visual Identity Systems</li>
              <li>Conversion-Optimized UI</li>
              <li>Type & Color Theory</li>
              <li>Brand Guidelines</li>
            </ul>
          </div>
        </section>

        <div className="bg-background py-12">
          <VideoPackages />
        </div>
      </div>
    );
  }

















  