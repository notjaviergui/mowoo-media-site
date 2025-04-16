import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import wavesVideo from '../assets/Waves.mp4';

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [projectInput, setProjectInput] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [manuallyClosed, setManuallyClosed] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (manuallyClosed || hasShown) return;

    let autoCloseTimeout;

    const handleScroll = () => {
      if (window.scrollY > 300 && !showPopup) {
        setShowPopup(true);
        setFadeOut(false);
        setLastScrollY(window.scrollY);
        setHasShown(true);

        // Auto-fade after 4 seconds even if no further scroll
        autoCloseTimeout = setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setShowPopup(false), 500);
        }, 10000);
      } else if (showPopup && window.scrollY !== lastScrollY && !isTyping) {
        clearTimeout(autoCloseTimeout);
        setFadeOut(true);
        setTimeout(() => setShowPopup(false), 500);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPopup, lastScrollY, manuallyClosed, hasShown, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/WorkUs', { state: { project: projectInput } });
  };

  const handleClose = () => {
    setFadeOut(true);
    setManuallyClosed(true);
    setTimeout(() => setShowPopup(false), 500);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-500 ${showPopup ? (fadeOut ? 'opacity-0' : 'opacity-100') : 'hidden'}`}
    >
      {showPopup && (
        <div className="bg-white flex flex-col md:flex-row rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full mx-4 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-black text-2xl font-bold focus:outline-none z-10"
            aria-label="Close"
          >
            &times;
          </button>
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold uppercase text-black mb-4">
              Let’s Build Something Great
            </h2>
            <p className="text-gray-700 mb-6">
              Get a head start on your project. Share your vision and we’ll be in touch!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={projectInput}
                onChange={(e) => {
                  setProjectInput(e.target.value);
                  setIsTyping(true);
                }}
                placeholder="Describe your project..."
                className="w-full p-4 text-md border border-gray-400 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-md text-md font-semibold hover:bg-gray-800 transition duration-200"
              >
                Let's Talk
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              *We respect your inbox. No spam—just good ideas.
            </p>
          </div>

          {/* Right Side: Video */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#f3f3f3]">
            <video
              key={showPopup}  // forces re-mount to trigger autoplay
              src={wavesVideo}
              className="rounded-md shadow-md w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollPopup;