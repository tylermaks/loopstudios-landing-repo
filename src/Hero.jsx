import React from "react";
import NavBar from "./Components/NavBar";

import "./Assets/Styles/Hero.scss"

function Hero({toggleMobileMenu}){
    return(
        <section id="hero">
            <NavBar 
                toggleMobileMenu={toggleMobileMenu}
            />
            <article className="wrapper">
                <h1>
                    Immersive Experiences That Deliver
                </h1>
            </article>
        </section>
    )
}

export default Hero;