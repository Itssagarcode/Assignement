// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Expertise from "./components/Expertise";
// import Works from "./components/Works";
// import Experience from "./components/Experience";
// import Blog from "./components/Blog";
// import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// import "./styles/App.css";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <Hero />
//         <Expertise />
//         <Works />
//         <Experience />
//         <Blog />
//         <Testimonials />
//         <FAQ />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// // Navbar.js
// export const Navbar = () => (
//   <nav className="navbar">
//     <h1 className="logo">PL</h1>
//     <ul className="nav-links">
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/projects">Projects</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//     <button className="cta-button">Let's Talk</button>
//   </nav>
// );

// // Hero.js
// export const Hero = () => (
//   <section className="hero">
//     <h2 className="hero-title">I AM A <span className="highlight">FREELANCE</span> DESIGNER FROM SAN FRANCISCO</h2>
//     <p className="hero-subtext">Welcome to my portfolio where creativity meets functionality.</p>
//   </section>
// );

// // Expertise.js
// export const Expertise = () => (
//   <section className="expertise">
//     <h3 className="section-title">Expertise</h3>
//     <div className="expertise-grid">
//       <div className="expertise-item">
//         <h4>Branding</h4>
//         <p>Crafting impactful, strategic brand identities.</p>
//       </div>
//       <div className="expertise-item">
//         <h4>UI Design</h4>
//         <p>Creating smooth, visually stunning interfaces.</p>
//       </div>
//     </div>
//   </section>
// );

// // Works.js
// export const Works = () => (
//   <section className="works">
//     <h3 className="section-title">Works</h3>
//     <div className="work-card">
//       <h4>Analysis Application</h4>
//       <p>User-focused application for financial analysis.</p>
//     </div>
//   </section>
// );

// // Experience.js
// export const Experience = () => (
//   <section className="experience">
//     <h3 className="section-title">Experience</h3>
//     <ul>
//       <li>Lead Product Designer - Fortknox (Jul 2021 - Oct 2022)</li>
//       <li>Intern Designer - OmniSoftec (May 2022 - Oct 2022)</li>
//     </ul>
//   </section>
// );

// // Blog.js
// export const Blog = () => (
//   <section className="blog">
//     <h3 className="section-title">Blog</h3>
//     <div className="blog-post">
//       <h4>How UX Works in Web</h4>
//     </div>
//   </section>
// );

// // Testimonials.js
// export const Testimonials = () => (
//   <section className="testimonials">
//     <h3 className="section-title">What They Say</h3>
//     <p className="testimonial-text">"Synergy’s resume builder is fantastic..."</p>
//   </section>
// );

// // FAQ.js
// export const FAQ = () => (
//   <section className="faq">
//     <h3 className="section-title">Frequently Asked Questions</h3>
//     <p>What is your design process?</p>
//   </section>
// );

// // Footer.js
// export const Footer = () => (
//   <footer className="footer">
//     <p>LET'S TALK!</p>
//     <p>rutherfordmanglona@email.com</p>
//   </footer>
// );

// /* styles/Navbar.css */
// .navbar {
//   display: flex;
//   justify-content: space-between;
//   padding: 16px;
//   background: black;
//   color: white;
// }

// .nav-links {
//   display: flex;
//   gap: 20px;
// }

// /* styles/Hero.css */
// .hero {
//   text-align: center;
//   padding: 50px 20px;
// }

// .hero-title {
//   font-size: 2.5rem;
// }

// .highlight {
//   color: cyan;
// }

// /* styles/Expertise.css */
// .expertise {
//   padding: 50px 20px;
// }

// .expertise-grid {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
// }

// /* styles/Footer.css */
// .footer {
//   text-align: center;
//   padding: 20px;
//   background: #111;
// }
