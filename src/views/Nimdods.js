
import React, { useState, useEffect} from "react"
import ReactDOM from 'react-dom';
import CursorDot from "../components/CursorDot";
import ScrollOverlay from "../components/ScrollOverlay";

/* import NimdodsTile from "./../components/NimdodsTile"; */
import BackgroundScrollTransistion from './../components/animations/BackgroundScrollTransistion'
import ScrollableLine from './../components/ScrollableLine';
import NavButton from './../components/NavButton';

import loadCMS from "../components/NimdodBlocks/loadCMS";


const Nimdods = (props) => {

    const { CMSTree, loading } = props;

    const [reactTree, setReactTree] = useState(null);

    // scroll to url anchor, react router doesnt like so we must implement ourselves
    useEffect(() => {
        // get tar ID
        const hash = window.location.hash.substring(1);

        if(hash && hash.length){
            setTimeout(
                window.requestAnimationFrame(function () {
                  const el = document.getElementById(hash)
                  el.scrollIntoView()
                  // clean up the hash, so we don't scroll on every prop update
                  removeHash()
                }),
                0
              )
        }

        const removeHash = () => {
            const loc = window.location
            const hist = window.history
        
            // use modern browser history API
            if (hist && 'pushState' in hist) {
              hist.replaceState('', document.title, loc.pathname + loc.search)
            // fallback for older browsers
            } else {
              // prevent scrolling by storing the page's current scroll offset
              const scrollV = document.body.scrollTop
              const scrollH = document.body.scrollLeft
        
              loc.hash = ''
        
              // restore the scroll offset, should be flicker free
              document.body.scrollTop = scrollV
              document.body.scrollLeft = scrollH
            }
          }


    },[]);

    // update DOM
    useEffect(() => {
        if(!loading && CMSTree){
            ReactDOM.render(CMSTree, document.getElementById('stagingArea')); 
        }
    }, [loading, CMSTree]); 

    return(
        <main className="cursor-none relative flex flex-col primary-font-stack bg-color primary-font-color select-none px-10">
           {/* <ScrollableLine fontColor={"white"} /> */}
            {/* header */}
            <header className="w-full flex justify-center flex-initial my-10 border-b-2 border-t-2 border-white">
                <div className="text-center py-16">
                    <h1 className="flex-1 text-9xl"><b>Nimdod's Never Ending Scroll</b></h1>
                </div>
            </header>
            <div class="flex flex-row justify-between">
            <NavButton to="/" className="text-2xl flex-1">HOME</NavButton>
            <NavButton to="/works" className="text-2xl flex-1 text-right">BACK</NavButton>
            </div>
            {/* tiles */}
            <div className="nimdodsCanvas w-full flex-grow px-16 mb-96">

                <div id="stagingArea" className="nimdodsCanvas w-full flex-grow px-16 mb-96">
                </div> 
            </div>

            {/* */}
            <ScrollOverlay />

            {/* footer */}
            <CursorDot />

        </main>
        
    );
}

export default Nimdods;