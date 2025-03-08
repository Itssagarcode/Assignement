import React from "react";
import "../styles/Blog.css"; // Importing the CSS file
import img1 from "../assets/img1.png"; // Replace with the correct image path

const Blog = () => {
  return (
    <section className="blog">
      <h2 className="blog-title">✶ Blog</h2>
      <div className="blog-container">

        {/* Blog Post 1 */}
        <div className="blog-card">
          <img src={img1} alt="Blog" className="blog-image" />
          <div className="blog-content">
            <div className="blog-header">
              <h3 className="blog-heading">How UX works in web</h3>
              <button className="read-button">Read</button>
            </div>
            <p className="blog-date">Nov 9, 2023</p>
            <div className="blog-tags">
              <button className="tag-button">UI</button>
              <button className="tag-button">UX</button>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="blog-card">
          <img src={img1} alt="Blog" className="blog-image" />
          <div className="blog-content">
            <div className="blog-header">
              <h3 className="blog-heading">Case study - Analysis Application</h3>
              <button className="read-button">Read</button>
            </div>
            <p className="blog-date">Aug 18, 2023</p>
            <div className="blog-tags">
              <button className="tag-button">Design</button>
              <button className="tag-button">Print</button>
            </div>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="blog-card">
          <img src={img1} alt="Blog" className="blog-image" />
          <div className="blog-content">
            <div className="blog-header">
              <h3 className="blog-heading">3 ways to develop your skill</h3>
              <button className="read-button">Read</button>
            </div>
            <p className="blog-date">Feb 16, 2023</p>
            <div className="blog-tags">
              <button className="tag-button">Figma</button>
              <button className="tag-button">Web</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;


