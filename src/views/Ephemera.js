import React, { useEffect, useRef, useState } from "react";
import GalleryImg from "../components/Ephemera/GalleryImg";
import TextColumn from "../components/Ephemera/TextColumn";
import dmap from "../data/Ephemera/dmaps/clouds.jpg";

import FadeDiv from "../components/animations/FadeDiv";
import FadeInDiv from "../components/animations/FadeDiv";
import useIsMount from "../hooks/useIsMount";
import CursorDot from "../components/CursorDot";


const Ephemera = (props) => {
    const { imgTree } = props; 
    const column = ["EPHEMERA", "OBJECT", "EPHEMERA", "TRANSIENCE", "EPHEMERA", "BEING", "EPHEMERA", "FEELING", "EPHEMERA", "SILENCE", "EPHEMERA", "REMINDER", "EPHEMERA"];
    const canvas = useRef();
    const container = useRef();

    const isMount = useIsMount();

    const imgN = imgTree.length;

    const [toggleAll, setToggleAll] = useState(true);
    const [imgProg, setImgProg] = useState(0);
    const [initCoords, setInitCoords] = useState({x: 0, y:0});
    const [initCoordsSet, setInitCoordsSet] = useState(false);
    const [activate, setActivate] = useState({});
    const [togglePan, setTogglePan] = useState(false);

    const [scrollPercent, setScrollPercent] = useState(0);

    
    // increment image counter
     useEffect(() => {
        setScrollPercent(((imgProg+1)/imgN).toFixed(3));
    },[imgProg]); 

    const seeAll = (e) => {
        if(!isMount){
            setToggleAll(!toggleAll);
            //console.log(initCanvasSlideshow);
            //document.removeEventListener("wheel", getScrollNav, true);
        }

    }

    const initCanvas = (e) => {
        /* // tell the browser we're handling this event
        e.preventDefault();
        e.stopPropagation();

        // calc the starting mouse X,Y for the drag
        setStartCoords({x: parseInt(e.clientX), y: parseInt(e.clientX)});

        // set the isDragging flag
       // console.log(`x: ${startX}, y: ${startY}`); */

    }

    const panCanvas = (e) => {

            let x = e.clientX - initCoords.x;
            let y = e.clientY - initCoords.y;

            // quicker to manipultae js direct then re render w state
            document.getElementById("test").style.transform = `translate(${-x}px, ${-y}px)`
            document.getElementById("test2").style.transform = `translate(${-x}px, ${-y}px)`
   
        
    }


    const activatePan = (e) => {
        setTogglePan(true);
        setInitCoords({x: e.clientX, y: e.clientY});
    }

    const deactivatePan = () => {
        setTogglePan(false);
        console.log("disable pan");
    }

    useEffect(() => {
        if(activate.current){
            activate.current.addEventListener("mouseleave", (e) => activatePan(e));
            activate.current.addEventListener("mouseenter", deactivatePan);
        }
    }, [activate, togglePan])

    useEffect(() => {
        if(togglePan && initCoords.x > 0 && initCoords.y > 0){
            window.addEventListener("mousemove", (e) => panCanvas(e));
            
        }else{
            window.removeEventListener("mousemove", (e) => panCanvas(e));
        }
    }, [initCoords, togglePan])

    useEffect(() => {
        
    }, [togglePan])

    return(
        <main  ref={container}>
            <div id="test2" ref={canvas} className="lander z-10 absolute w-screen h-screen overflow-hidden flex py-24">
                
                <TextColumn column={column} button={"HOME"}/>

                <div  className="galleryContainer w-2/3 border-2 border-white text-white relative overflow-y-scroll">
                    <div id="scroll" className="absolute" style={{left: "10%", top: "50%", transform: "translateY(-50%)"}}>
                        <p className="transform -rotate-90 text-2xl -translate-x-1/2">{scrollPercent}</p>
                    </div>  
                    <div  ref={activate} className="w-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute background-red-900" style={{height: "300px"}}></div>  
                </div>
                
                <TextColumn column={column} button={toggleAll ? "BACK" : "ALL"} onClick={seeAll}/>
                <CursorDot />
            </div>
            <div id="test" style={{width: "5000px", height: "5000px"}} className="absolute z-0 left-0 top-0">
                <FadeDiv trigger={toggleAll} id="gallery" className="ml-40" >
                    {imgTree.map((i) => (
                        <FadeDiv trigger={toggleAll} style={{"flex-basis": "33%"}} className="p-2 w-1/2">
                            <img src={(i.src)} className="slide-item__image"/>
                        </FadeDiv>
                    ))}</FadeDiv>
            </div>
        </main>);

       
};

export default Ephemera;
