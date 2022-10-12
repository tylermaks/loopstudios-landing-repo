import React from "react";
import imageData from "../imageData";

function PhotoGrid(){
    return(
        <div className="grid">
            {
                imageData.map(data => {
                    return(
                        <div className="grid-area">
                            <h3>{data.name}</h3>
                            <img className="mobile" src={data.mobile} alt={data.name} />
                            <img className="desktop" src={data.desktop} alt={data.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PhotoGrid;