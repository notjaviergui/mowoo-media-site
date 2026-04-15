import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import './index.css'
import VideoHero from './components/VideoHero';
import AdFeed from './components/AdFeed';
import MetricsProof from './components/MetricsProof';
import BeforeAfter from './components/BeforeAfter';
import CampaignTimeline from './components/CampaignTimeline';
import ProcessSteps from './components/ProcessSteps';
import CTA from './components/CTA';
import Services from './pages/Services';
import JoinUs from './pages/JoinUs';
import Newsletter from './pages/Newsletter';
import Clients from './pages/Clients';
import Layout from './components/Layout';
import Us from './pages/Us';
import WorkUs from './pages/WorkUs';
import WebsitesSection from './components/services/WebsitesSection';
import PaidMediaSection from './components/services/PaidMediaSection';
import RetentionSection from './components/services/RetentionSection';
import Footer from './components/Footer';
import ClientsPortal from './pages/ClientsPortal';
import AIChatBox from './components/AIChatBox';
import './components/AIChatBox.css';

const LandingPage = () => (
  <div className="page-load">
    <div className="font-sans text-foreground bg-background page-load">
      <div className="animate-fade-slide">
        <VideoHero />
        <AdFeed />
        <MetricsProof />
        <BeforeAfter />
        <CampaignTimeline />
        <ProcessSteps />
        <CTA />
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
          <Route path="/pages/clients-portal" element={<Layout><ClientsPortal /></Layout>} />
          <Route path="/pages/us" element={<Layout><Us /></Layout>} />
          <Route path="/WorkUs" element={<Layout><WorkUs /></Layout>} />
        </Routes>
      </Router>
      <AIChatBox /> {/* <-- globally included */}
    </ParallaxProvider>
  </React.StrictMode>
);