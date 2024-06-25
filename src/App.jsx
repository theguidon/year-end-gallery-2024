import Landing from "./components/Landing.jsx";
import FocusPhoto from "./components/FocusPhoto.jsx";

import { useState, useEffect } from "react";

function App() {
  const [isLandingVisible, setIsLandingVisible] = useState(true);
  useEffect(() => {
    document.body.style.overflow = isLandingVisible ? "hidden" : "unset";
  }, [isLandingVisible]);

  return (
    <>
      {isLandingVisible ? (
        <Landing setIsLandingVisible={setIsLandingVisible} />
      ) : (
        <></>
      )}
      <FocusPhoto setIsLandingVisible={setIsLandingVisible} />
    </>
  );
}

export default App;
