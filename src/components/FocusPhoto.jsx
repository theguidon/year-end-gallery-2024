import { useState, useEffect } from "react";
import "../styles/FocusPhoto.css";

import Credits from "./Credits.jsx";
import Modal from "./Modal.jsx";
import photoData from "../utility/data.js";

const FocusPhoto = () => {
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "unset";
  }, [isModal]);

  const [modalEvent, setModalEvent] = useState("");

  return (
    <>
      <header>
        <p>Year-End Gallery</p>
        <p>2023-2024</p>
      </header>
      <div className="photo-container">
        {photoData.map((event, i) => {
          return (
            <button
              key={event.title}
              className="photo-preview"
              style={{ translate: `0 ${200 * i}%` }}
              onClick={() => {
                setModalEvent(event);
                setIsModal(true);
              }}
            >
              <img src={event.photos[0].url} loading="lazy" />
              <h2>{event.event}</h2>
            </button>
          );
        })}
      </div>
      <Credits />
      {isModal ? <Modal event={modalEvent} setIsModal={setIsModal} /> : <></>}
    </>
  );
};

export default FocusPhoto;
