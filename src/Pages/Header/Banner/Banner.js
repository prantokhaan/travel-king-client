import React from 'react';
import './Banner.css'
import Slider from './Slider';
import vidOne from "../../../Videos/vid-1.mp4";
import vidTwo from "../../../Videos/vid-2.mp4";
import vidThree from "../../../Videos/vid-3.mp4";
import vidFour from "../../../Videos/vid-4.mp4";
import vidFive from "../../../Videos/vid-5.mp4";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="banner">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>discover new places with us, adventure awaits</p>
          <Link to="/packages">
            <button className="primary-button">Discover More</button>
          </Link>
        </div>

        <div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide  video-container"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators controls">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active vid-btn"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                class="vid-btn"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                class="vid-btn"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                class="vid-btn"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                class="vid-btn"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                {/* <video src={vidOne} loop autoPlay muted alt="..." /> */}
                <img
                  src="https://images.unsplash.com/photo-1510041883570-1c5b27d85cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80"
                  alt=""
                />
              </div>
              <div class="carousel-item w-100">
                {/* <video src={vidTwo} loop autoPlay muted alt="..." /> */}
                <img
                  src="https://images.unsplash.com/photo-1568282167464-cb0d811b05c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                {/* <video src={vidThree} loop autoPlay muted alt="..." /> */}
                <img
                  src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                {/* <video src={vidFour} alt="..." loop autoPlay muted /> */}
                <img
                  src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                {/* <video src={vidFive} alt="..." loop autoPlay muted /> */}
                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;