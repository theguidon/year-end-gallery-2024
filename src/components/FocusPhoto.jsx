import { useState } from "react";
import FocusPhotoText from "./FocusPhotoText";
import BlueRose from "../assets/images/062623-Blue Rose-Caoile-P-6.jpg";
import PrideMarch from "../assets/images/062423-QC Pride March-20.jpg";
import Sona from "../assets/images/072423-People_s Sona-Soriano-30.jpg";
import OrsemMuli from "../assets/images/080823-OrSem Muli Day 2-Vicente-38.jpg";
import ONight from "../assets/images/080823-OrSem Muli Day 2-Reyes-14.jpg";
import RecWeek from "../assets/images/090723-COA RW Org Parade-Fernando-11.jpg";
import CheerRally from "../assets/images/092723-Cheer Rally 2023-Vicente-38.jpg";
import MartialLaw from "../assets/images/092123-Martial Law Exhibits-10.jpg";
import TAArdor from "../assets/images/090923-TA Ardor-Soriano-25.jpg";
import ShippeyLecture from "../assets/images/092723-Shippey Lecture-Jose-9.jpg";
import Talab from "../assets/images/101923-Drag Queens React-Llamas-02.jpeg";
import OBFPalestine from "../assets/images/111023-OBF with Palestinians-Sy-1.jpg";
import OneBigPride from "../assets/images/101323-One Big Pride-Tan 3.jpg";
import Halloween from "../assets/images/102723 - Halloween in Ateneo-18.jpg";
import BSKElections from "../assets/images/103023 - BSKE Coverage-15.jpg";
import DogParade from "../assets/images/111423-LSOGC Dog Parade-Sy-26.jpg";
import TransportStrike from "../assets/images/112223-Transport Strike Day 3-15.jpg";
import ChristmasTree from "../assets/images/111723-MVP Christmas Tree-2.jpg";
import PalestineSolidarity from "../assets/images/112323-Multisectoral mobilization in solidarity with PalestineMultisectoral mobilization in solidarity with Palestine-Sy-37.jpg";
import NorthCarPark from "../assets/images/122723-North Car Park Project Mobilization-Llamas-23.jpeg";
import NorthCarkParkDiscussion from "../assets/images/011524-North Carpark Issue March and Multi-Sectoral Discussion-6.jpg";
import Orphie from "../assets/images/013124-Orphie and the Book of Heroes-Santos-7.jpg";
import Valentine from "../assets/images/021424-Valentine’s Day in Katipunan- Dimaculangan-2.jpg";
import Edsa from "../assets/images/022324-EDSA @ 38 Mini Concert-Elgincolin-34.jpg";
import LoveBox from "../assets/images/022324-Love BOx 2024 Aurora Amore-Tan- 30.jpg";
import UnderTheStars from "../assets/images/031524- Under the Stars - Abad-13.jpg";
import AteneoFluid from "../assets/images/032324-Ateneo Fluid 2024-Soriano-49.jpg";
import MarchOfWomen from "../assets/images/041424-March of Women Fun Run-Fernando-1.jpg";
import JSECChallenge from "../assets/images/041624-JSEC Challenge-Chang-8.jpg";
import FALagnatLaki from "../assets/images/042424-Lagnat Laki-Soriano-24.jpg";
import LaborDayProtest from "../assets/images/05012024 - Labor Day Protest - Jose-5.jpg";
import Bonfire from "../assets/images/051724-Ateneo Bonfire-Fernando-21.jpg";
import ExitButton from "../assets/images/ExitButton.svg";
import "../styles/FocusPhoto.css";

