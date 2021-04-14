
import React, { useState, useEffect} from "react"
import useInteractDrag from "../hooks/useInteractDrag";
import Marquee from "react-double-marquee";


import WorkTile from "./../components/WorkTile";

const Works = () => {

    var data = [{title: "Swag", img: require("./../data/assets/bape1.jpg").default},
    {title: "Weed", img: require("./../data/assets/bape2.jpg").default},
    {title: "Yu-gi-oh", img: require("./../data/assets/bape3.jpg").default}, ];

    const [toggleBackground, setToggleBackgroud] = useState(false);

    useInteractDrag(".draggable");

    return(
        <main className="relative primary-font-stack bg-color primary-font-color h-screen select-none">
            <div className="absolute left-0 top-0 w-full">
                <Marquee direction={"right"}>
                    <p>I wonder if I can click these...</p>
                </Marquee>
            </div>
            <div className="backgroundTitle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="select-none">WORKS</h1>
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