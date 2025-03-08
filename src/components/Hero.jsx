import React from "react";
import "../styles/Hero.css";
import pic from "../assets/pic.jpg";
import pic2 from "../assets/pic2.png";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        I AM A <span className="highlight"><img className="pic" src={pic} alt="" /> FREELANCE</span> DESIGNER{" "}
        <span className="highlight"><img className="pic" src={pic2} alt="" /></span> FROM <br />
        SAN FRANCISCO
      </h1>
      <div className="box">
        <div className="heading">
          <h3>doradesign</h3>
          <h3>Wave</h3>
          <h3>Silsila</h3>
        </div>

        <div className="para">
          <p className="hero-subtext">
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

