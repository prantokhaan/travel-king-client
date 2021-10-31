import React from 'react';
import './Experience.css';
import imgOne from './../../../images/experience1.jpg';
import imgTwo from './../../../images/experience2.jpg';

const Experience = () => {
    return (
      <div>
        <section className="experience section">

          {/* Heading  */}
          <h1 className="heading">
            <span>O</span>
            <span>U</span>
            <span>R</span>
            <span className="space">{""}</span>
            <span>E</span>
            <span>X</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>E</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
          </h1>


          {/* Experience Item  */}
          <div className="experience-container">
            <div className="experience-content">
              <div className="experience-data">
                <h2 className="experience-number">20</h2>
                <span className="experience-description">
                  Year <br /> Experience
                </span>
              </div>

              <div className="experience-data">
                <h2 className="experience-number">750+</h2>
                <span className="experience-description">
                  Complete <br /> tours
                </span>
              </div>

              <div className="experience-data">
                <h2 className="experience-number">650+</h2>
                <span className="experience-description">
                  Tourist <br /> Destination
                </span>
              </div>
            </div>

            {/* Image  */}

            <div className="experience-img grid">
              <div className="experience-overlay">
                <img src={imgOne} alt="" className="experience-img-one" />
              </div>

              <div className="experience-overlay">
                <img src={imgTwo} alt="" className="experience-img-two" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Experience;