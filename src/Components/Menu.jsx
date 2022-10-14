import React from "react"

function Menu({direction}){
    return(
        <div className={"menu " + direction} >
            <a href="#about">About</a>
            <a href=".App">Careers</a>
            <a href=".App">Events</a>
            <a href=".App">Products</a>
            <a href=".App">Support</a>
        </div>
    )
}

export default Menu;