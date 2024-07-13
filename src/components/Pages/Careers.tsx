import React from "react";

import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import "../../assets/careers.css";

const Careers: React.FC = () => {
    const imageList: string[] = [
        "assets/home-images/home_gallery_3.jpg"
      ];

  return (
    <>
      <title>Team | DDA</title>
      <Banner />
      <Gallery id="homeGallery" imageList={imageList}>
        <br />
        <br />
          Careers
        </Gallery>
      <div className="bottom-spacer">&nbsp;</div>
      <Footer />
    </>
  );
};

export default Careers;