import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Stats from './components/Stats';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="font-sans text-gray-900 bg-white">
      <Hero />
      <Services />
      <Stats />
      <Contact />
    </div>
  </React.StrictMode>
)