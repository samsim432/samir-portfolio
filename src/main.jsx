import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import "./styles/global.css";

import App from "./App.jsx";
import { initGA, trackPageView } from "./analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}

initGA();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);