import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
      summary: "Forget trends—these five strategies still drive results. Find out how top brands quietly use them.",
    },
    {
      title: "🧠 AI Tools You Need for Smarter Marketing",
      summary: "We tried 12 tools and found the top 3 that saved us hours each week. Here’s what we learned.",
    },
    {
      title: "🛍️ Secrets Behind High-Converting DTC Funnels",
      summary: "Real funnel breakdowns from top DTC brands, plus lessons you can steal for your next launch.",
    },
    {
      title: "📬 Email Subject Lines That Got 60%+ Open Rates",
      summary: "Swipe-worthy subject lines from recent campaigns—and why they worked so well.",
    },
    {
      title: "💸 Budget Breakdown: $10k Paid Ads Test",
      summary: "Where we spent it, what performed, and the surprising loser across channels.",
    },
    {
      title: "🎨 Branding Makeovers That 10x’d Revenue",
      summary: "Before-and-after snapshots of rebrands that turned dead products into cult favorites.",
    },
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
              <a href="#" className="text-indigo-600 font-medium text-sm hover:underline">Read more</a>
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
    </div>
  );
}
