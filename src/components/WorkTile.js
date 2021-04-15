import React, { useState, useEffect } from "react";

import backIco from "./../res/dynamic/skullback.gif";
import BackgroundScrollTransistion from "./animations/BackgroundScrollTransistion";
import SVGHorizLine from "./SVGHorizLine";

const WorkTile = ({data, incrementTogglesCounter, decrementTogglesCounter}) => {

    const [expanded, setExpanded] = useState(false);
    const [init, setInit] = useState([Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1])
    const [backgroundScroll, setBackgroundScroll] = useState(0);

    var width = 15;
    var height = width * (Math.sqrt(2));
    
    const toggleWorkTile = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        expanded ? incrementTogglesCounter() : decrementTogglesCounter();
    }, [expanded]);

    return(

            <div style={{width: width+"rem" , height: height+"rem", left: init[0]+"%", top: init[1]+"%"}} className="draggable tile absolute rounded-md shadow-md overflow-y-hidden" onDoubleClick={toggleWorkTile}>
                <div className={"preview w-full h-full absolute z-0"}>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl select-none">{data.title}</p>
                    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md shadow-md z-0" src={data.img} />
                </div>

                <BackgroundScrollTransistion className={"link w-full h-full absolute flex flex-col justify-center items-center text-white z-10"} trigger={expanded} >
                    
                <div className="w-full relative text-right flex-inital flex" style={{height: "24px"}}>
                        {/* <div className="flex-1 relative" style={{height: "24px"}}>
                            <svg width="100%" height="100%" viewBox="0 0 100% 100%">
                                <line class="point" x1="0" x2="100%" y1="50%" y2="50%" />
                            </svg>
                        </div>
                        <p className="flex-inital mx-2 text-red-900">LINK</p> */}

                            <div className="flex-1 mx-2">
                                <SVGHorizLine /> 
                            </div>

                            <p className="flex-initial mx-1 text-center text-red-900">2021</p> 
                            <div className="mx-2" style={{flex: "1 1 60%"}}>
                                <SVGHorizLine /> 
                            </div>
                    </div>
                    
                    <div className="flex-1 flex flex-row justify-center items-center">
                        <div className="flex-grow text-center">
                         
                                <h1 className="text-6xl text-red-900">{data.title.toUpperCase()}</h1>
                                <p className="text-sm mt-4">LOREM IPSUM LA LASFG ASWAG MONEY WEED XANS</p>
                            
                        </div>

                        <div className="flex-1 text-sm">
                            
                        </div>
                    </div>

                    <div className="w-full relative text-right flex-inital flex" style={{height: "24px"}}>
                        {/* <div className="flex-1 relative" style={{height: "24px"}}>
                            <svg width="100%" height="100%" viewBox="0 0 100% 100%">
                                <line class="point" x1="0" x2="100%" y1="50%" y2="50%" />
                            </svg>
                        </div>
                        <p className="flex-inital mx-2 text-red-900">LINK</p> */}

{/* for variation 4, set long svg line to flex: 1 1 60% and margin on text to mx-1 */}
                            <div className="mx-2" style={{flex: "1 1 60%"}}>
                                <SVGHorizLine /> 
                            </div>

                            <p className="flex-initial mx-1 text-center text-red-800 hover:text-red-900 cursor-pointer">LINK</p> 
                            <div className="flex-1 mx-2">
                                <SVGHorizLine /> 
                            </div>
                    </div>
                    

                </BackgroundScrollTransistion>
            </div>
    );

}

export default WorkTile;