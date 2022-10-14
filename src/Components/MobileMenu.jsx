import React from "react";
import Menu from "./Menu";
import logo from "../Assets/Images/logo.svg"
import close from "../Assets/Images/icon-close.svg"

import "../Assets/Styles/MobileMenu.scss"

function MobileMenu({toggleMobileMenu, mobileMenu}){

    const toggleClass = mobileMenu ? "open" : ""

    return(
        <section id="mobile-menu" className={toggleClass} >
            <div className="flex-row-space">
                <img src={logo} alt="Loopstudios Company Logo" />
                <img onClick={toggleMobileMenu} src={close} alt="Close mobile menu" />
            </div>
            <Menu 
                direction="menu--column"
            />
        </section>
    )
}

export default MobileMenu;