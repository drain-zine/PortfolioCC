import React, { useEffect, useRef, useState } from "react";
import GalleryImg from "../components/Ephemera/GalleryImg";
import test from "../data/Ephemera/placeholder.png";
import dmap from "../data/Ephemera/dmaps/clouds.jpg";
import CanvasSlideshow from "../components/animations/LiquidTransition";


const Ephemera = () => {

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
				displacementImage: "./../data/Ephemera/dmaps/clouds.jpg",
				autoPlay: false,
				autoPlaySpeed: [0.1, 0.1],
				centerSprites: true,
                scale: [800, 600],
                fullScreen: false,
                scrollTransition: true
			});
    },[]);

    return(
        <main className="lander absolute w-screen h-screen overflow-hidden flex py-24">
            <div style={{fontSize: "2rem"}} className="w-1/6 flex flex-col text-white text-center ">
                <div  className="flex  flex-grow flex-col w-full">
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">OBJECT</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">TRANSIENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">BEING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">FEELING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">SILENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">REMINDER</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                </div>

                <div className="flex-1">
                    <h1 className="flex-1">HOME</h1>
                </div>

            </div>

            <div className="w-2/3 border-2 border-white text-white">
                {/*<div ref={ref} className="galleryContainer overflow-y-scroll h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                     {  [...Array(8)].map((e, i) => (
                        <GalleryImg src={"placeholder.png"}/>
                    ))} 
 </div>*/}
                    <div class="slide-wrapper hidden">
                        <div class="slide-item">
                            <img src={test} class="slide-item__image"/>
                        </div>

                        <div class="slide-item">
                            <img src={test} class="slide-item__image"/>
                        </div>
                    </div>

             
                
            </div>
            

            <div style={{fontSize: "2rem"}} className="w-1/6 flex flex-col text-white text-center ">
                <div  className="flex  flex-grow flex-col w-full">
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">OBJECT</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">TRANSIENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">BEING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">FEELING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">SILENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">REMINDER</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                </div>

                <div className="flex-1">
                    <h1 className="flex-1">SEE ALL</h1>
                </div>

            </div>

        </main>
    );
};

export default Ephemera;
