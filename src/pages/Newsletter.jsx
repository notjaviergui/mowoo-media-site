import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [activeNewsletter, setActiveNewsletter] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
        const res = await fetch('http://localhost:3001/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('🎉 You’ve been subscribed!');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setEmail('');
      } else {
        console.error('Beehiiv API error:', data);
        setMessage(data.message || '❌ Subscription failed.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessage('❌ Network error. Please check your connection or try again later.');
    } finally {
      setLoading(false);
    }
  };

  const newsletters = [
    {
      title: "📈 5 Growth Tactics That Still Work in 2024",
      content: `
        <div class='text-base leading-relaxed space-y-5'>
          <p>Hey reader 👋,</p>
          <p>Each week, we dig into marketing strategies that move the needle—and this week’s no different. Growth isn't about hacks; it's about consistency, testing, and understanding the psychology of your buyer.</p>
          <p>Below are 5 tried-and-true tactics our team has seen produce real results across industries. Whether you’re just starting or scaling past $10M/year, these still matter:</p>
          <ul class='list-disc list-inside'>
            <li><strong>UGC-style videos:</strong> Consumers trust people, not logos. Authentic, messy, relatable videos perform best in cold campaigns.</li>
            <li><strong>5-second rule for landing pages:</strong> If users can’t understand your offer in 5 seconds, bounce rates go up. Test headlines with clarity over cleverness.</li>
            <li><strong>Offer-first creative:</strong> Don’t lead with features—lead with transformation, urgency, or exclusivity. The offer is the product.</li>
            <li><strong>SMS automation:</strong> Cart abandonment flows with short, casual messages recover 10–20% of lost sales.</li>
            <li><strong>Founder-led content:</strong> Your face, your story, your voice—founder videos build trust fast. Use them weekly.</li>
          </ul>
          <p>We’ve applied these strategies to 7- and 8-figure brands, and they continue to perform. The market evolves, but human psychology remains the same.</p>
          <p>Got a tactic that’s worked wonders for you? Hit reply and let us know—we may feature it in an upcoming memo.</p>
          <p>Until next week, stay sharp.</p>
          <p class="font-semibold">The Moowo Memo</p>
          <p>In addition to these tactics, remember that consistency is key. Regularly engaging with your audience through various channels can amplify your efforts. Consider hosting webinars or live Q&A sessions to foster a deeper connection.</p>
          <p>Lastly, always be open to feedback. It’s invaluable for refining your approach and ensuring you’re meeting the needs of your audience effectively.</p>
        </div>
      `
    },
    {
      title: "🧠 AI Tools You Need for Smarter Marketing",
      content: `
        <div class='text-base leading-relaxed space-y-5'>
          <p>Hey there 👋,</p>
          <p>This week, we’re diving into the world of AI tools that can supercharge your marketing efforts. With technology evolving rapidly, it’s essential to leverage these tools to stay ahead of the competition.</p>
          <p>Here are three AI tools that have significantly improved our productivity and creativity:</p>
          <ol class='list-decimal list-inside'>
            <li><strong>ChatGPT + AIPRM:</strong> This combo is a game-changer for generating ad hooks, brand angles, and repurposing scripts. It saves us hours each week, allowing us to focus on strategy.</li>
            <li><strong>Motion:</strong> This tool automatically converts long-form content into engaging short-form pieces. It’s perfect for social media posts and ads, ensuring we maintain a consistent presence.</li>
            <li><strong>Mutiny:</strong> Personalized landing pages that adapt to the traffic source enhance user experience and conversion rates. Tailoring content to the audience makes a significant difference.</li>
          </ol>
          <p>Integrating these tools into your workflow can lead to smarter marketing decisions and more efficient campaigns. Embrace the change and watch your results improve.</p>
          <p>Have you tried any AI tools that have transformed your marketing? Share your experiences—we love learning from our community!</p>
          <p>As we move forward, consider the ethical implications of AI in marketing. Transparency and authenticity should remain at the forefront of your strategies.</p>
          <p>Finally, stay curious! The landscape is ever-changing, and continuous learning will equip you to adapt and thrive.</p>
          <p>See you in your inbox,</p>
          <p class="font-semibold">The Moowo Memo</p>
        </div>
      `
    },
    {
      title: "🛍️ Secrets Behind High-Converting DTC Funnels",
      content: `
        <div class='text-base leading-relaxed space-y-5'>
          <p>Hi friend 👋,</p>
          <p>This week, we analyzed three DTC funnels that quietly generate 6- and 7-figure revenue months. The success of these funnels isn’t random; it’s the result of careful planning and execution.</p>
          <p>Here’s what we found in common among these high-converting funnels:</p>
          <ul class='list-disc list-inside'>
            <li><strong>Quiz-style intro pages:</strong> Each funnel started with a simple quiz that engaged users and collected valuable data.</li>
            <li><strong>Post-purchase upsells:</strong> Offering upsells immediately after purchase added 10–20% to average order value (AOV). This strategy maximizes revenue without additional traffic costs.</li>
            <li><strong>Strategic social proof:</strong> Incorporating logos, user-generated content (UGC), and testimonials before the call-to-action (CTA) builds trust and encourages conversions.</li>
          </ul>
          <p>Funnel success requires structure, testing, and optimization. These brands have mastered the art of guiding customers through their journey seamlessly.</p>
          <p>What’s your experience with DTC funnels? We’d love to hear your insights and strategies!</p>
          <p>In addition, consider the importance of A/B testing different funnel elements. Small changes can lead to significant improvements in conversion rates over time.</p>
          <p>Lastly, keep an eye on your analytics. Understanding user behavior will help you refine your funnels and enhance user experience.</p>
          <p>Until next edition,</p>
          <p class="font-semibold">The Moowo Memo</p>
        </div>
      `
    },
    {
      title: "📬 Email Subject Lines That Got 60%+ Open Rates",
      content: `
        <div class='text-base leading-relaxed space-y-5'>
          <p>Hello there 👋,</p>
          <p>This week, we tested dozens of email subject lines, and the results were eye-opening. Crafting the perfect subject line is an art that can significantly impact your open rates.</p>
          <p>Here are the 5 subject lines that achieved open rates over 60%:</p>
          <ul class='list-disc list-inside'>
            <li>“You forgot something 👀”</li>
            <li>“The ad we didn’t want to run…”</li>
            <li>“Can I be honest with you?”</li>
            <li>“You’re not going to believe this story”</li>
            <li>“Quick favor (1 min max)”</li>
          </ul>
          <p>Short, personal, and mysterious—this is the recipe for success. Experimenting with your subject lines can lead to remarkable improvements in engagement.</p>
          <p>What subject lines have worked for you? Share your favorites with us!</p>
          <p>Additionally, consider personalizing your subject lines. Tailoring them to your audience can make a significant difference in open rates.</p>
          <p>Finally, keep testing and iterating. The digital landscape is always evolving, and staying ahead requires agility in your approach.</p>
          <p>Cheers,</p>
          <p class="font-semibold">The Moowo Memo</p>
        </div>
      `
    },
    {
      title: "💸 Budget Breakdown: $10k Paid Ads Test",
      content: `
        <div class='text-base leading-relaxed space-y-5'>
          <p>Hey there 👋,</p>
          <p>This week, we’re diving into what we learned from spending $10k in just 2 weeks across three platforms. Understanding where to allocate your budget is crucial for maximizing ROI.</p>
          <p>Here’s a breakdown of our findings:</p>
          <ul class='list-disc list-inside'>
            <li><strong>Meta:</strong> Best for user-generated content (UGC) and retargeting campaigns. We saw the highest engagement here.</li>
            <li><strong>Google:</strong> This platform delivered the highest conversion rate from branded search. Keywords matter, so choose wisely.</li>
            <li><strong>TikTok:</strong> While we gained tons of impressions, the click-through rate (CTR) was low. Creative execution is key to capturing attention.</li>
          </ul>
          <p>At the end of the day, it’s not about the platform—it’s about creative execution and timing. Analyzing performance data is essential for optimizing future campaigns.</p>
          <p>What’s your experience with paid ads? We’d love to hear your insights!</p>
          <p>In addition to these findings, consider diversifying your ad spend. Exploring new platforms can uncover untapped potential.</p>
          <p>Lastly, always review your ad creatives. Fresh, engaging content can significantly impact your results.</p>
          <p>Until next time,</p>
          <p class="font-semibold">The Moowo Memo</p>
        </div>
      `
    },
    {
      title: "🎨 Branding Makeovers That 10x’d Revenue",
      content: `
        <div class='text-base leading-relaxed space-y-5'>
          <p>Hi there 👋,</p>
          <p>This week, we’re showcasing three DTC brands that revamped their look and saw a 10x increase in revenue within 6 months. A strong brand identity can make all the difference.</p>
          <p>Here’s what we observed in these successful makeovers:</p>
          <ul class='list-disc list-inside'>
            <li><strong>Simplified color palettes:</strong> Brands that simplified their color schemes saw increased time-on-site and improved user experience.</li>
            <li><strong>New typography:</strong> Updating fonts improved product perception and made content more readable.</li>
            <li><strong>Updated packaging:</strong> Brands that revamped their packaging boosted influencer outreach and customer loyalty.</li>
          </ul>
          <p>Good design isn’t just decoration—it’s about persuasion. These brands understood that their visual identity is a key driver of success.</p>
          <p>Have you undergone a branding makeover? We’d love to hear your story!</p>
          <p>Furthermore, consider the emotional impact of your branding. Connecting with customers on an emotional level can lead to stronger loyalty.</p>
          <p>Lastly, keep your brand story consistent across all platforms. Authenticity fosters trust and engagement with your audience.</p>
          <p>See you next week,</p>
          <p class="font-semibold">The Moowo Memo</p>
        </div>
      `
    }
  ];

  return (
    <div className="bg-white text-black font-sans">
      <section className="mt-24 px-6 md:px-5 py-16 max-w-6xl mx-auto">
        <h1 className="text-xl md:text-6xl font-bold mb-4">
           <span className="text-indigo-600">MKTNG secrets</span> straight to your inbox every Week
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          A community of dedicated to the future of marketing — Transparency in all shared insights — Actionable tips to implement immediately
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          {newsletters.map((item, i) => (
            <div key={i} className="border p-4 shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.summary}</p>
              <button
                onClick={() => setActiveNewsletter(item)}
                className="text-indigo-600 font-medium text-sm hover:underline"
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 mt-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Subscribe to <span className="text-indigo-600">The Moowo Memo</span></h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for weekly DTC secrets"
              className="w-full md:w-auto px-5 py-3 rounded-full text-black text-sm focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold text-sm px-8 py-3 rounded-full hover:scale-105 transition"
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Join for a 🍪'}
            </button>
          </form>
          {message && (
            <p className="mt-4 text-sm font-medium">
              {message}
            </p>
          )}
        </div>
      </section>
      {message && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 max-w-sm text-center space-y-4 shadow-lg">
            <h3 className="text-lg font-bold">{message.includes('🎉') ? 'Success!' : 'Oops!'}</h3>
            <p className="text-sm">{message}</p>
            <button
              onClick={() => setMessage('')}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {activeNewsletter && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-xl p-6 shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-black hover:text-indigo-600"
              onClick={() => setActiveNewsletter(null)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">{activeNewsletter.title}</h2>
            <div
              className="prose max-w-none text-black"
              dangerouslySetInnerHTML={{ __html: activeNewsletter.content }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
