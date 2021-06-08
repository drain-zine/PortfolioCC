import React, { useEffect, useRef, useState } from "react";
import GalleryImg from "../components/Ephemera/GalleryImg";
import TextColumn from "../components/Ephemera/TextColumn";
import test from "../data/Ephemera/placeholder.png";
import dmap from "../data/Ephemera/dmaps/clouds.jpg";
import CanvasSlideshow from "../components/animations/LiquidTransition";
import FadeDiv from "../components/animations/FadeDiv";
import FadeInDiv from "../components/animations/FadeDiv";
import useIsMount from "../hooks/useIsMount";


const Ephemera = () => {

    const column = ["EPHEMERA", "OBJECT", "EPHEMERA", "TRANSIENCE", "EPHEMERA", "BEING", "EPHEMERA", "FEELING", "EPHEMERA", "SILENCE", "EPHEMERA", "REMINDER", "EPHEMERA"];
    const imgArray = ["placeholder.png", "placeholder2.jpg", "placeholder3.png", "placeholder5.jpg", "placeholder6.jpg"];
    const isMount = useIsMount();

    const imgN = imgArray.length;

    const [toggleAll, setToggleAll] = useState(false);
    const [imgProg, setImgProg] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);

    // init canvas for anim effect
    useEffect(() => {
        var spriteImages = document.querySelectorAll( '.slide-item__image' );
			var spriteImagesSrc = [];
			var texts = [];

			for ( var i = 0; i < spriteImages.length; i++ ) {
				var img = spriteImages[i];
				// Set the texts you want to display to each slide 
				// in a sibling element of your image and edit accordingly
				if ( img.nextElementSibling ) {
					texts.push(img.nextElementSibling.innerHTML);
				} else {
					texts.push('');
				}
				spriteImagesSrc.push( img.getAttribute('src' ) );
			}
      
			var initCanvasSlideshow = new CanvasSlideshow({
				sprites: spriteImagesSrc,
				displacementImage: "./../data/Ephemera/dmaps/ripple.jpg",
				autoPlay: false,
				autoPlaySpeed: [0.1, 0.1],
				centerSprites: true,
                scale: ["60%", "auto"],
                fullScreen: false,
                scrollTransition: true,
                scrollStateUpdater: setImgProg
			});
    },[]);

    // increment image counter
     useEffect(() => {
        setScrollPercent(((imgProg+1)/imgN).toFixed(3));
    },[imgProg]); 

    const seeAll = (e) => {
        if(!isMount){
            setToggleAll(!toggleAll);
        }

    }

    useEffect(() => {
        let canvas = document.getElementsByTagName("canvas")[0];
        let scroll = document.getElementById("scroll");

        if(toggleAll){
            canvas.classList.remove("fadeIn");
            canvas.classList.add("fadeOut");

            scroll.classList.remove("fadeIn");
            scroll.classList.add("fadeOut");

        }else{
            canvas.classList.remove("fadeOut");
            canvas.classList.add("fadeIn");

            scroll.classList.remove("fadeOut");
            scroll.classList.add("fadeIn");

        }
    }, [toggleAll])

    return(
        <main className="lander absolute w-screen h-screen overflow-hidden flex py-24">
            
            <TextColumn column={column} button={"HOME"}/>

            <div className="w-2/3 border-2 border-white text-white relative">
                <div id="scroll" className="absolute" style={{left: "10%", top: "50%", transform: "translateY(-50%)"}}>
                    <p className="transform -rotate-90 text-2xl -translate-x-1/2">{scrollPercent}</p>
                </div>

                <div className="slide-wrapper hidden">
                    {imgArray.map((i) => (
                        <div className="slide-item">
                            <img src={require(("./../data/Ephemera/"+i)).default} className="slide-item__image"/>
                        </div>
                    ))}
                </div> 

                
                 
                        <FadeDiv style={{"opacity": 0}}trigger={toggleAll} id="gallery" className="img-grd flex flex-row flex-wrap justify-center">
                        {imgArray.map((i) => (
                            <FadeDiv trigger={toggleAll} style={{"flex-basis": "33%"}} className="p-2">
                                <img src={require(("./../data/Ephemera/"+i)).default} className="slide-item__image"/>
                            </FadeDiv>
                        ))}</FadeDiv>
                   
                
            </div>
            

            <TextColumn column={column} button={toggleAll ? "BACK" : "ALL"} onClick={seeAll}/>

        </main>
    );
};

export default Ephemera;
