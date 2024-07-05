import React from "react";

import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import ScrollSpy from "../ScrollSpy/ScrollSpy";
import "../../assets/team.css";

const Team: React.FC = () => {
  const sections = ["section1", "section2", "section3"];

  return (
    <>
      <title>Team | DDA</title>
      <Banner bannerStyle="alt" />
      <div className="navbar-spacer">&nbsp;</div>
      {/* <div className="page-title">Team</div> */}
      <ScrollSpy />
      <Footer />
    </>
  );
};

export default Team;
