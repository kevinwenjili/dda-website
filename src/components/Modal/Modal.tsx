import React, { useState, useEffect, useRef } from "react";

import "./Modal.css";

interface Props {
  showModal: boolean;
  handleHide: () => void;
  person: any;
}

const Modal = ({ showModal, handleHide, person }: Props) => {
  // console.log(person.fName + " " + person.lName);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleHide();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
          ref={modalRef}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title fs-5" id="staticBackdropLabel">
                <img
                  className="scroll-spy-tracked person-modal-image"
                  src={person.imgLink}
                />
                <p className="person-modal-name">
                  {person.fName +
                    " " +
                    person.lName +
                    (person.suffix ? ", " + person.suffix : "") +
                    (person.altSuffix ? ", " + person.altSuffix : "")}
                </p>
                <p className="person-modal-title">{person.title}</p>
              </div>
              <div className="modal-btn-container">
                <button
                  type="button"
                  className="btn-close modal-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleHide}
                ></button>
              </div>
            </div>
            <div className="modal-body">
              {person.content.map((paragraph: string) => (
                <p>{paragraph}</p>
              ))}
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleHide}
              >
                Return
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Modal;
