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
      <div className="bg-white text-black font-sans">
        {/* Section: Title + Nav Tags */}
        <section className="px-6 md:px-16 pt-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-600">services</span>
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Websites", "Paid Media", "Creative", "Retention"].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`border rounded-full px-4 py-1 text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeTag === tag
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-transparent text-black border-black'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
  
        {/* Section: Creative Summary */}
        {activeTag === "Websites" && <WebsitesSection />}
        {activeTag === "Paid Media" && <PaidMediaSection />}
        {activeTag === "Creative" && <CreativeSection />}
        {activeTag === "Retention" && <RetentionSection />}
  
        {/* Section: Service Cards */}
        <section className="grid md:grid-cols-2 gap-6 px-6 md:px-16 py-12 bg-white">
          <div className="border border-black p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Ad Production</h3>
            <p className="text-base mb-3">
              The average person scrolls a quarter-mile on their phone daily—
              except when they stop on creative. We specialize in thumb-stopping
              content that communicates the offer, the brand, and the value.
            </p>
            <ul className="list-disc list-inside text-base font-medium space-y-1">
              <li>Strategy</li>
              <li>Scriptwriting</li>
              <li>On-set Direction</li>
              <li>Filming</li>
              <li>Editing</li>
            </ul>
          </div>
  
          <div className="border border-black p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Copywriting</h3>
            <p className="text-base mb-3">
              Good copy feels like you're listening to your favorite song at a
              concert. You get enough familiarity to know what you'll hear,
              but also newness to keep it fresh. We aim for that perfect note.
            </p>
            <ul className="list-disc list-inside text-base font-medium space-y-1">
              <li>Audience Research</li>
              <li>Brand Positioning</li>
              <li>Retention Emails</li>
              <li>Full Funnel Audit</li>
              <li>Market Research</li>
            </ul>
          </div>
  
          <div className="border border-black p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">UGC</h3>
            <p className="text-base mb-3">
              We work with creators to produce branded content that feels native,
              yet sells. From briefing and scripting to vetting and managing—
              we own the process.
            </p>
            <ul className="list-disc list-inside text-base font-medium space-y-1">
              <li>Brand Research</li>
              <li>Talent Outreach</li>
              <li>Content Guidelines</li>
              <li>Filming</li>
              <li>Editing</li>
            </ul>
          </div>
  
          <div className="border border-black p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
            <p className="text-base mb-3">
              A brand’s identity should be at the intersection of real consumer
              data and aesthetics. We craft branding that is consistent, memorable,
              and persuasive.
            </p>
            <ul className="list-disc list-inside text-base font-medium space-y-1">
              <li>Logo Design</li>
              <li>Color Palette</li>
              <li>Type Scale</li>
              <li>Voice & Tone</li>
              <li>Packaging Design</li>
            </ul>
          </div>
        </section>
        <VideoPackages />
      </div>
    );
  }

















  