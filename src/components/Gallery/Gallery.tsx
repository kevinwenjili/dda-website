import { useState } from "react";

interface Props {
  children?: React.ReactNode;
  id: string;
  imageList: string[];
  interval?: number;
}

const Gallery = ({ id, imageList, interval = 10000, children }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {imageList.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                type="button"
                data-bs-target={"#" + id}
                data-bs-slide-to={index}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "true" : undefined}
                aria-label={"Slide " + (index + 1)}
                onClick={() => handleSlideChange(index)}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner gallery-container">
          {imageList.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`carousel-item gallery-window ${
                  isActive ? "active" : ""
                }`}
                data-bs-interval={interval}
              >
                <img
                  className="d-block"
                  src={image}
                  alt={"Slide " + (index + 1)}
                />
              </div>
            );
          })}
          <div className="gallery-heading">
            <span>{children}</span>
          </div>
        </div>
        {/* <a
            className="carousel-control-prev"
            href="#homeGallery"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#homeGallery"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a> */}
      </div>
    </>
  );
};

export default Gallery;
