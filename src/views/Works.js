
import React from "react"
import useInteractDrag from "../hooks/useInteractDrag";

import WorkTile from "./../components/WorkTile";

const Works = () => {

    var data = [{title: "Swag", img: require("./../data/assets/bape1.jpg").default},
    {title: "Weed", img: require("./../data/assets/bape2.jpg").default},
    {title: "Yu-gi-oh", img: require("./../data/assets/bape3.jpg").default}, ];

    useInteractDrag(".draggable");

    return(
        <main className="relative primary-font-stack bg-color primary-font-color h-screen">
            <div className="backgroundTitle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1>WORKS</h1>
            </div>

            <div className="worksCanvas w-full">
            {data.map((work) => (

                <WorkTile data={work}/>

                ))}
            </div>
        </main>
    );
}

export default Works;