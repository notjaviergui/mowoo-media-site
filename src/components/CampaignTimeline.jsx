import React from 'react';

const campaigns = [
  {
    id: 1,
    client: 'HyperGrowth Co',
    timeline: [
      { step: 'Hook', text: 'Stagnant ROAS, ads burning out in 3 days.' },
      { step: 'Build', text: 'Swapped high-production for raw UGC + native text.' },
      { step: 'Launch', text: 'Tested 15 hook variations in 48 hours.' },
      { step: 'Result', text: 'CPA dropped 40%, spend scaled to $50k/day.' },
    ]
  },
  {
    id: 2,
    client: 'Luxe Athletics',
    timeline: [
      { step: 'Hook', text: 'High cart abandonment, low perceived value.' },
      { step: 'Build', text: 'Implemented split-screen product demonstrations.' },
      { step: 'Launch', text: 'Retargeting sequence based on watch time.' },
      { step: 'Result', text: '3.2x ROAS increase on bottom-of-funnel.' },
    ]
  }
];

export default function CampaignTimeline() {
  return (
    <section className="bg-background py-24 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16">
          Campaign Logs
        </h2>

        <div className="space-y-24">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="relative">
              <h3 className="text-3xl font-bold text-white mb-10 border-b border-white/20 pb-4 inline-block">
                Case Study: {campaign.client}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {campaign.timeline.map((item, index) => (
                  <div key={index} className="relative pt-6">
                    {/* Top line indicator */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${item.step === 'Result' ? 'bg-electric-green' : 'bg-white/20'}`} />

                    <span className={`text-sm font-black uppercase tracking-widest mb-3 block ${item.step === 'Result' ? 'text-electric-green' : 'text-soft-gray'}`}>
                      {item.step}
                    </span>

                    <p className="text-white text-lg font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}