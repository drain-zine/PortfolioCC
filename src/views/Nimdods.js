
import React, { useState, useEffect} from "react"
import CursorDot from "../components/CursorDot";

/* import NimdodsTile from "./../components/NimdodsTile"; */
import BackgroundScrollTransistion from './../components/animations/BackgroundScrollTransistion'
import ScrollableLine from './../components/ScrollableLine';

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
                        <div className="header text-center flex-1 text-9xl">
                            Weed
                        </div>
                        <div className="body my-16 text-center">
                        <p className="text-6xl">Jabari Shelton (born December 23, 1991 in Harlem, New York City), is an American streetwear designer and entrepreneur better known as ASAP Bari (stylized as A$AP Bari). Bari is best known as a co-founding member of the New York hip-hop collective ASAP Mob, a group he helped form in 2006 alongside ASAP Yams, ASAP Kham and ASAP Illz.[1] He is also a co-founder of the streetwear clothing label VLONE.[2] In 2019 he was convicted of sexual assault.[3][4]</p>
                        </div>
                        <div className="footer mt-8 border-t-2 border-b-2 hover:border-l-2 hover:border-r-2 border-white py-16 px-4">
                            <p className="text-6xl">Read More Of My Analysis at <span className="text-red-900">highsnobiety.com</span></p>
                            <p className="text-red-900 text-center mt-4 text-4xl">2021</p>
                        </div>
                    </div>

                    <div id="Weed" className="w-full justify-center items-center flex flex-col mt-24">
                        <div className="header text-center flex-1 text-9xl">
                            Swag
                        </div>
                        <div className="body my-16 text-center">
                            <p className="text-6xl">Following the success of ASAP Mob, fellow member Kamoni Chandler, also known as A$AP K, founded the streetwear label VLONE in 2011. Shelton, who had previously been the head of A$AP Rocky's merchandise during his tours,[2] worked together with Chandler on the brand. After a falling out Chandler left the brand and Shelton took over. Shelton brought in Edison Chen of CLOT, who handles the design work of the label. He stated in an interview with Mass Appeal that much of his influence came from trying on and stealing clothes with his friends while living in Harlem, feeling the fabrics of high-value brands.[5]</p>
                            <div className="imgContainer justify-center flex flex-row mt-8">
                                <img className="w-1/4 mx-4" src={require("./../res/static/swag1.jpg").default} />
                                <img className="w-1/4 mx-4" src={require("./../res/static/swag2.jpg").default} />
                                <img className="w-1/4 mx-4" src={require("./../res/static/swag3.jpg").default} />
                            </div>
                        </div>

                        <div className="footer mt-8 border-t-2 border-b-2 border-white py-16">
                            <p className="text-6xl">Radicalising and Democratizing Swag</p>
                            <p className="text-red-900 text-center mt-4 text-4xl">2069</p>
                        </div>
                    </div>
            </div>

            {/* footer */}
            <CursorDot />
        </main>
        
    );
}

export default Works;