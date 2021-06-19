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
    const scrollWrapper = useRef();
    const scrollCount = useRef();

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
            if(scrollWrapper.current){
                scrollWrapper.current.style.opacity = "1";
                
            }
            if(scrollCount.current){
                scrollCount.current.style.opacity = "1";
                
            }
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
                if(gallery.current){
                    gallery.current.removeEventListener('scroll', handleScroll);
                }
            };

        }
    }, [gallery])

    useEffect(() => {

        if(gallery){
            if(toggleAll){
                gallery.current.classList.remove(`borderOut`);
                gallery.current.classList.add(`borderIn`);
            }else{
                gallery.current.classList.remove(`borderIn`);
                gallery.current.classList.add(`borderOut`);  
            }
        }
       
    }, [toggleAll]);


    return(
        <main>
            <CursorDot/>
            <div className="noScrollY lander absolute w-screen h-screen overflow-hidden flex py-24">
                
                <TextColumn column={column} button={"HOME"}/>

                <FadeDiv trigger={!toggleAll} className="z-0 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center flex" id="expanded" style={{height: `${galleryDim.height}px`, width: `${0.75* galleryDim.width}px`,  }}>
                        <img src={imgTree[imageMain].src} alt="" className="mx-auto"/>
                    </FadeDiv>

                <FadeDiv ref={scrollCount} trigger={toggleAll} id="scroll" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full text-white text-2xl" style={{top: scrollY, opacity: "0"}}>
                        <p className="">{scrollPercent}</p>
                </FadeDiv>
                
                <div ref={gallery} className={"noScrollY w-2/3 z-10 text-white relative overflow-y-scroll borderOut " + (toggleAll ? "borderFadeIn" : "borderFadeOut")}>  
                
                    <div ref={scrollWrapper} className="scrollWrapper w-full" style={{opacity: "0"}}>
                        <FadeDiv trigger={toggleAll} id="gallery" className="z-20">
                        {imgTree.map((img,i) => (
                            <FadeDiv trigger={toggleAll} style={{"flex-basis": "33%"}} className=" p-2" onClick={toggleAll ? selectImage : null}>
                                <img src={(img.src)} className="slide-item__image"  id={i}/>
                            </FadeDiv>
                        ))}</FadeDiv>
                    </div>
                    
                    
                </div>
                

                <TextColumn column={column} button={toggleAll ? "BACK" : "ALL"} onClick={seeAll}/>
            </div>

        </main>);

       
};

export default Ephemera;
