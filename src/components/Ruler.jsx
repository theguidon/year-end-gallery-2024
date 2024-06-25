import "../styles/Ruler.css";

import Inch from "../assets/images/RulerInch.svg";

import { useState, useEffect } from "react";

const Ruler = ({ galleryHeight }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => setScrollPosition(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log(scrollPosition);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <div className="ruler">
      {[...Array(12)].map((e, i) => {
        return (
          <div key={i} className="month">
            <img src={Inch} />
          </div>
        );
      })}
      <svg
        className="date-pointer"
		style={{translate: `-650% ${-50 + (scrollPosition / galleryHeight * 4700)}%`}}
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="12" fill="black" />
        <path d="M10 6L5.91278e-05 12L5.91278e-05 0L10 6Z" fill="#9b9898" />
      </svg>
    </div>
  );
};

export default Ruler;
