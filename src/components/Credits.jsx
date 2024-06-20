import "../styles/Credits.css";
import Logo from "../assets/images/Logo.png";

const Credits = () => {
  return (
    <div className="credits">
      <div className="credits-left">
        <img src={Logo} />
        <p>Year-End Gallery</p>
        <p>2023-2024</p>
      </div>
      <div className="credits-right-wrapper">
        <div className="credits-right">
          <div>
            <h3>PHOTOS BY</h3>
            <p>
              Miguel&nbsp;Abad, Stella&nbsp;renas, Veida&nbsp;Bongco,
              Jhanine&nbsp;Caoile, Finomena&nbsp;Chang, River&nbsp;Elgincolin,
              Liana&nbsp;Fernando, Celina&nbsp;Iñgel, Jio&nbsp;Japson,
              Monica&nbsp;Isabel&nbsp;Jose, Ccai&nbsp;Llamas, Mikyla&nbsp;Reyes,
              Patrick&nbsp;Reyes-Santos, Jillian&nbsp;C.&nbsp;Santos,
              Naomi&nbsp;Soriano, Daryl&nbsp;D.&nbsp;Sy,
              Chelsea&nbsp;May&nbsp;Tan, France&nbsp;Vicente,&nbsp;and
              Jacob&nbsp;D.&nbsp;Yap,
            </p>
          </div>
          <div>
            <h3>DESIGNED BY</h3>
            <p>Bea&nbsp;Gan and Razel&nbsp;Tan</p>
          </div>
          <div>
            <h3>DEVELOPED BY</h3>
            <p>Arthur&nbsp;Lluisma and Waleed&nbsp;Lugod</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
