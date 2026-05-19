import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Shop from "./components/Shop";
import AllArticles from "./components/AllArticles";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Reels from "./components/Reels";
import ArticleDetail from "./components/ArticleDetail";
import Admin from "./components/Admin";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Hire from "./components/Hire";
import ShopPage from "./components/ShopPage";

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
      <Articles />
      <Shop />
      <ContactMe />
    </PageLayout>
  );
}

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<MainPage />} />

      {/* ARTICLES PAGE */}
      <Route
        path="/articles"
        element={
          <PageLayout>
            <AllArticles />
          </PageLayout>
        }
      />

      {/* ARTICLE DETAIL */}
      <Route
        path="/articles/:slug"
        element={
          <PageLayout>
            <ArticleDetail />
          </PageLayout>
        }
      />

      {/* REELS */}
      <Route
        path="/reels"
        element={
          <PageLayout>
            <Reels />
          </PageLayout>
        }
      />

      {/* ABOUT */}
      <Route
        path="/about"
        element={
          <PageLayout>
            <About />
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

      {/* HIRE */}
      <Route
        path="/hire"
        element={
          <PageLayout>
            <Hire />
          </PageLayout>
        }
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <PageLayout>
            <Admin />
          </PageLayout>
        }
      />

      {/* PRIVACY */}
      <Route
        path="/privacy-policy"
        element={
          <PageLayout>
            <PrivacyPolicy />
          </PageLayout>
        }
      />

      {/* OLD REDIRECT */}
      <Route
        path="/articles-page"
        element={<Navigate to="/articles" replace />}
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;