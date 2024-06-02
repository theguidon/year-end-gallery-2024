import React from 'react'
import LandingImage from "../assets/images/LandingImage.png"
import LandingMenu from "../assets/images/LandingMenu.svg"
import LandingBatteryIcon from "../assets/images/LandingBatteryIcon.svg"
import LandingBottomLeftText1 from "../assets/images/F 3.5.svg"
import LandingBottomLeftText2 from "../assets/images/ISO 100.svg"
import "../styles/Landing.css"

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-bg-container">
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
      </div>
      <div className=""></div>
    </div>
  )
}

export default Landing
