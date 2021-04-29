
import React, { useState, useEffect} from "react"
import ReactDOM from 'react-dom';
import CursorDot from "../components/CursorDot";

/* import NimdodsTile from "./../components/NimdodsTile"; */
import BackgroundScrollTransistion from './../components/animations/BackgroundScrollTransistion'
import ScrollableLine from './../components/ScrollableLine';

import loadCMS from "../components/NimdodBlocks/loadCMS";


const Nimdods = (props) => {

    const { CMSTree, loading } = props;

    const [reactTree, setReactTree] = useState(null);

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

   /*  // inject data into state
    useEffect(() => {
        const injectData = async() => {


            Promise.all(loadCMS()).then((data) => {
                setReactTree(data);
                setLoading(false);
            });

            console.log("test");
            console.log(reactTree);
        }

        injectData();
    }, []);
    */
    // update DOM
    useEffect(() => {
        if(!loading && CMSTree){
            ReactDOM.render(CMSTree, document.getElementById('stagingArea')); 
        }
    }, [loading, CMSTree]); 

    /* // update DOM
    useEffect(() => {
        if(!loading && CMSTree){
            ReactDOM.render(CMSTree, document.getElementById('stagingArea')); 
        }
    }, [CMSTree]); */


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

               {/*  { loading ? <p className="text-white">LOADING</p> :  (
                    
                         <div id="stagingArea" className="nimdodsCanvas w-full flex-grow px-16 mb-96">
                        </div> 
                    )      
                } */}
                <div id="stagingArea" className="nimdodsCanvas w-full flex-grow px-16 mb-96">
                        </div> 
            </div>

            {/* footer */}
            <CursorDot />
        </main>
        
    );
}

export default Nimdods;