import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      setIsVisible(bottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`w-full py-6 px-4 bg-white text-gray-700 text-sm text-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-2 md:space-y-0">
        <div className="flex space-x-6">
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/services" className="hover:text-gray-400 transition">Services</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
        </div>
        <div>
          <a href="https://instagram.com/moowomedia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2.25a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
            </svg>
            @moowomedia
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} Mowoo Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
