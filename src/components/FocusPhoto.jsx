import { useState } from "react";
import "../styles/FocusPhoto.css";

import Credits from "./Credits.jsx";

const FocusPhoto = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header>
        <p>Year-End Gallery</p>
        <p>2023-2024</p>
      </header>
      <div className="photo-container"></div>
    </>
  );
};

export default FocusPhoto;
