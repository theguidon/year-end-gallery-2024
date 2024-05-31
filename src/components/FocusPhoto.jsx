import { useState } from "react";
import FocusPhotoText from "./FocusPhotoText";
import Image1 from "../assets/images/Rectangle 72.png";
import Image2 from "../assets/images/Rectangle 7.png";
import ExitButton from "../assets/images/ExitButton.svg";
import "../styles/FocusPhoto.css";

const FocusPhoto = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = (event) => {
    setModal(!modal);
    if (modal) {
      event.target.style = `position: relative;`;
      document.querySelectorAll(".photo").forEach((photo) => {
        if (photo !== event.target) {
          photo.style = `display: block;`;
        }
      });
    } else {
      if (event.target.classList.contains("photo")) {
        event.target.style = `position: fixed; top: 10%; cursor: zoom-out;`;
        document.querySelectorAll(".photo").forEach((photo) => {
          if (photo !== event.target) {
            photo.style = `display: none;`;
          }
        });
      }
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="photo-container">
        <img
          className="photo"
          src={Image2}
          alt="Year End Gallery 2023-2024 Photo"
          onClick={toggleModal}
        />
        <img
          className="photo"
          src={Image1}
          alt="Year End Gallery 2023-2024 Photo"
          onClick={toggleModal}
        />
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <FocusPhotoText />
          </div>
          <img
            className="close-modal"
            src={ExitButton}
            alt="Exit Button"
            onClick={toggleModal}
          />
        </div>
      )}
    </>
  );
};

export default FocusPhoto;
