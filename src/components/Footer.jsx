import React from "react";
import "../styles/Footer.css"; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="skills">
        <span>✶WEBFLOW</span>
        <span>✶FIGMA</span>
        <span>✶DESIGNER</span>
        <span>✶DEVELOPER</span>
      </div>
      <h1 className="talk-heading">LET’S TALK!</h1>
      <p className="email">rehanurraihan@gmail.com ↗</p>
      <div className="social-links">
        <span>Dribbble</span>
        <span>Behance</span>
        <span>Twitter</span>
        <span>Instagram</span>
      </div>
      <p className="copyright">© Rehan Raihan - 2023</p>
    </footer>
  );
};

export default Footer;
