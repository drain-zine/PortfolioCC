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
    const gallery = useRef();

    const imgN = imgTree.length;

    const [toggleAll, setToggleAll] = useState(false);
    const [imgProg, setImgProg] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [imageMain, setImageMain] = useState(0);
    const [galleryHeight, setGalleryHeight] = useState(0);

    
    // increment image counter
     useEffect(() => {
        setScrollPercent(((imgProg+1)/imgN).toFixed(3));
    },[imgProg]); 

    const seeAll = (e) => {
        if(!isMount){
            setToggleAll(!toggleAll);
        }

    }

    const selectImage = (e) => {
        console.log("id:" + e.target.id);
        setImageMain(e.target.id);
        setToggleAll(!toggleAll);
    }

    useEffect(() => {
        setImageMain(Math.round(Math.random() * imgN));
        if(gallery){
            setGalleryHeight(gallery.current.clientHeight);
        }
    }, [gallery])

    return(
        <main>
            <div className="cursor-none lander absolute w-screen h-screen overflow-hidden flex py-24">
                
                <TextColumn column={column} button={"HOME"}/>

                <div ref={gallery} className="galleryContainer w-2/3 border-2 border-white text-white relative overflow-y-scroll">
                    <div id="scroll" className="absolute" style={{left: "10%", top: "50%", transform: "translateY(-50%)"}}>
                        <p className="transform -rotate-90 text-2xl -translate-x-1/2">{scrollPercent}</p>
                    </div>

                    <FadeDiv trigger={!toggleAll} className="z-0 absolute" id="expanded" style={{height: `${galleryHeight}px`}}>
                        <img src={imgTree[imageMain].src} alt="" className="slide-item__image"/>
                    </FadeDiv>
                    
                    <div className="scrollWrapper w-full">
                        <FadeDiv trigger={toggleAll} id="gallery" className="z-10">
                        {imgTree.map((img,i) => (
                            <FadeDiv trigger={toggleAll} style={{"flex-basis": "33%"}} className=" p-2" onClick={selectImage}>
                                <img src={(img.src)} className="slide-item__image"  id={i}/>
                            </FadeDiv>
                        ))}</FadeDiv>
                    </div>
                    
                    
                </div>
                

                <TextColumn column={column} button={toggleAll ? "BACK" : "ALL"} onClick={seeAll}/>
                <CursorDot />
            </div>

        </main>);

       
};

export default Ephemera;
