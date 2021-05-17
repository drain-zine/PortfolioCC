import React, { useEffect, useRef, useState } from "react";
import GalleryImg from "../components/Ephemera/GalleryImg";
import useWaterAnimation from "../hooks/useWaterAnimation";


const Ephemera = () => {

    const [scrollPercent, setScrollPercent] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        Number.prototype.round = function(places) {
            return +(Math.round(this + "e+" + places)  + "e-" + places);
        }

        const getScrollPercent = () => {
            var h = document.documentElement, 
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            
            setScrollPercent(((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight)));
            console.log(((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight)));
        }

        
    }, []);

  

    useEffect(() => {
        if(ref.current){
            var lastScrollTop = 0;
            const scrollTest = () => {
              
                ref.current.scrollTop -= 10;
                console.log("scrolling");
                
    
            }
    
            window.addEventListener("scroll", scrollTest, false);
    
            return () => {
                window.removeEventListener("scroll", scrollTest, false);
            }
    
        }

    },[ref.current]);

    useWaterAnimation(".Background-canvas");

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

            <div className="w-2/3 border-2 border-white">
                <div ref={ref} className="galleryContainer overflow-y-scroll h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  {/*   {  [...Array(8)].map((e, i) => (
                        <GalleryImg src={"placeholder.png"}/>
                    ))} */}    
                        <canvas class="Background-canvas"></canvas>

                        
                  
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
