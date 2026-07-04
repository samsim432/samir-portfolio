import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Articles from "./components/Articles";
import ContactMe from "./components/ContactMe";

import "./App.css";

const SiteBot = lazy(() => import("./components/SiteBot"));
const AllArticles = lazy(() => import("./components/AllArticles"));
const ArticleDetail = lazy(() => import("./components/ArticleDetail"));
const About = lazy(() => import("./components/About"));
const Hire = lazy(() => import("./components/Hire"));
const Admin = lazy(() => import("./components/Admin"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const Disclaimer = lazy(() => import("./components/Disclaimer"));
const EditorialPolicy = lazy(() => import("./components/EditorialPolicy"));
const Quiz = lazy(() => import("./components/Quiz"));

function Loading() {
  return <div className="page-loading">Loading...</div>;
}

function SEO({
  title = "Samir Simkhada | AI & Science",
  description = "AI, science, space, technology, and educational articles by Samir Simkhada.",
  noIndex = false,
}) {
  const location = useLocation();
  const cleanPath =
    location.pathname === "/" ? "" : location.pathname.replace(/\/$/, "");

  const canonicalUrl = `https://samirsimkhada.com.np${cleanPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
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
      <SEO
        title="Samir Simkhada | AI & Science"
        description="Explore AI, science, space, technology, and educational articles by Samir Simkhada."
      />
      <Home />
      <Articles />
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
              <SEO
                title="Articles | Samir Simkhada"
                description="Read AI, science, space, technology, and What If articles by Samir Simkhada."
              />
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



        <Route path="/shop" element={<Navigate to="/" replace />} />

        <Route
          path="/about"
          element={
            <PageLayout>
              <SEO
                title="About | Samir Simkhada"
                description="Learn about Samir Simkhada, his work in AI, science, technology, and educational content."
              />
              <About />
            </PageLayout>
          }
        />

        <Route
          path="/hire"
          element={
            <PageLayout>
              <SEO
                title="Hire Me | Samir Simkhada"
                description="Hire Samir Simkhada for AI, web development, technical content, and digital projects."
              />
              <Hire />
            </PageLayout>
          }
        />

        <Route
          path="/quiz"
          element={
            <PageLayout>
              <SEO
                title="Quiz | Samir Simkhada"
                description="Test your knowledge with quizzes about AI, science, space, and general knowledge."
              />
              <Quiz />
            </PageLayout>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <PageLayout>
              <SEO
                title="Privacy Policy | Samir Simkhada"
                description="Read the privacy policy for samirsimkhada.com.np."
              />
              <PrivacyPolicy />
            </PageLayout>
          }
        />

        <Route
          path="/terms-and-conditions"
          element={
            <PageLayout>
              <SEO
                title="Terms & Conditions | Samir Simkhada"
                description="Read the terms and conditions for using samirsimkhada.com.np."
              />
              <TermsAndConditions />
            </PageLayout>
          }
        />

        <Route
          path="/disclaimer"
          element={
            <PageLayout>
              <SEO
                title="Disclaimer | Samir Simkhada"
                description="Read the educational content disclaimer for samirsimkhada.com.np."
              />
              <Disclaimer />
            </PageLayout>
          }
        />

        <Route
          path="/editorial-policy"
          element={
            <PageLayout>
              <SEO
                title="Editorial Policy | Samir Simkhada"
                description="Learn how content is researched, written, reviewed, and updated on samirsimkhada.com.np."
              />
              <EditorialPolicy />
            </PageLayout>
          }
        />

        <Route
          path="/admin"
          element={
            <PageLayout>
              <SEO title="Admin | Samir Simkhada" noIndex={true} />
              <Admin />
            </PageLayout>
          }
        />

        <Route path="/articles-page" element={<Navigate to="/articles" replace />} />

        <Route
          path="*"
          element={
            <PageLayout>
              <SEO
                title="404 - Page Not Found | Samir Simkhada"
                description="This page does not exist on samirsimkhada.com.np."
                noIndex={true}
              />
              <div style={{ padding: "120px 20px", textAlign: "center" }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Go back home</a>
              </div>
            </PageLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;