import React, { useEffect, useRef, useState } from "react";
import GalleryImg from "../components/Ephemera/GalleryImg";
import TextColumn from "../components/Ephemera/TextColumn";
import test from "../data/Ephemera/placeholder.png";
import dmap from "../data/Ephemera/dmaps/clouds.jpg";
import CanvasSlideshow from "../components/animations/LiquidTransition";


const Ephemera = () => {

    const column = ["EPHEMERA", "OBJECT", "EPHEMERA", "TRANSIENCE", "EPHEMERA", "BEING", "EPHEMERA", "FEELING", "EPHEMERA", "SILENCE", "EPHEMERA", "REMINDER", "EPHEMERA"];

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
            
            <TextColumn column={column} button={"HOME"}/>

            <div className="w-2/3 border-2 border-white text-white">
                    <div class="slide-wrapper hidden">
                        <div class="slide-item">
                            <img src={test} class="slide-item__image"/>
                        </div>

                        <div class="slide-item">
                            <img src={test} class="slide-item__image"/>
                        </div>
                    </div> 
            </div>
            

            <TextColumn column={column} button={"ALL"}/>

        </main>
    );
};

export default Ephemera;
