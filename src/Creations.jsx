import React from "react"
import PhotoGrid from "./Components/PhotoGrid";

import "./Assets/Styles/Creations.scss"

function Creations(){
    return(
        <section id="creations" className="wrapper">
            <h2>Our Creations</h2>
            <PhotoGrid />
            <span>See All</span>
        </section>
    )
}

export default Creations;