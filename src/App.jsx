import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhatIf from "./components/WhatIf";
import Articles from "./components/Articles";
import AllArticles from "./components/AllArticles";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Reels from "./components/Reels";

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
    <BrowserRouter>
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

        <Route path="/articles-page" element={<Navigate to="/articles" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;