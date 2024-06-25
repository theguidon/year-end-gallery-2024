import "../styles/Menu.css";
import photoData from "../utility/data.js";

const Menu = ({ isMenuVisible, setIsMenuVisible, setIsLandingVisible }) => {
  return (
    <div className="menuWrapper" style={{backdropFilter: isMenuVisible ? "brightness(50%)" : "brightness(100%)"}}>
      <div
        className="menu"
        style={{ translate: isMenuVisible ? "0 0" : "-100% 0" }}
      >
        <div className="menu-header">
          <h3>EVENTS</h3>
          <svg
		onClick={() => setIsMenuVisible(false)}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_594_315"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="25"
            >
              <rect y="0.015625" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_594_315)">
              <path
                d="M15.8989 22.0156L5.89893 12.0156L15.8989 2.01562L17.6739 3.79062L9.44893 12.0156L17.6739 20.2406L15.8989 22.0156Z"
                fill="#E4BB4E"
              />
            </g>
          </svg>
        </div>
        <div className="events-list">
          {photoData.map((event, i) => {
            return (
              <a key={i} href={`#${event.event}`} onClick={() => setIsLandingVisible(false)}>
                {event.event}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
