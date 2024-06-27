import { useState } from "react";
import React from "react";

import Banner from "../Banner/Banner";
import "../Banner/Banner-Std.css";
import "../../assets/home.css";

const Home: React.FC = () => {
  return (
    <>
      <title>Home | DDA</title>
      <Banner bannerStyle="std" />
      <div id="homeGallery" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeGallery"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeGallery"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#homeGallery"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner gallery-container">
          <div
            className="carousel-item active gallery-window"
            data-bs-interval="10000"
          >
            <img
              className="d-block"
              src="assets/home-images/home_gallery_1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item gallery-window">
            <img
              className="d-block"
              src="assets/home-images/home_gallery_6.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item gallery-window">
            <img
              className="d-block"
              src="assets/home-images/home_gallery_3.jpg"
              alt="Third slide"
            />
          </div>
          <div className="gallery-heading">
            <span>Bridge engineering consulant</span>
          </div>
        </div>
        {/* <a
      className="carousel-control-prev"
      href="#homeGallery"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#homeGallery"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a> */}
      </div>
      <div className="body-container">
        <div className="body-heading">
          <span>delivering expertise in:</span>
        </div>
      </div>
      <div className="body-container">
        <div className="body-content">
          <div className="body-category">Structural Design+Analysis</div>
          <div>Planning+EA</div>
          <div>Program Management</div>
          <div>Feasibility Study</div>
          <div>New Design</div>
          <div>Rehabilitation</div>
          <div>Evaluation</div>
          <div>Load Rating</div>
        </div>
        <div className="body-img-2">
          <img src="assets/home-images/body_design.png" />
        </div>
        <div className="body-content">
          <div className="body-category">Structural Inspection</div>
          <div>OSIM+Enhanced OSIM</div>
          <div>Condition Survey</div>
          <div>Non-Destructive Testing</div>
          <div>Underwater</div>
          <div>Fatigue</div>
          <div>Confined Space</div>
        </div>
        <div className="body-img-1">
          <img src="assets/home-images/body_inspection.png" />
        </div>
        <div className="body-content">
          <div className="body-category">Specialty Work</div>
          <div>Timber Bridge Design</div>
          <div>Moveable Bridge Design</div>
          <div>Forensic Engineering</div>
          <div>Structural Health Monitoring</div>
          <div>Asset Management</div>
          <div>Third-Party Review</div>
        </div>
        <div className="body-img-4">
          <img src="assets/home-images/body_specialty_2.png" />
        </div>
        <div className="body-content">
          <div className="body-category">Construction Support</div>
          <div>Contract Administration</div>
          <div>Construction Inspection</div>
          <div>Precast Shop Review</div>
          <div>Constructability Review</div>
          <div>Construction Engineering</div>
          <div>Temporary Works</div>
          <div>Site Support</div>
        </div>
        <div className="body-img-3">
          <img src="assets/home-images/body_construction_2.png" />
        </div>
      </div>
      <div>&nbsp;</div>
    </>
  );
};

export default Home;
