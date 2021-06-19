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
    const [scrollY, setScrollY] = useState(0);
    const [imageMain, setImageMain] = useState(0);
    const [galleryDim, setGalleryDim] = useState({width: 0, height: 0});

    
    // handleScroll
    const handleScroll = (e) => {
        var h = e.target, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    
        let sP = (((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight)).toFixed(3));
        if(sP > 1){
            sP = 1;
        }
        setScrollPercent(sP);
    }

    const seeAll = (e) => {
        if(!isMount){
            setToggleAll(!toggleAll);
        }

    }

    const selectImage = (e) => {
        //console.log("id:" + e.target.id);
        setImageMain(e.target.id);
        setToggleAll(!toggleAll);
        if(gallery){
            gallery.current.scrollTo(0,0);
        }
    }

    useEffect(() => {
        setImageMain(Math.round(Math.random() * imgN));
        if(gallery){
            const scaledHeight = gallery.current.clientHeight + (window.innerHeight - (gallery.current.clientHeight))/2
            setGalleryDim({width: gallery.current.clientWidth, height: scaledHeight});
            setScrollY(gallery.current.getBoundingClientRect().top);
            console.log(galleryDim);

            gallery.current.addEventListener('scroll', handleScroll, { passive: true });
    
            return () => {
                gallery.current.removeEventListener('scroll', handleScroll);
            };

        }
    }, [gallery])

    useEffect(() => {
       
    }, []);


    return(
        <main>
            <div className="cursor-none lander absolute w-screen h-screen overflow-hidden flex py-24">
                
                <TextColumn column={column} button={"HOME"}/>

                <FadeDiv trigger={!toggleAll} className="z-0 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center flex" id="expanded" style={{height: `${galleryDim.height}px`, width: `${0.75* galleryDim.width}px`,  }}>
                        <img src={imgTree[imageMain].src} alt="" className="mx-auto"/>
                    </FadeDiv>

                <FadeDiv trigger={toggleAll} id="scroll" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full text-white text-2xl" style={{top: scrollY}}>
                        <p className="">{scrollPercent}</p>
                </FadeDiv>
                
                <div ref={gallery} className="galleryContainer w-2/3 border-2 border-white z-10 text-white relative overflow-y-scroll">  
                
                    <div className="scrollWrapper w-full">
                        <FadeDiv trigger={toggleAll} id="gallery" className="z-20">
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
