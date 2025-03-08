import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Hero />
        <Expertise />
        <Works />
        <Experience />
        <Blog />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
