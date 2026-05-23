import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SiteBot from "./components/SiteBot";

import Home from "./components/Home";
import Articles from "./components/Articles";
import Shop from "./components/Shop";
import ContactMe from "./components/ContactMe";

import AllArticles from "./components/AllArticles";
import ArticleDetail from "./components/ArticleDetail";
import Reels from "./components/Reels";
import About from "./components/About";
import Hire from "./components/Hire";
import Admin from "./components/Admin";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ShopPage from "./components/ShopPage";

import "./App.css";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <SiteBot />
    </>
  );
}

function MainPage() {
  return (
    <PageLayout>
      <Home />
      <Articles />
      <Shop />
      <ContactMe />
    </PageLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route
        path="/articles"
        element={
          <PageLayout>
            <AllArticles />
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
        path="/shop"
        element={
          <PageLayout>
            <ShopPage />
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
        path="/about"
        element={
          <PageLayout>
            <About />
          </PageLayout>
        }
      />

      <Route
        path="/hire"
        element={
          <PageLayout>
            <Hire />
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