import { useState } from "react";
import React from "react";

import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import "../Gallery/HomeGallery.css";
import "../Banner/Banner-Std.css";
import "../../assets/home.css";

const Home: React.FC = () => {
  const imageList: string[] = [
    "assets/home-images/home_gallery_1.jpg",
    "assets/home-images/home_gallery_6.jpg",
    "assets/home-images/home_gallery_3.jpg",
  ];

  return (
    <>
      <title>Home | DDA</title>
      <Banner bannerStyle="std" />
      <div className ="page-container">
        <Gallery id="homeGallery" imageList={imageList}>
          Bridge engineering consultant
        </Gallery>
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
      </div>
      <div className="footer-spacer">&nbsp;</div>
      <Footer />
    </>
  );
};

export default Home;
