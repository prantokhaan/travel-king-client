import React from 'react';
import './Experience.css';
import imgOne from './../../../images/experience1.jpg';
import imgTwo from './../../../images/experience2.jpg';

const Experience = () => {
    return (
      <div>
        <section class="experience section">
          <h1 class="heading">
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

          <div class="experience-container">
            <div class="experience-content">
              <div class="experience-data">
                <h2 class="experience-number">20</h2>
                <span class="experience-description">
                  Year <br /> Experience
                </span>
              </div>

              <div class="experience-data">
                <h2 class="experience-number">750+</h2>
                <span class="experience-description">
                  Complete <br /> tours
                </span>
              </div>

              <div class="experience-data">
                <h2 class="experience-number">650+</h2>
                <span class="experience-description">
                  Tourist <br /> Destination
                </span>
              </div>
            </div>

            <div class="experience-img grid">
              <div class="experience-overlay">
                <img src={imgOne} alt="" class="experience-img-one" />
              </div>

              <div class="experience-overlay">
                <img src={imgTwo} alt="" class="experience-img-two" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Experience;