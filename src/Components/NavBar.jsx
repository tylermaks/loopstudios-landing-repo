import React from "react";
import Menu from "./Menu";
import logo from "../Assets/Images/logo.svg"
import hamburger from  "../Assets/Images/icon-hamburger.svg"

import "../Assets/Styles/NavBar.scss"

function NavBar({toggleMobileMenu}){
    return(
        <nav className="wrapper main-nav flex-row-space">
            <img  src={logo} alt="Loop Studios Logo"/>
            <img onClick={toggleMobileMenu} className="mobile" src={hamburger} alt="Mobile Menu" />
            <article className="link-container desktop">
                <Menu 
                    direction="menu--row"
                />
            </article>
        </nav>
    )
}

export default NavBar