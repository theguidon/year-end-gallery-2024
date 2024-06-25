import { useState, useEffect, useRef } from "react";
import "../styles/FocusPhoto.css";

import Credits from "./Credits.jsx";
import Modal from "./Modal.jsx";
import photoData from "../utility/data.js";

import LandingMenu from "../assets/images/LandingMenu.svg";
import Menu from "./Menu.jsx";

import Ruler from "./Ruler.jsx";

import Marquee from "react-fast-marquee";

const FocusPhoto = ({ setIsLandingVisible }) => {
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "unset";
  }, [isModal]);

  const [modalEvent, setModalEvent] = useState("");

  const [isMenuVisible, setIsMenuVisible] = useState(false);

	const galleryRef = useRef(null)
	const [galleryHeight, setGalleryHeight] = useState(0)
	useEffect(() => {
		setGalleryHeight(galleryRef.current.clientHeight)
	}, [])

  return (
    <>
      <header>
        <p>Year-End Gallery</p>
        <p>2023-2024</p>
      </header>
      <div className="photo-container" ref={galleryRef}>
        <img
          className="landing-menu"
          src={LandingMenu}
          alt="Menu"
          onClick={() => setIsMenuVisible(true)}
        />
        <Menu
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
        <Ruler galleryHeight={galleryHeight} />
        {photoData.map((event, i) => {
          return (
            <button
              id={event.event}
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
      <div className="revoir">
        <Marquee className="marquee">
          {photoData.map((event, i) => {
            return (
              <img
                key={i}
                src={event.photos[0].url}
                className="marquee-photo"
                loading="lazy"
              />
            );
          })}
        </Marquee>
        <a
          className="return-to-top"
          href="#"
        >
          Return to Top
        </a>
      </div>
      <Credits />
      {isModal ? <Modal event={modalEvent} setIsModal={setIsModal} /> : <></>}
    </>
  );
};

export default FocusPhoto;
