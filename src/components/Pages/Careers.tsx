import React from "react";

import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion";

import "../../assets/careers.css";
import careersList from "../../../public/db/careersList";

interface PositionsItems {
  title: string;
  category: string;
  type: string;
  location: string;
  description: string;
  descriptionList: string[];
  qualification: string;
  qualificationList: string[];
}

interface PositionsProps {
  positions: PositionsItems[];
}

const positions = careersList;

const Careers = ({ positions }: PositionsProps) => {
  const imageList: string[] = ["assets/home-images/home_gallery_5.jpg"];

  return (
    <>
      <title>Team | DDA</title>
      <Banner />
      <Gallery id="homeGallery" imageList={imageList}>
        <br />
        <br />
        Careers
      </Gallery>
      <div className="careers-container">
        <p>
          At DDA, we are committed to the continued growth of your knowledge and
          the development of your career through exposure to a variety of tasks
          within your field. We encourage our Team to participate in seminars
          and conferences to keep up with today’s technology and opportunities.
          Our firm is committed to providing mentoring, training, performance
          reviews, feedback and other assistance throughout your career path. We
          are interested in you attending and participating in seminars, courses
          and conferences. We strive to provide you with a healthy and safe
          working environment. At DDA, we are committed to achieving a work/life
          balance that suits your needs. We understand family demands and are
          flexible in addressing those priorities in establishing suitable
          working hours within our core business hours.
        </p>
        <p>
          DDA encourages our employees to take their entitled vacation time. Our
          firm also provides our full-time employees with a matching
          contribution Pension Plan and a Health, Dental and Drug Benefits Plan
          for you and your families use.
        </p>
        <p>
          Submit your application today! Even if DDA does not have a current
          opening available, we appreciate your interest and will keep your CV
          on file for future reference, once a position opens up. Come join us
          for a healthy and enjoyable work environment to further your success
          and reach your career goals in the field of structural engineering!
        </p>
        <Accordion positions={careersList} />
      </div>

      <div className="bottom-spacer">&nbsp;</div>
      <Footer />
    </>
  );
};

export default Careers;
