import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Articles from "./components/Articles";
import Shop from "./components/Shop";
import ContactMe from "./components/ContactMe";

import "./App.css";

const SiteBot = lazy(() => import("./components/SiteBot"));
const AllArticles = lazy(() => import("./components/AllArticles"));
const ArticleDetail = lazy(() => import("./components/ArticleDetail"));
const Reels = lazy(() => import("./components/Reels"));
const About = lazy(() => import("./components/About"));
const Hire = lazy(() => import("./components/Hire"));
const Admin = lazy(() => import("./components/Admin"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const ShopPage = lazy(() => import("./components/ShopPage"));
const Quiz = lazy(() => import("./components/Quiz"));

function Loading() {
  return <div className="page-loading">Loading...</div>;
}

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <Suspense fallback={null}>
        <SiteBot />
      </Suspense>

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
    <Suspense fallback={<Loading />}>
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
          path="/quiz"
          element={
            <PageLayout>
              <Quiz />
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
    </Suspense>
  );
}

export default App;