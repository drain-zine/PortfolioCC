import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

const ScrollableLine = (props) => {
    const {fontColor} = props;


    const [strokeDasharray, setStrokeDasharray] = useState(0);
    const [strokeDashoffset, setStrokeDashoffset] = useState(0);
    const [lineRandYOffset, setLineRandYOffset] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const ref = useRef(null);


    // init line length
    useEffect(() => {
        if(ref.current && ref.current.parentElement.offsetHeight){
            var startingLength = 3;


            let rand_offset = 3+Math.floor(Math.random() * 4);
            setLineRandYOffset(rand_offset);

            var pathLength = Math.max(ref.current.offsetHeight);
            console.log("[INIT LINE] INIT LINE Height:  " + pathLength + " test:  ");

            setLineHeight(pathLength);
            setStrokeDasharray(pathLength + ' ' + pathLength);
            setStrokeDashoffset(pathLength - startingLength);
        
        }
    },[ref]);

    return(
        <svg ref={ref} viewBox={"0 0 100 100"} className="absolute z-0" id="line-svg" height={isMobile ? lineHeight : "100%"} style={{transform: "translateY(-"+lineRandYOffset+"%)"}}>
            <line  x1="50%" y1="0%" x2="50%" y2="100%"  stroke={fontColor} className="line-path-test" fill="none" strokeDasharray = {strokeDasharray} strokeDashoffset = { strokeDashoffset} strokeWidth="1" vectorEffect="non-scaling-stroke" shapeRendering="crispEdges"/>
        </svg>
    );
}

export default ScrollableLine;