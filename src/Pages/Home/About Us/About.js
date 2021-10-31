import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../images/Trip-pana.svg";

const About = () => {
  return (
    <div>
      <div className="my-3 container text-center">
        {/* About Section  */}
        <div className="section-title text-center mb-3">
          {/* Heading  */}
          <h1 className="heading">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span className="space">{""}</span>
            <span>U</span>
            <span>S</span>
          </h1>
        </div>
        <div>
          {/* About Image  */}
          <div className="about-img ms-2">
            <img src={aboutImg} alt="" width="500px" />
          </div>
          <br />
          {/* Info of Travel King  */}
          <div className="mt-5 ms-5 p-2">
            <h6 className="mt-4 lh-lg color-4">
              Founded in 2001, Travel King has grown from a small start-up
              to one of the world’s leading digital travel companies. Part of
              Booking Holdings Inc. (NASDAQ: BKNG), Travel King’s mission is to
              make it easier for everyone to experience the world. By investing
              in technology that takes the friction out of travel, Travel King
              seamlessly connects millions of travelers to memorable
              experiences, a variety of transportation options, and incredible
              places to stay – from homes to hotels, and much more. As one of
              the world’s largest travel marketplaces for both established
              brands and entrepreneurs of all sizes, Travel King enables
              properties around the world to reach a global audience and grow
              their businesses. Travel King is available in 43 languages and
              offers more than 28 million reported accommodation listings,
              including over 6.2 million homes, apartments, and other unique
              places to stay. Wherever you want to go and whatever you want to
              do, Travel King makes it easy and supports you with 24/7 customer
              support.
            </h6>
            <Link className="mx-auto" to="/packages">
              <button className="primary-button rounded-pill py-2 px-4 mt-3 mx-auto">
                <i className="fas fa-plane"></i> Book a Flight
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
