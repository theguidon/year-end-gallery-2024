import React, { useState } from "react";
import FocusPhotoText from "./FocusPhotoText";
import Image1 from "../assets/images/Rectangle 72.png";
import Image2 from "../assets/images/Rectangle 7.png";
import "../styles/FocusPhoto.css";

const FocusPhoto = () => {
  return (
    <div className="photo-container">
      <img
        className="photo"
        src={Image2}
        alt="Year End Gallery 2023-2024 Photo"
      />
      <FocusPhotoText />
    </div>
  );
};

export default FocusPhoto;
