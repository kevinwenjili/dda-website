import { useState } from "react";
import React from "react";

import Banner from "../Banner/Banner";
import "../../assets/about.css";

function About() {
  return (
    <>
      <title>About | DDA</title>
      <div className="navbar-spacer">&nbsp;</div>
      <div className="page-title">About</div>
      <Banner bannerStyle="alt" />
      <p className="about-p">
        Doug Dixon & Associates (DDA) was established in 2017 by Doug Dixon, P.Eng. and Jigish Naik, P.Eng.
      </p>
      <p className="about-p">
        Started as a two-person bridge and structural engineering firm, DDA has
        grown sustainably under Doug and Jigish's leadership. Today, our team
        comprises over 30 engineering professionals, technicians, and support
        staff.
      </p>
      <p className="about-p">
        With the combined expertise of our senior professionals, we have
        successfully delivered more than 200 projects for infrastructure owners,
        designers, and constructors since our inception.
      </p>
    </>
  );
}

export default About;
