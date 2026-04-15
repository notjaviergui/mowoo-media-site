import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './WorkUs.css';

export default function WorkUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const location = useLocation();
  const [project, setProject] = useState(location.state?.project || '');
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [showThirdInput, setShowThirdInput] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xnnpllly", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, project, budget }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  const nextStep = () => setFormStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setFormStep((prev) => Math.max(prev - 1, 1));

  return (
    <section className="relative bg-background text-foreground font-sans pt-32 pb-16 px-6 md:px-16 min-h-screen border-t border-white/10">
      <h2 className="text-white text-4xl md:text-6xl font-black text-center mb-4 uppercase tracking-tight">
        Let’s start your project
      </h2>
      <p className="text-soft-gray text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto font-medium">
        Just a few questions to understand your goals better. We'll follow up with data-driven strategy.
      </p>
      {submitted ? (
        <>
          <div className="text-center text-2xl font-semibold relative z-10">
            Thank you for your submission!
          </div>
          <div className="confetti absolute inset-0 pointer-events-none z-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          {formStep === 1 && (
            <>
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                1 → What’s your name? <span className="text-red-500">*</span>
              </h2>
              <p className="text-white/50 text-sm mb-6">(please answer clearly)</p>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Type your answer here..."
                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 text-white text-[1.4rem] pb-3 mb-2 placeholder:text-[1.2rem] focus:outline-none focus:border-white focus:ring-0 transition-all duration-300"
                required
              />
            </>
          )}

          {formStep === 2 && (
            <>
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                2 → What’s your best email? <span className="text-red-500">*</span>
              </h2>
              <p className="text-white/50 text-sm mb-6">(we’ll use this to get in touch)</p>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Type your answer here..."
                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 text-white text-[1.4rem] pb-3 mb-2 placeholder:text-[1.2rem] focus:outline-none focus:border-white focus:ring-0 transition-all duration-300"
                required
              />
            </>
          )}

          {formStep === 3 && (
            <>
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                3 → Company or Brand name? <span className="text-red-500">*</span>
              </h2>
              <p className="text-white/50 text-sm mb-6">(can be personal or business)</p>
              <input
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Type your answer here..."
                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 text-white text-[1.4rem] pb-3 mb-2 placeholder:text-[1.2rem] focus:outline-none focus:border-white focus:ring-0 transition-all duration-300"
                required
              />
            </>
          )}

          {formStep === 4 && (
            <>
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                4 → Explain your vision <span className="text-red-500">*</span>
              </h2>
              <p className="text-white/50 text-sm mb-6">(project details, dreams, or goals)</p>
              <textarea
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="Type your answer here..."
                rows="6"
                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 text-white text-[1.4rem] pb-3 mb-2 placeholder:text-[1.2rem] focus:outline-none focus:border-white focus:ring-0 transition-all duration-300"
                required
              />
            </>
          )}

          {formStep === 5 && (
            <>
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                5 → Estimate your monthly budget <span className="text-red-500">*</span>
              </h2>
              <p className="text-white/50 text-sm mb-6">(helps us tailor solutions to your needs)</p>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g. $1,000 – $3,000"
                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 text-white text-[1.4rem] pb-3 mb-2 placeholder:text-[1.2rem] focus:outline-none focus:border-white focus:ring-0 transition-all duration-300"
                required
              />
            </>
          )}

          <div className="flex justify-between items-center pt-8">
            {formStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-transparent border border-white/50 text-white font-bold uppercase tracking-wider px-8 py-3 rounded-none hover:bg-white/10 transition-colors duration-300"
              >
                Back
              </button>
            )}
            {formStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-electric-green text-black font-bold uppercase tracking-wider px-8 py-3 rounded-none hover:bg-white transition-colors duration-300 transform hover:scale-105"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-high-voltage-blue text-white font-bold uppercase tracking-wider px-8 py-3 rounded-none hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      )}
      <div className="text-center text-xl font-bold mt-24 text-soft-gray uppercase tracking-widest">hello@moowomedia.com</div>
      
    </section>
  );
}