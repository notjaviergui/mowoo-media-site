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
    <section className="relative bg-[#1a1a1a] text-white font-sans pt-32 pb-16 px-6 md:px-16 min-h-screen">
      <img
        src="/Images/Drawing.png"
        alt="decorative background 1"
        className="absolute top-10 left-10 w-40 h-40 opacity-30 animate-spin-slow"
      />
      <img
        src="/Images/Drawing.png"
        alt="decorative background 2"
        className="absolute bottom-10 right-10 w-60 h-60 opacity-30 animate-spin-slow"
      />
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
        Let’s start your project
      </h2>
      <p className="text-[#cbd5e1] text-center text-sm md:text-base mb-10">
        Just a few questions to understand your goals better.
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

          <div className="flex justify-between items-center pt-4">
            {formStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-700 text-white px-6 py-2 rounded-full hover:scale-105 transition"
              >
                Back
              </button>
            )}
            {formStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#06b6d4] text-white px-6 py-2 rounded-full hover:scale-105 transition relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="relative z-10">Submit</span>
              </button>
            )}
          </div>
        </form>
      )}
      <div className="text-center text-xl font-medium mt-12 text-white">hello@moowomedia.com</div>
      
    </section>
  );
}