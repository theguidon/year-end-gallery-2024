import LandingImage from "../assets/images/LandingImage.png";
import LandingMenu from "../assets/images/LandingMenu.svg";
import LandingBatteryIcon from "../assets/images/LandingBatteryIcon.svg";
import LandingBottomLeftText1 from "../assets/images/F 3.5.svg";
import LandingBottomLeftText2 from "../assets/images/ISO 100.svg";
import Logo from "../assets/images/Logo.png";
import StartButtonDefault from "../assets/images/StartButtonDefault.svg";
import StartButtonHover from "../assets/images/StartButtonHover.svg";
import "../styles/Landing.css";

import { useState } from "react";

const Landing = ({ setIsLandingVisible }) => {
  const [startSrc, setStartSrc] = useState(StartButtonDefault);

  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-bg">
          <img className="landing-img" src={LandingImage} alt="Landing Photo" />
          <div className="landing-frame"></div>
          <img className="landing-menu" src={LandingMenu} alt="Menu" />
          <img className="landing-battery" src={LandingBatteryIcon} alt="" />
          <div className="landing-text">
            <img src={LandingBottomLeftText1} alt="F 3.5" />
            <img src={LandingBottomLeftText2} alt="ISO 100" />
          </div>
          <div className="landing-inner-frame"></div>
        </div>
        <div className="landing-hero">
          <img src={Logo} alt="The GUIDON" />
          <p>Year-End Gallery</p>
          <p>2023-2024</p>
          <img
            src={startSrc}
            alt="Start"
            onClick={() => setIsLandingVisible(false)}
            onMouseEnter={() => setStartSrc(StartButtonHover)}
            onMouseLeave={() => setStartSrc(StartButtonDefault)}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
