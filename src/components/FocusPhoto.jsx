import { useState } from "react";
import FocusPhotoText from "./FocusPhotoText";
import Image2 from "../assets/images/Rectangle 7.png";
import "../styles/FocusPhoto.css";

const FocusPhoto = () => {
  const [focus, setFocus] = useState(true);

  const focusPhoto = (event) => {
    setFocus(!focus);
    if (event.target.classList.contains("photo")) {
      if (focus) {
        document.querySelector(".photo-text").style = `display: flex;`;
      } else {
        document.querySelector(".photo-text").style = `display: none;`;
      }
      console.log("Clicked element:", event.target);
    }
  };

  return (
    <div className="photo-container">
      <div className="photo-article">
        <img
          className="photo"
          src={Image2}
          alt="Year End Gallery 2023-2024 Photo"
          onClick={focusPhoto}
        />
        <FocusPhotoText />
      </div>
    </div>
  );
};

export default FocusPhoto;
