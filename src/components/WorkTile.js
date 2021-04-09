import { data } from "autoprefixer";
import React from "react";

const WorkTile = ({data}) => {

    var width = 15;
    var height = width * (Math.sqrt(2));

    var init = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1 ];

    return(
        <div style={{width: width+"rem" , height: height+"rem", left: init[0]+"%", top: init[1]+"%"}} className="draggable tile absolute rounded-md shadow-md">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl">{data.title}</p>
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md shadow-md z-0" src={data.img} />
        </div>
    );

}

export default WorkTile;