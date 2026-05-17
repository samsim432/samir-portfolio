import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhatIf from "./components/WhatIf";
import Articles from "./components/Articles";
import AllArticles from "./components/AllArticles";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Reels from "./components/Reels";

import "./App.css";

function MainPage() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <WhatIf />
        <Articles />
        <ContactMe />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route
          path="/reels"
          element={
            <>
              <Navbar />
              <Reels />
              <Footer />
            </>
          }
        />

        <Route
          path="/articles-page"
          element={
            <>
              <Navbar />
              <AllArticles />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;