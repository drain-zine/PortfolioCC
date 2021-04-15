import React from "react";

const Gallery = (props) => {

    const {imgs} = props;
    
    return(
        <div className="imgContainer justify-center flex flex-row mt-8">
            {imgs.map((img) => (
                <img className="w-1/4 mx-4" src={require("../../res/" + img).default} />
            ))}
        </div>
    );
};

export default Gallery;