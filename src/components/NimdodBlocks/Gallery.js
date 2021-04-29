import React from "react";

const Gallery = (props) => {

    // process children into imgs
    const imgs = props.children[0].replace(/[\n\s\"]+/g,"").split(",");
   
    const size = (imgs.length === 1 ? 100 : 100/(imgs.length+1));
    
    return(
        <div className="imgContainer justify-center flex flex-row block">
            {imgs.map((img) => (
                <img style={{width: size+"%"}} className="mx-4" src={require("../../res/" + img).default} />
            ))}
        </div>
    );
};

export default Gallery;