import React from "react";
import "../styles/Works.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Works = () => {
  return (
    <section className="works">
    <h3 className="section-title">✶ Works</h3>
    <div className="works-container">
      <div className="work-item">
        <img src={img1} alt="Analysis Application" className="work-image" />
        <div className="work-content">
          <h3>Analysis Application</h3>
          <p>With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.</p>
          <div className="tags">
            <span>FIGMA</span>
            <span>UX</span>
          </div>
          <button className="case-study-btn">View Case Study</button>
        </div>
      </div>
      <div className="work-item">
        <img src={img2} alt="Fortknox Application" className="work-image" />
        <div className="work-content">
          <h3>Fortknox Application</h3>
          <p>With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.</p>
          <div className="tags">
            <span>MOBILE</span>
            <span>WEB</span>
          </div>
          <button className="case-study-btn">View Case Study</button>
        </div>
      </div>
      <div className="work-item">
        <img src={img3} alt="Zenocide Application" className="work-image" />
        <div className="work-content">
          <div className="work-content-upper">
          <h3>Zenocide Application</h3>
          <p>With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.</p>
          <div className="tags">
            <span>APP</span>
            <span>WEB</span>
          </div>
          </div>
          <button className="case-study-btn">View Case Study</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Works;
