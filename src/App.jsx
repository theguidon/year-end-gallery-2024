import Landing from "./components/Landing.jsx";
import FocusPhoto from "./components/FocusPhoto.jsx";

import { useState } from "react";

function App() {
  const [isLandingVisible, setIsLandingVisible] = useState(true);
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
