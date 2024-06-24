import { useState } from "react";
import "../styles/FocusPhoto.css";

import Credits from "./Credits.jsx";
import photoData from "../utility/data.js";

const FocusPhoto = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header>
        <p>Year-End Gallery</p>
        <p>2023-2024</p>
      </header>
      <div className="photo-container">
        {photoData.map((event, i) => {
          return (
            <div
              key={event.title}
              className="photo-preview"
              style={{ top: `${2.5 * i}%` }}
            >
              <img src={event.photos[0].url} />
              <h2>{event.event}</h2>
            </div>
          );
        })}
      </div>
      <Credits />
    </>
  );
};

export default FocusPhoto;
