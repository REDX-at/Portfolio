import { useEffect, useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import AboutMe from "./component/AboutMe";

function App() {
  const [fade, setFade] = useState("");
  useEffect(() => {
    console.log("render");
  }, [fade]);
  return (
    <div className="relative h-screen">
      <Header setFade={setFade} />
      <div id="home" className="h-screen">
        <Home />
      </div>
      <div id="about-me" className="h-screen">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
