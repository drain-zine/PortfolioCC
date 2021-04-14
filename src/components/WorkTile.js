import React, { useState } from "react";

import backIco from "./../res/dynamic/skullback.gif";
import BackgroundScrollTransistion from "./animations/BackgroundScrollTransistion";

const WorkTile = ({data}) => {

    const [expanded, setExpanded] = useState(false);
    const [init, setInit] = useState([Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1])
    const [backgroundScroll, setBackgroundScroll] = useState(0);

    var width = 15;
    var height = width * (Math.sqrt(2));
    
    const toggleWorkTile = () => {
        setExpanded(!expanded);
    };

    return(

            <div style={{width: width+"rem" , height: height+"rem", left: init[0]+"%", top: init[1]+"%"}} className="draggable tile absolute rounded-md shadow-md overflow-y-hidden" onDoubleClick={toggleWorkTile}>
                <div className={"preview w-full h-full absolute z-0"}>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl">{data.title}</p>
                    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md shadow-md z-0" src={data.img} />
                </div>

                <BackgroundScrollTransistion className={"link w-full h-full absolute text-white z-10"} trigger={expanded} >
                        <p>LINK</p>
                </BackgroundScrollTransistion>
            </div>
    );

}

export default WorkTile;