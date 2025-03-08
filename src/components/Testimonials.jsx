import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Testimonial.css";
import profile from "../assets/profile.png";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <h2 className="testimonial-title">✶ What they say</h2>
      <div className="testimonial-content">
        <div className="user-info">
          <img src={profile} alt="User" className="user-img" />
          <div className="user-text">
            <p className="user-name">Floyd Miles</p>
            <p className="user-role">eBay</p>
          </div>
        </div>
        <blockquote className="quote">
          “Synergy's resume builder is fantastic. It helped me create a
          professional resume that stood out to employers. Synergy's resume
          builder is fantastic. It helped me create a professional resume that
          stood out to employers.”
        </blockquote>
      </div>
      <div className="nav-buttons">
        <button className="btn">
          <FaArrowLeft />
        </button>
        <button className="btn">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
