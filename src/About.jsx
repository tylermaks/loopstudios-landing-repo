import React from "react"

import aboutImgMobile from "./Assets/Images/Mobile/image-interactive.jpg"
import aboutImgDesktop from "./Assets/Images/Desktop/image-interactive.jpg"

import "./Assets/Styles/About.scss"

function About(){
    return(
        <section id="about" className="wrapper">
            <img className="about-img--mobile mobile" src={aboutImgMobile} alt="Man Wearing VR Headset" />
            <img className="about-img--desktop desktop" src={aboutImgDesktop} alt="Man Wearing VR Headset" />
            <article>
                <h2>The Leader in Interactive VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.
                    Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </article>
        </section>
    )
}

export default About;