import { useState, useEffect } from "react";
import arrow from "../assets/images/ArrowBack.svg";
import decoPlusSquare from "../assets/images/deco-plus-square.svg";
import "../styles/Modal.css";

const Modal = ({ event, setIsModal }) => {
  const [photoNo, setPhotoNo] = useState(0);
  useEffect(() => {
    console.log(photoNo);
  }, [photoNo]);

  function mod(n, m) {
    return ((m % n) + n) % n;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <img className="modal-photo" src={event.photos[photoNo].url} />
        <div className="modal-photo-nav">
          <img
            src={arrow}
            onClick={() => setPhotoNo(mod(event.photos.length, photoNo - 1))}
          />
          {event.photos.map((event, i) => {
            return (
              <div
                key={i}
                className="photo-index"
                style={
                  i === photoNo
                    ? {
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.22) 100%)",
                      }
                    : {}
                }
              ></div>
            );
          })}
          <img
            src={arrow}
            onClick={() => setPhotoNo(mod(event.photos.length, photoNo + 1))}
          />
        </div>
        <div className="modal-text">
          <div className="meta">
            <h2>{event.title}</h2>
            <p className="credit">SHOT BY {event.photos[photoNo].credit}</p>
            <p>{event.photos[photoNo].date}</p>
            <p>{event.photos[photoNo].location}</p>
          </div>
          <p
            className="modal-description"
            dangerouslySetInnerHTML={{ __html: event.description }}
          ></p>
        </div>
        <button
          className="close-button"
          onClick={() => setIsModal(false)}
        ></button>
        <div className="deco">
          <img src={decoPlusSquare} className="deco-plus-square" />
          <img src={decoPlusSquare} className="deco-plus-square" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
