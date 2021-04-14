import React, { useState } from "react";

import backIco from "./../res/dynamic/skullback.gif";

const WorkTile = ({data}) => {

    const [expanded, setExpanded] = useState(false);

    var width = 15;
    var height = width * (Math.sqrt(2));

    var init = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1 ];

    
    const toggleWorkTile = () => {
        console.log("Toggling");
        setExpanded(!expanded);
    }

    
   
    return(

            <div style={{width: width+"rem" , height: height+"rem", left: init[0]+"%", top: init[1]+"%"}} className="draggable tile absolute rounded-md shadow-md" onDoubleClick={toggleWorkTile}>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl">{data.title}</p>
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md shadow-md z-0" src={data.img} />
            
            
                <div id={data.title+"-expanded"} style={{width: 2*width+"rem"}} className={"workTileExpanded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-md z-20 " + (expanded ? "active" : "hidden")}>
                    <div className="mb-8 text-center mt-2">
                        <h1 className="text-lg">{data.title.toUpperCase()}</h1>
                        <h3 className="text-sm">2021</h3>
                    </div>

                    <div className="w-2/3 text-center mx-auto mb-8 ">
                        <img className="mx-auto" src={data.img} />
                    </div>

                    <div className="mb-2 px-4 text-center">
                        <p>LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  
                  
                   <div className="expandedWorkTileContent central-grid">
                        <div class="cell">
                        </div>
                        
                        <div class="cell">
                        </div>

                        <div class="cell">
                        </div>

                    </div>
                </div>
            </div>
    );

}

export default WorkTile;