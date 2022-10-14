import React from "react";
import Menu from "./Components/Menu";
import logo from "./Assets/Images/logo.svg"
import facebook from "./Assets/Images/icon-facebook.svg"
import twitter from "./Assets/Images/icon-twitter.svg"
import instagram from "./Assets/Images/icon-instagram.svg"
import pinterest from "./Assets/Images/icon-pinterest.svg"

import "./Assets/Styles/Footer.scss"

function Footer(){
    return(
        <footer>
            <div className="footer-content flex-column wrapper">
                <article className="flex-column flex-column--center">
                    <img className="logo" src={logo} alt="Loopstudios Company Logo" />
                    <Menu 
                        direction="menu--column"
                    />
                </article>
                <div className="social flex-row-space">
                    <img src={facebook} className="social-link" alt="Facebook Link" />
                    <img src={twitter} className="social-link" alt="Twitter Link" />
                    <img src={instagram} className="social-link" alt="Instagram Link" />
                    <img src={pinterest} className="social-link" alt="Pinterest Link" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;