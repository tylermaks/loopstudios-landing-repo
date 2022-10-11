import React from "react";
import logo from "../Assets/Images/logo.svg"
import hamburger from  "../Assets/Images/icon-hamburger.svg"

import "../Assets/Styles/NavBar.scss"

function NavBar(){
    const linksList = ["About", "Careers", "Events", "Products", "Support"]

    return(
        <nav className="main-nav wrapper">
            <img  src={logo} alt="Loop Studios Logo"/>
            <img className="mobile" src={hamburger} alt="Mobile Menu" />
            <article className="link-container desktop">
                {
                    linksList.map(link => {
                        return(
                            <a className="nav-link desktop" href=".App">{link}</a>
                        )
                    })
                }
            </article>
        </nav>
    )
}

export default NavBar