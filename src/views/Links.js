import React, { useState, useEffect } from "react";
import useInteractDrag from "../hooks/useInteractDrag";
import LinksTitle from "../components/LinksTitle";
import LinksLink from "../components/LinksLink";
import NavButton from "../components/NavButton";
import CursorDot from "../components/CursorDot";

const Links = ({links}) => {
    useInteractDrag('.draggable');
    const [screenHeight, setScreenHeight] = useState(0);
    const test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    useEffect(() => {
        setScreenHeight(window.innerHeight);
    }, []);

    return(
        <main className="noScrollY lander absolute w-screen h-screen flex-row overflow-scroll-y overflow-x-hidden">
            <CursorDot/>
            <div className="flex flex-col text-white text-4xl" style={{flexBasis: "33%"}}>
               {links.map((l) => (
                   <LinksLink url={l}/>
               ))}
            
            </div>

            <div className="flex" style={{flexBasis: "66%"}}>
                <LinksTitle screenHeight={screenHeight}/>
                <NavButton to="/" style={{position: "absolute", bottom: "5%", right: "5%"}} className="text-3xl">HOME</NavButton>
            </div>
            
        </main>
    );
};

export default Links;