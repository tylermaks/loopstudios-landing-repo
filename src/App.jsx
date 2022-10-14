import React, {useState} from "react"
import MobileMenu from "./Components/MobileMenu";
import Hero from "./Hero";
import About from "./About";
import Creations from "./Creations";

import "./Assets/Styles/App.scss"

function App() {

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <main className="App">
      <MobileMenu 
        toggleMobileMenu={toggleMobileMenu}
        mobileMenu={mobileMenu}
      />
      <Hero 
         toggleMobileMenu={toggleMobileMenu}
      />
      <About />
      <Creations />
    </main>
  );
}

export default App;
