import React from 'react'
import LandingImage from "../assets/images/LandingImage.png"
import LandingMenu from "../assets/images/LandingMenu.svg"
import LandingBatteryIcon from "../assets/images/LandingBatteryIcon.svg"
import LandingBottomLeftText1 from "../assets/images/F 3.5.svg"
import LandingBottomLeftText2 from "../assets/images/ISO 100.svg"
import "../styles/Landing.css"

const Landing = () => {
  return (
    <div class="landing">
      <div class="landing-bg-container">
        <div class="landing-bg">
          <img class="landing-img" src={LandingImage} alt="Landing Photo" />
          <div class="landing-frame"></div>
          <img class="landing-menu" src={LandingMenu} alt="Menu" />
          <img class="landing-battery" src={LandingBatteryIcon} alt="" />
          <div class="landing-text">
            <img src={LandingBottomLeftText1} alt="F 3.5" />
            <img src={LandingBottomLeftText2} alt="ISO 100" />
          </div>
          <div class="landing-inner-frame"></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
