
import React, { useState, useEffect} from "react"
import CursorDot from "../components/CursorDot";

/* import NimdodsTile from "./../components/NimdodsTile"; */
import BackgroundScrollTransistion from './../components/animations/BackgroundScrollTransistion'
import ScrollableLine from './../components/ScrollableLine';

import Title from './../components/NimdodBlocks/Title.js';
import TextBox from './../components/NimdodBlocks/TextBox.js';
import Button from './../components/NimdodBlocks/Button.js';
import Gallery from './../components/NimdodBlocks/Gallery.js';

const Works = () => {

      // animate lines
    useEffect(() => {
        const paths = document.getElementsByClassName("line-path-test");

        // vars for upward scrolling behaviour
        var lastScrollTop = 0;

        // pre specify this -> allows us to address values
        var lastDrawLengths = new Array(paths.length).fill(0);
        console.log(lastDrawLengths[0]);

        // scroll event handler
        const animatePaths = () => {
            var drawLength = 0;
            var st = window.pageYOffset || document.documentElement.scrollTop;
            // check if scrolling down
            if(st >= lastScrollTop){
                // handle drawing of each path  
                for(let i = 0; i < paths.length; i++){
                    let pathLength = paths[i].getTotalLength();
                    drawLength = pathLength * ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
                    console.log("TEST: " + drawLength);
                    // only apply if scrolling down, and if beyond current line
                    /* console.log("draw: " + drawLength + " last: " + lastDrawLengths[i]); */
                    if(drawLength >= lastDrawLengths[i]){
                    /*  console.log("path: " + pathLength + " draw: " + drawLength); */
                        paths[i].style.strokeDashoffset = pathLength - drawLength;
                    
                        // update last draw lengths
                        lastDrawLengths[i] = drawLength;
                    }
                }
            }
            // update lastScrollTop
            lastScrollTop = st;
        }  

        window.addEventListener('scroll', animatePaths, false);
        
        return function cleanup() {
            window.removeEventListener('scroll', animatePaths, false);
        };

    }, []);


    return(
        <main className="cursor-none relative flex flex-col primary-font-stack bg-color primary-font-color select-none px-10">
           {/* <ScrollableLine fontColor={"white"} /> */}
            {/* header */}
            <header className="w-full flex justify-center flex-initial my-10 border-b-2 border-t-2 border-white">
                <div className="text-center py-16">
                    <h1 className="flex-1 text-9xl"><b>Nimdod's Never Ending Scroll</b></h1>
                </div>
            </header>

            {/* tiles */}
            <div className="nimdodsCanvas w-full flex-grow px-16 mb-96">
               {/*  {data.map((work) => (

                   <WorkTile data={work} incrementTogglesCounter={incrementTogglesCounter} decrementTogglesCounter={decrementTogglesCounter}/>

                    ))} */}

                    <div id="Weed" className="w-full justify-center items-center flex flex-col mt-24">
                        <Title title={"Weed"} />
                        <TextBox content={"Jabari Shelton (born December 23, 1991 in Harlem, New York City), is an American streetwear designer and entrepreneur better known as ASAP Bari (stylized as A$AP Bari). Bari is best known as a co-founding member of the New York hip-hop collective ASAP Mob, a group he helped form in 2006 alongside ASAP Yams, ASAP Kham and ASAP Illz.[1] He is also a co-founder of the streetwear clothing label VLONE.[2] In 2019 he was convicted of sexual assault.[3][4]"} />
                        <Button title={"Read More Of My Analysis at"} link={"highsnobiety.com"} subtitle={"2021"} />
                    </div>

                    <div id="Swag" className="w-full justify-center items-center flex flex-col mt-24">
                        <Title title={"Swag"} />
                        <div className="body my-16 text-center">
                            <TextBox content={"Following the success of ASAP Mob, fellow member Kamoni Chandler, also known as A$AP K, founded the streetwear label VLONE in 2011. Shelton, who had previously been the head of A$AP Rocky's merchandise during his tours,[2] worked together with Chandler on the brand. After a falling out Chandler left the brand and Shelton took over. Shelton brought in Edison Chen of CLOT, who handles the design work of the label. He stated in an interview with Mass Appeal that much of his influence came from trying on and stealing clothes with his friends while living in Harlem, feeling the fabrics of high-value brands.[5]"} />
                            <Gallery imgs={["static/swag1.jpg", "static/swag2.jpg", "static/swag3.jpg"]} />
                         </div>
                        <Button title={"Radicalising and Democratizing Swag"} subtitle={"2069"} />
                    </div>
            </div>

            {/* footer */}
            <CursorDot />
        </main>
        
    );
}

export default Works;