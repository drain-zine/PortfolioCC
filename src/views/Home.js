import React from "react";
import useInteractDrag from "../hooks/useInteractDrag";

import piece1 from './../res/static/piece1.png';
import piece2 from './../res/static/piece2.png';
import piece3 from './../res/static/piece3.png';
import piece4 from './../res/static/piece4.png';

import background from './../res/static/puzzleBackBorder.png';

const Home = () => {
    
    useInteractDrag('.draggable');

    return (
        <main className="pt-2 flex justify-center trolley">
            <div className="puzzle-container md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:w-1/2">
                 <div className="relative text-center">
                    <h1 className="primary-font-stack primary-color xl:top-0" >TEST</h1>
                    <img className="background" src={background}/>
                </div>

                <div className="piece p1 draggable"><img src={piece1}/></div><div className="link l1"><p className="xl:text-base lg:text-tiny md:text-sm">Test</p></div>
                <div className="piece p2 draggable"><img src={piece2}/></div><div className="link l2"><p className="xl:text-base lg:text-tiny md:text-xs">Test</p></div>
                <div className="piece p3 draggable"><img src={piece3}/></div><div className="link l3"><p className="xl:text-base lg:text-tiny md:text-xs">Test</p></div>
                <div className="piece p4 draggable"><img src={piece4}/></div> <div className="link l4"><p className="xl:text-base lg:text-tiny md:text-xs">Test</p></div>
            </div>
        </main>
    );
}

export default Home;