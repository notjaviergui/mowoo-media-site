import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css'
import VideoHero from './components/VideoHero';
import Hero from './components/Hero';
import ConsultingPipeline from './components/ConsultingPipeline';
import Contact from './components/Contact';
import Stats from './components/Stats';
import Services from './pages/services';
import JoinUs from './pages/JoinUs';
import Newsletter from './pages/Newsletter';
import Clients from './pages/Clients';
import Layout from './components/Layout';
import Us from './pages/Us';
import WorkUs from './pages/WorkUs';
import WebsitesSection from './components/services/WebsitesSection';
import PaidMediaSection from './components/services/PaidMediaSection';
import RetentionSection from './components/services/RetentionSection';
import ScrollPopup from './components/ScrollPopup';
import Footer from './components/Footer';
import AIChatBox from './components/AIChatBox';
import './components/AIChatBox.css';

const LandingPage = () => (
  <div className="page-load">
    <div className="font-sans text-gray-900 bg-white page-load">
      <div className="animate-fade-slide">
        <VideoHero />
        <Hero />
        <ConsultingPipeline />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-8 px-8 py-20 md:py-28 bg-white">
          <div className="text-left space-y-6">
            <h3 className="text-md text-gray-700 font-medium">We optimize and grow all your customer touch points.</h3>
            <div className="space-y-4">
              <Link to="/components/services/websitessection" className="block text-7xl font-bold text-black hover:text-indigo-500 transition duration-300">Websites</Link>
              <Link to="/components/services/paidmediasection" className="block text-7xl font-bold text-black hover:text-indigo-500 transition duration-300">Paid Media</Link>
              <Link to="/components/services/creativesection" className="block text-7xl font-bold text-black hover:text-indigo-500 transition duration-300">Creative</Link>
              <Link to="/components/services/retentionsection" className="block text-7xl font-bold text-black hover:text-indigo-500 transition duration-300">Retention</Link>
              <Link to="/WorkUs" className="block text-5xl font-light text-black hover:text-indigo-500 transition duration-300">Work With Us</Link>
            </div>
          </div>
        </div>
        <ScrollPopup />
        <Stats />
        <Contact />
        <Footer />
      </div> {/* Close animate-fade-slide wrapper */}
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/components/services/websitessection" element={<Layout><WebsitesSection /></Layout>} />
          <Route path="/components/services/paidmediasection" element={<Layout><PaidMediaSection /></Layout>} />
          <Route path="/components/services/creativesection" element={<Layout><Services /></Layout>} />
          <Route path="/components/services/retentionsection" element={<Layout><RetentionSection /></Layout>} />
          <Route path="/pages/join-us" element={<Layout><JoinUs /></Layout>} />
          <Route path="/pages/newsletter" element={<Layout><Newsletter /></Layout>} />
          <Route path="/pages/clients" element={<Layout><Clients /></Layout>} />
          <Route path="/pages/us" element={<Layout><Us /></Layout>} />
          <Route path="/WorkUs" element={<Layout><WorkUs /></Layout>} />
        </Routes>
      </Router>
      <AIChatBox /> {/* <-- globally included */}
    </ParallaxProvider>
  </React.StrictMode>
);