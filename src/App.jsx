import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Skills from "./pages/Skills";
import Stories from "./pages/Stories";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

