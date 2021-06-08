import React, { useEffect, useRef, useState } from "react";
import GalleryImg from "../components/Ephemera/GalleryImg";
import TextColumn from "../components/Ephemera/TextColumn";
import test from "../data/Ephemera/placeholder.png";
import dmap from "../data/Ephemera/dmaps/clouds.jpg";
import CanvasSlideshow from "../components/animations/LiquidTransition";


const Ephemera = () => {

    const column = ["EPHEMERA", "OBJECT", "EPHEMERA", "TRANSIENCE", "EPHEMERA", "BEING", "EPHEMERA", "FEELING", "EPHEMERA", "SILENCE", "EPHEMERA", "REMINDER", "EPHEMERA"];
    const imgArray = ["placeholder.png", "placeholder2.jpg", "placeholder3.png", "placeholder5.jpg", "placeholder6.jpg"];
    
    const imgN = imgArray.length;

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
        
    }


    return(
        <main className="lander absolute w-screen h-screen overflow-hidden flex py-24">
            
            <TextColumn column={column} button={"HOME"}/>

            <div className="w-2/3 border-2 border-white text-white relative">
                <div className="absolute" style={{left: "10%", top: "50%", transform: "translateY(-50%)"}}>
                    <p className="transform -rotate-90 text-2xl -translate-x-1/2">{scrollPercent}</p>
                </div>

                <div class="slide-wrapper hidden">
                    {imgArray.map((i) => (
                        <div class="slide-item">
                            <img src={require(("./../data/Ephemera/"+i)).default} class="slide-item__image"/>
                        </div>
                    ))}
                </div> 
            </div>
            

            <TextColumn column={column} button={"ALL"} onClick={seeAll}/>

        </main>
    );
};

export default Ephemera;
