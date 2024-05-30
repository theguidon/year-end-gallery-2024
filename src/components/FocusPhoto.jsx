import { useState } from "react";
import FocusPhotoText from "./FocusPhotoText";
import Image1 from "../assets/images/Rectangle 72.png";
import Image2 from "../assets/images/Rectangle 7.png";
import "../styles/FocusPhoto.css";

const FocusPhoto = () => {
  const [focus, setFocus] = useState(true);

  const focusPhoto = (event) => {
    setFocus(!focus);
    if (event.target.classList.contains("photo")) {
      if (focus) {
        event.target.style = `
        position: fixed;
        top: 10%;
        z-index: 20;
        `;
        document.querySelector(".photo-text").style = `display: flex;`;
        document.querySelector(".overlay-bg").style = `
        background-image: url("../assets/images/Full View.png");
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        `;
        document.querySelectorAll(".photo").forEach((photo) => {
          if (photo !== event.target) {
            photo.style = `visibility: hidden;`;
          }
        });
      } else {
        event.target.style = `z-index: 1`;
        document.querySelector(".photo-text").style = `display: none;`;
        document.querySelector(".overlay-bg").style = ``;
        document.querySelectorAll(".photo").forEach((photo) => {
          if (photo !== event.target) {
            photo.style = `visibility: visible;`;
          }
        });
      }
      console.log("Clicked element:", event.target);
    }
  };

  return (
    <>
      <div className="photo-container">
        <img
          className="photo"
          src={Image2}
          alt="Year End Gallery 2023-2024 Photo"
          onClick={focusPhoto}
        />
        <img
          className="photo"
          src={Image1}
          alt="Year End Gallery 2023-2024 Photo"
          onClick={focusPhoto}
        />
      </div>
      <div className="overlay-bg"></div>
      <FocusPhotoText />
    </>
  );
};

export default FocusPhoto;
