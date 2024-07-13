import { useState } from "react";
import React from "react";

import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import "../../assets/about.css";

function About() {
  return (
    <>
      <title>About | DDA</title>
      <Banner bannerStyle="alt" />
      <div className="navbar-spacer">&nbsp;</div>
      <div className="page-title">About</div>
      <div className="about-container">
        <div className="about-div">
          <img className="about-image" src="assets/template.jpg" />
        </div>
        <div className="about-div">
          <p className="about-p">
            Doug Dixon & Associates (DDA) is a bridge and structural engineering
            consulting firm established in 2017 by Doug Dixon, P.Eng. and Jigish
            Naik, P.Eng.
          </p>
          <p className="about-p">
            Starting as a two-person team, DDA has grown sustainably under Doug
            and Jigish's leadership. Today, our team comprises over 30
            engineering professionals, technicians, and support staff.
          </p>
          <p className="about-p">
            With the combined expertise of our senior professionals, we have
            successfully delivered more than 200 projects for infrastructure
            owners, designers, and constructors since our inception.
          </p>
        </div>
      </div>
      <div className="bottom-spacer">&nbsp;</div>
      <Footer />
    </>
  );
}

export default About;
