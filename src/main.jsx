import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";
import "./index.css";
import Layout from "./components/Layout";
import VideoHero from "./components/VideoHero";
import ServicesOverview from "./components/ServicesOverview";
import AdFeed from "./components/AdFeed";
import ProcessSteps from "./components/ProcessSteps";
import AgentDemo from "./components/AgentDemo";
import CTA from "./components/CTA";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Us from "./pages/Us";
import WorkUs from "./pages/WorkUs";
import Newsletter from "./pages/Newsletter";
import JoinUs from "./pages/JoinUs";
import ClientsPortal from "./pages/ClientsPortal";
function LandingPage() {
  return (
    <>
      <VideoHero />
      <div className="brand-strip section-shell">
        <p>
          Creative connections.
          <br />
          <strong>Across different worlds.</strong>
        </p>
        <span>INOPERA</span>
        <span className="serif-brand">MAYU</span>
        <span>Miami Mojito Co.</span>
        <span>SUCHES CABINS</span>
      </div>
      <ServicesOverview />
      <AdFeed />
      <ProcessSteps />
      <AgentDemo />
      <CTA />
    </>
  );
}
const servicePaths = [
  "/services",
  "/components/services/creativesection",
  "/components/services/websitessection",
  "/components/services/paidmediasection",
  "/components/services/retentionsection",
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />
        {servicePaths.map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
        ))}
        {["/book-demo", "/WorkUs", "/contact"].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <WorkUs />
              </Layout>
            }
          />
        ))}
        <Route
          path="/pages/clients"
          element={
            <Layout>
              <Clients />
            </Layout>
          }
        />
        {["/pages/us", "/about"].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Us />
              </Layout>
            }
          />
        ))}
        <Route
          path="/pages/newsletter"
          element={
            <Layout>
              <Newsletter />
            </Layout>
          }
        />
        <Route
          path="/pages/join-us"
          element={
            <Layout>
              <JoinUs />
            </Layout>
          }
        />
        <Route
          path="/pages/clients-portal"
          element={
            <Layout>
              <ClientsPortal />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <section className="page-intro section-shell">
                <p className="eyebrow">404</p>
                <h1>
                  Let’s get you
                  <br />
                  back on track.
                </h1>
                <Link className="button button-dark" to="/">
                  Back to home ↗
                </Link>
              </section>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
