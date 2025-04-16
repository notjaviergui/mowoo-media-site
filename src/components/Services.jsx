export default function Services() {
  import VideoPackages from './services/videopackages/VideoPackages';

  return (
    <div className="bg-white text-black font-sans">
      {/* Section: Title + Nav Tags */}
      <section className="px-6 md:px-16 pt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-blue-600">services</span>
        </h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {["Websites", "Paid Media", "Creative", "Retention"].map((tag) => (
            <span key={tag} className="border border-black rounded-full px-4 py-1 text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Section: Creative Summary */}
      <section className="bg-blue-600 text-white px-6 md:px-16 py-12 relative">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Creative</h2>
          <p className="text-lg leading-relaxed">
            Producing creative is more than just following brand guidelines and social media trends.
            At Mowoo Media, we take a creative approach by working closely with performance data
            and always making informed optimizations in real-time.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">Work with us</button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-full font-semibold">View examples</button>
          </div>
        </div>

        {/* Right aligned service categories */}
        <ul className="absolute top-6 right-6 text-sm text-white space-y-1 hidden md:block">
          <li>Copywriting</li>
          <li>Ad Production</li>
          <li>UGC</li>
          <li>Brand Identity</li>
        </ul>
      </section>

      {/* Section: Service Cards */}
      <section className="grid md:grid-cols-2 gap-6 px-6 md:px-16 py-12 bg-white">
        <div className="border border-black p-6">
          <h3 className="text-xl font-bold mb-2">Ad Production</h3>
          <p className="text-sm mb-3">
            The average person scrolls a quarter-mile on their phone daily—
            except when they stop on creative. We specialize in thumb-stopping
            content that communicates the offer, the brand, and the value.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Strategy</li>
            <li>Scriptwriting</li>
            <li>On-set Direction</li>
            <li>Filming</li>
            <li>Editing</li>
          </ul>
        </div>

        <div className="border border-black p-6">
          <h3 className="text-xl font-bold mb-2">Copywriting</h3>
          <p className="text-sm mb-3">
            Good copy feels like you're listening to your favorite song at a
            concert. You get enough familiarity to know what you'll hear,
            but also newness to keep it fresh. We aim for that perfect note.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Audience Research</li>
            <li>Brand Positioning</li>
            <li>Retention Emails</li>
            <li>Full Funnel Audit</li>
            <li>Market Research</li>
          </ul>
        </div>

        <div className="border border-black p-6">
          <h3 className="text-xl font-bold mb-2">UGC</h3>
          <p className="text-sm mb-3">
            We work with creators to produce branded content that feels native,
            yet sells. From briefing and scripting to vetting and managing—
            we own the process.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Brand Research</li>
            <li>Talent Outreach</li>
            <li>Content Guidelines</li>
            <li>Filming</li>
            <li>Editing</li>
          </ul>
        </div>

        <div className="border border-black p-6">
          <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
          <p className="text-sm mb-3">
            A brand’s identity should be at the intersection of real consumer
            data and aesthetics. We craft branding that is consistent, memorable,
            and persuasive.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
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