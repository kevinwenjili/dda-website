import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  positions: any;
}

const Accordion = ({ positions }: Props) => {
  return (
    <>
      <div className="accordion accordion-flush" id="careersBoard">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <div className="position-header-category">
              <span>Open Positions</span>
              <span>Type</span>
              <span>Office Location</span>
            </div>
          </h2>
        </div>
        {positions.map((position: any, index: number) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed position-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + index}
                aria-expanded="false"
                aria-controls={"collapse" + index}
              >
                <div className="position-header-content">
                  <span>
                    <strong>{position.title}</strong>
                  </span>
                  <span>{position.type}</span>
                  <span>{position.location}</span>
                </div>
              </button>
            </h2>
            <div
              id={"collapse" + index}
              className="accordion-collapse collapse"
              data-bs-parent="#careersBoard"
            >
              <div className="accordion-body position-body-content">
                <div>
                  <strong>Description and Responsibilities</strong>
                </div>
                <div>{position.description}</div>
                <ul>
                  {position.descriptionList.map((dList: string) => (
                    <li>{dList}</li>
                  ))}
                </ul>
                <div>
                  <strong>Qualifications</strong>
                </div>
                <div>{position.qualification}</div>
                <ul>
                  {position.qualificationList.map((qList: string) => (
                    <li>{qList}</li>
                  ))}
                </ul>
                <a
                  href={
                    "mailto:careers@dougdixonassociates.com?subject=Application for " +
                    position.title +
                    "&body=[Remember to attach your cover letter and resume!]"
                  }
                >
                  Apply Today
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
