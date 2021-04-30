import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const ScrollOverlay = () => {

    const [scrollPercent, setScrollPercent] = useState(0);

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
        <div className="w-screen h-screen fixed z-20 pointer-events-none">
            <div className="absolute left-0 ml-4" style={{top: "20%"}}>
                <p className="transform -rotate-90 text-2xl">{scrollPercent}</p>
            </div>
        </div>
    );
};

export default ScrollOverlay;