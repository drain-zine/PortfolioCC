import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const transition = { duration: 0.45 };
const variants = { visible: {opacity: 1}, hidden: {opacity: 0} };


const ScrollOverlay = (props) => {

    const [scrollPercent, setScrollPercent] = useState(0);

    const controls = useAnimation();
    const trigger = 0.073; // derived from qualitative testing

    // handle scroll visibilty
    useEffect(() => {
        if(scrollPercent > trigger){
            controls.start("visible");
            console.log("element visible");
        } else {
           controls.start("hidden");
        }
    }, [controls, scrollPercent]);


    // get scroll % as string
    useEffect(() => {
        Number.prototype.round = function(places) {
            return +(Math.round(this + "e+" + places)  + "e-" + places);
        }

        const getScrollPercent = () => {
            var h = document.documentElement, 
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            
            setScrollPercent(((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight)).toFixed(3));
        }

        window.addEventListener("scroll", getScrollPercent, false);

        return () => {
            window.removeEventListener("scroll", getScrollPercent, false);
        }

    }, []);


    return(
        <motion.div 
            className="w-screen left-0 h-screen fixed z-20 pointer-events-none"
            animate={controls}
            initial={"hidden"}
            transition={transition}
            variants={variants}
        >
            <div className="absolute left-0 pl-4" style={{top: "15%"}}>
                <p className="transform -rotate-90 text-2xl translate-x-1/2">{scrollPercent}</p>
            </div>

            <div className="absolute right-0 pr-4" style={{top: "15%"}}>
                <p className="transform rotate-90 text-2xl text-red-900 -translate-x-1/2">TEST</p>
            </div>

        </motion.div>
    );
};

export default ScrollOverlay;