import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  
    const isMount = useIsMount();

    const imgN = imgTree.length;

    const [toggleAll, setToggleAll] = useState(false);
    const [imgProg, setImgProg] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [init, setInit] = useState(0);

    
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

    useEffect(() => {
        setInit(Math.round(Math.random() * imgN));
    }, [])

    return(
        <main>
            <div className="cursor-none lander absolute w-screen h-screen overflow-hidden flex py-24">
                
                <TextColumn column={column} button={"HOME"}/>

                <div className="galleryContainer w-2/3 border-2 border-white text-white relative overflow-y-scroll">
                    <div id="scroll" className="absolute" style={{left: "10%", top: "50%", transform: "translateY(-50%)"}}>
                        <p className="transform -rotate-90 text-2xl -translate-x-1/2">{scrollPercent}</p>
                    </div>

                
                    <FadeDiv trigger={!toggleAll} id="expanded">
                        <img src={imgTree[init].src} alt="" className="slide-item__image"/>
                    </FadeDiv>
                    
                
                    <FadeDiv trigger={toggleAll} id="gallery" >
                    {imgTree.map((i) => (
                        <FadeDiv trigger={toggleAll} style={{"flex-basis": "33%"}} className="p-2">
                            <img src={(i.src)} className="slide-item__image"/>
                        </FadeDiv>
                    ))}</FadeDiv>
                    
                    
                </div>
                

                <TextColumn column={column} button={toggleAll ? "BACK" : "ALL"} onClick={seeAll}/>
                <CursorDot />
            </div>

        </main>);

       
};

export default Ephemera;
