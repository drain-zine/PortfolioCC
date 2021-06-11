import React, { useEffect, useRef, useState } from "react";
import timer from "./../utils/timer";

const LoadingScreen = () => {
    const background = useRef();
    const text = useRef();
    const [index, setIndex] = useState(0);
    const colors = [
        {background: "black", text: "white"},
        {background: "white", text: "black"}
    ];

    const colorN = colors.length;
    const time = 1000;

    useEffect(async()=>{
        if(background.current && text.current){
            background.current.style.backgroundColor = colors[index].background;
            text.current.style.color = colors[index].text;
            
            await timer(time);
            setIndex((index+1)%colorN)
        }
    },[background, text, index]);

    return(        
    <main ref={background} className="relative primary-font-stack bg-color primary-font-color h-screen select-none">
   
        <div className="w-full h-full absolute z-0">

            <div className="backgroundTitle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 ref={text} className="select-none">LOADING</h1>
            </div>
        </div>
   </main>)
}

export default LoadingScreen;