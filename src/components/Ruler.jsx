import "../styles/Ruler.css";

import Inch from "../assets/images/RulerInch.svg";

import { useState, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

import photoData from "../utility/data.js";

const Ruler = ({ galleryHeight }) => {
  const tl = useRef();
  const [focusedMonth, setFocusedMonth] = useState(0);

  // scroll animation
  useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current.to(".date-pointer", {
      scrollTrigger: {
				trigger: ".photo-container",
				start: "top top",
				endTrigger: ".credits",
				end: "top bottom",
        scrub: 1,
        onUpdate: (self) => {
          let month = Math.floor(self.progress * 12);
          if (month === 12) month = 11;
          setFocusedMonth(month);
        },
      },
      ease: "none",
      y: 580,
    });
  });

  return (
    <div className="ruler">
      {[...Array(12)].map((e, i) => {
        return (
          <div
            key={i}
            className="month"
            style={{ color: focusedMonth === i ? "#E4BB4E" : "#B1ACAC" }}
          >
            <img src={Inch} />
          </div>
        );
      })}
      <svg
        className="date-pointer"
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 10L0.5 19.5263L0.5 0.473721L17 10Z" fill="#E4BB4E" />
      </svg>
    </div>
  );
};

export default Ruler;
