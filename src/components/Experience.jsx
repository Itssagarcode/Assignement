import React from "react";
import "../styles/Experience.css"; // Import the CSS file

const Experience = () => {
  return (
    <section className="experience-section">
      <h3 className="experience-title">✶ Experience</h3>

      <div className="experience-container">
        {/* Experience Item 1 */}
        <div className="experience-item">
          <div className="experience-header">
            <h4 className="experience-role">Lead Product Designer</h4>
            <div className="experience-header-right">
            <p className="experience-company">Fortknox</p>
            <p className="experience-date">Jul 2021 - Oct 2022</p>
            </div>
           
          </div>
         
        </div>

        {/* Experience Item 2 */}
        <div className="experience-item">
          <div className="experience-header">
            <h4 className="experience-role">Intern Designer</h4>
            <div className="experience-header-right">
            <p className="experience-company">Fortknox</p>
            <p className="experience-date">Jul 2021 - Oct 2022</p>
            </div>
           
          </div>
         
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h4 className="experience-role">UI Designer</h4>
            <div className="experience-header-right">
            <p className="experience-company">Fortknox</p>
            <p className="experience-date">Jul 2021 - Oct 2022</p>
            </div>
           
          </div>
         
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h4 className="experience-role">Frontend Developer</h4>
            <div className="experience-header-right">
            <p className="experience-company">Fortknox</p>
            <p className="experience-date">Jul 2021 - Oct 2022</p>
            </div>
           
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Experience;


