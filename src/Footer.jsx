import React from "react";

import logo from "./Assets/Images/logo.svg"
import facebook from "./Assets/Images/icon-facebook.svg"
import twitter from "./Assets/Images/icon-twitter.svg"
import instagram from "./Assets/Images/icon-instagram.svg"
import pinterest from "./Assets/Images/icon-pinterest.svg"

import "./Assets/Styles/Footer.scss"

function Footer(){
    return(
        <footer>
            <div className="footer-content wrapper">
                <article>
                    <img className="logo" src={logo} alt="Loopstudios Company Logo" />
                    <div className="menu">
                        <a href="#about">About</a>
                        <a href=".App">Careers</a>
                        <a href=".App">Events</a>
                        <a href=".App">Products</a>
                        <a href=".App">Support</a>
                    </div>
                </article>
                <div className="social">
                    <img src={facebook} alt="Facebook Link" />
                    <img src={twitter} alt="Twitter Link" />
                    <img src={instagram} alt="Instagram Link" />
                    <img src={pinterest} alt="Pinterest Link" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;