const FocusPhoto = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = (event) => {
    setModal(!modal);
    if (modal) {
      event.target.style = `position: relative;`;
      document.querySelectorAll(".photo").forEach((photo) => {
        if (photo !== event.target) {
          photo.style = `display: block;`;
        }
      });
      document.querySelectorAll(".photo-caption").forEach((element) => {
        element.style = `display: flex;`;
      });
    } else {
      if (event.target.classList.contains("photo")) {
        event.target.style = `position: absolute; top: 4.9%; left: 26.15%; cursor: zoom-out; width: 45rem;`;
        document.querySelectorAll(".photo").forEach((photo) => {
          if (photo !== event.target) {
            photo.style = `display: none;`;
          }
        });
        document.querySelectorAll(".photo-caption").forEach((element) => {
          if (element.querySelector("img") !== event.target) {
            element.style = `display: none;`;
          }
        });
      }
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <header>
        <p>Year-End Gallery</p>
        <p>2023-2024</p>
      </header>
      <div className="photo-container">
        <div id="june-2023" class="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={BlueRose}
              alt="Blue Rose"
              onClick={toggleModal}
            />
            <p>Blossoming Again</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={PrideMarch}
              alt="Pride March"
              onClick={toggleModal}
            />
            <p>Pride in Progress</p>
          </div>
        </div>
        <div id="july-2023" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={Sona}
              alt="People's SONA"
              onClick={toggleModal}
            />
            <p>Voices of the People</p>
          </div>
        </div>
        <div id="august-2023" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={OrsemMuli}
              alt="OrSem Muli"
              onClick={toggleModal}
            />
            <p>Welcome Home, Batch 2023</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={ONight}
              alt="O-Night"
              onClick={toggleModal}
            />
            <p>Dance the Night Away</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={RecWeek}
              alt="COA RecWeek"
              onClick={toggleModal}
            />
            <p>Exploring Passions, Forging Bonds</p>
          </div>
        </div>
        <div id="september-2023" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={CheerRally}
              alt="Cheer Rally 2023"
              onClick={toggleModal}
            />
            <p>Blue Eagles Take Flight</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={MartialLaw}
              alt="Martial Law Commemoration"
              onClick={toggleModal}
            />
            <p>Ateneo Remembers</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={TAArdor}
              alt="TA Ardor"
              onClick={toggleModal}
            />
            <p>Love and Fury</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={ShippeyLecture}
              alt="Shippey Lecture"
              onClick={toggleModal}
            />
            <p>Neidorf on Beowulf</p>
          </div>
        </div>
        <div id="october-2023" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={Talab}
              alt="TALAB"
              onClick={toggleModal}
            />
            <p>From Dialogue to Deeds</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={OBFPalestine}
              alt="One Big Fight with Palestine"
              onClick={toggleModal}
            />
            <p>Fighting for Freedom</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={OneBigPride}
              alt="One Big Pride"
              onClick={toggleModal}
            />
            <p>Empowered and United</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={Halloween}
              alt="Halloween in Ateneo"
              onClick={toggleModal}
            />
            <p>Costumes and Thrills</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={BSKElections}
              alt="BSK Elections"
              onClick={toggleModal}
            />
            <p>Reviving Barangay Politics</p>
          </div>
        </div>
        <div id="november-2023" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={DogParade}
              alt="LSOGC Dog Parade"
              onClick={toggleModal}
            />
            <p>Ateneans' Best Friends</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={TransportStrike}
              alt="PISTON Transport Strike"
              onClick={toggleModal}
            />
            <p>Pagpatuloy ng Laban</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={ChristmasTree}
              alt="MVP Christmas Tree"
              onClick={toggleModal}
            />
            <p>Leading the Light</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={PalestineSolidarity}
              alt="Multisectoral mobilization in solidarity with Palestine"
              onClick={toggleModal}
            />
            <p>Stand with Palestine</p>
          </div>
        </div>
        <div id="december-2023" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={NorthCarPark}
              alt="North Car Park Project Mobilization"
              onClick={toggleModal}
            />
            <p>Standing Behind Trees</p>
          </div>
        </div>
        <div id="january-2024" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={NorthCarkParkDiscussion}
              alt="North Carpark Issue March and Multi-Sectoral Discussion"
              onClick={toggleModal}
            />
            <p>Tying Ends</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={Orphie}
              alt="Orphie and the Book of Heroes"
              onClick={toggleModal}
            />
            <p>A Hero's Tale</p>
          </div>
        </div>
        <div id="february-2024" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={Valentine}
              alt="Valentine's Day in Katipunan"
              onClick={toggleModal}
            />
            <p>Valentine's Day in Katipunan</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={Edsa}
              alt="EDSA @ 38 Mini Concert"
              onClick={toggleModal}
            />
            <p>38 Years After</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={LoveBox}
              alt="Love BOx 2024"
              onClick={toggleModal}
            />
            <p>Love in Water</p>
          </div>
        </div>
        <div id="march-2024" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={UnderTheStars}
              alt="Under the Stars"
              onClick={toggleModal}
            />
            <p>Dancing Under the Stars</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={AteneoFluid}
              alt="Ateneo Fluid"
              onClick={toggleModal}
            />
            <p>The Life of an Artist</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={MarchOfWomen}
              alt="March of Women"
              onClick={toggleModal}
            />
            <p>Women at the Center</p>
          </div>
        </div>
        <div id="april-2024" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={JSECChallenge}
              alt="JSEC Challenge"
              onClick={toggleModal}
            />
            <p>Melting Pot of Flavors</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={FALagnatLaki}
              alt="FA Lagnat Laki"
              onClick={toggleModal}
            />
            <p>Young Troubles</p>
          </div>
        </div>
        <div id="may-2024" className="photo-date">
          <div className="photo-caption">
            <img
              className="photo"
              src={LaborDayProtest}
              alt="Labor Day Protest"
              onClick={toggleModal}
            />
            <p>Sahod Itaas, Presyo Ibaba</p>
          </div>
          <div className="photo-caption">
            <img
              className="photo"
              src={Bonfire}
              alt="Ateneo Bonfire"
              onClick={toggleModal}
            />
            <p>Win or Lose</p>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <FocusPhotoText />
          </div>
          <img
            className="close-modal"
            src={ExitButton}
            alt="Exit Button"
            onClick={toggleModal}
          />
        </div>
      )}
    </>
  );
};

export default FocusPhoto;
