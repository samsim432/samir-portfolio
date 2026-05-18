import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhatIf from "./components/WhatIf";
import Articles from "./components/Articles";
import AllArticles from "./components/AllArticles";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Reels from "./components/Reels";
import ArticleDetail from "./components/ArticleDetail";
import Admin from "./components/Admin";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";

import "./App.css";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function MainPage() {
  return (
    <PageLayout>
      <Home />
      <WhatIf />
      <Articles />
      <ContactMe />
    </PageLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route
        path="/what-if"
        element={
          <PageLayout>
            <WhatIf />
          </PageLayout>
        }
      />

      <Route
        path="/articles"
        element={
          <PageLayout>
            <AllArticles />
          </PageLayout>
        }
      />

      <Route
        path="/reels"
        element={
          <PageLayout>
            <Reels />
          </PageLayout>
        }
      />
      <Route
  path="/articles/:slug"
  element={
    <PageLayout>
      <ArticleDetail />
    </PageLayout>
  }
/>
<Route
  path="/admin"
  element={
    <PageLayout>
      <Admin />
    </PageLayout>
  }
/>

<Route
  path="/about"
  element={
    <PageLayout>
      <About />
    </PageLayout>
  }
/>

<Route
  path="/privacy-policy"
  element={
    <PageLayout>
      <PrivacyPolicy />
    </PageLayout>
  }
/>

      <Route path="/articles-page" element={<Navigate to="/articles" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;