import React, { useState } from "react";
import Image1 from "../assets/images/Rectangle 72.png";
import Image2 from "../assets/images/Rectangle 7.png";
import "../styles/FocusPhoto.css";

const FocusPhoto = () => {
  const translateImage = (event) => {
    if (event.target.classList.contains("focus-photo")) {
      event.target.classList.toggle("centered");
      console.log("Clicked element:", event.target);
    }
  };

  return (
    <div className="photo-container">
      <img
        className="focus-photo"
        src={Image1}
        alt="Year End Gallery 2023-2024 Photo"
        onClick={translateImage}
      />
      <img
        className="focus-photo"
        src={Image2}
        alt="Year End Gallery 2023-2024 Photo"
        onClick={translateImage}
      />
    </div>
  );
};

export default FocusPhoto;
