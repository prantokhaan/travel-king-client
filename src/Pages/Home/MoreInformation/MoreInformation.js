import React from 'react';
import { Link } from 'react-router-dom';
import './MoreInformation.css'

const MoreInformation = () => {
    return (
      <div>
        <div className="about section">
          <div className="about-container justify-content-between">
            <div className="about-data">
              <h2 className="about-title">
                More Information <br /> About
                The <span className="color-1">Best Beaches</span>
              </h2>
              <p className="praragraph">
                You can find the most beautiful and pleasant places at the best
                prices with special discounts, you choose the place we will
                guide you all the way to wait, get your place now.
              </p>
              <Link to="/packages">
                <button className="ms-0 secondary-button">Discover More</button>
              </Link>
            </div>

            <div className="about-img">
              <div className="about-img-overlay">
                <img
                  src="https://i.ibb.co/LgyC9bH/image.png"
                  alt=""
                  className="about-img-one"
                />
              </div>

              <div className="about-img-overlay">
                <img
                  src="https://i.ibb.co/x2BS9fZ/about2.jpg"
                  alt=""
                  className="about-img-two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MoreInformation;