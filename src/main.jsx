import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/syne/latin-700.css";
import "@fontsource/syne/latin-800.css";
import "./index.css";
import "./editorial.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Us from "./pages/Us";
import WorkUs from "./pages/WorkUs";
import Newsletter from "./pages/Newsletter";
import JoinUs from "./pages/JoinUs";
import ClientsPortal from "./pages/ClientsPortal";
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
              <Home />
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
