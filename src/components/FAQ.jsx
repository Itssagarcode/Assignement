import React from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  return (
    <section className="faq">
      <h2 className="faq-title">✶ Frequently asked questions</h2>
      <div className="faq-list">
        <div>
          <h3 className="faq-question">What is your design process?</h3>
          <p className="faq-answer">
            My design process typically involves four key phases: research,
            design, prototype, and test. In the research phase, I gather
            insights about the user and their needs. In the design phase, I
            create wireframes and visual designs that meet those needs. In the
            prototype phase, I create interactive models of the design for
            testing. In the test phase, I collect feedback from users to refine
            the design.
          </p>
        </div>
        <div>
          <h3 className="faq-question">
            What tools and software do you use for UX design?
          </h3>
        </div>
        <div>
          <h3 className="faq-question">
            How do you measure the success of your UX designs?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
