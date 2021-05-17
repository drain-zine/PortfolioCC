import React from "react"


const GalleryImg = (props) => {
    return(
            <img className="py-20" src={require("./../../data/Ephemera/" + props.src).default} />
    );

};

export default GalleryImg;