import React from "react"
import Hero from "./Hero";
import About from "./About";
import Creations from "./Creations";

import "./Assets/Styles/App.scss"

function App() {
  return (
    <main className="App">
      <Hero />
      <About />
      <Creations />
    </main>
  );
}

export default App;
