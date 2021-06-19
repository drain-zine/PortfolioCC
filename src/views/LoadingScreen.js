import React, { useEffect, useRef, useState } from "react";
import timer from "./../utils/timer";
import audio from "./../res/sound/loadingAudio.wav";
import CursorDot from "../components/CursorDot";

const LoadingScreen = () => {
    const background = useRef();
    const text = useRef();
    const [index, setIndex] = useState(0);
    const [isInit, setIsInit] = useState(false);
    const colors = [
        {background: "black", text: "white"},
        {background: "white", text: "black"}
    ];

    const colorN = colors.length;
    const time = 800;

    useEffect(async()=>{
        if(background.current && text.current && isInit){
            background.current.style.backgroundColor = colors[index].background;
            text.current.style.color = colors[index].text;
            
            await timer(time);
            setIndex((index+1)%colorN)
        }
    },[background, text, index]);

    const initAnimation =() => {
        if(!isInit){
            console.log("HELLO");
            setTimeout(document.getElementById("test").click(), 300);
            document.getElementById("backgroundMusic").play();
            setIndex((index+1)%colorN)
            setIsInit(true);
        }
    };

    return(        
    <main ref={background} className="relative primary-font-stack bg-color primary-font-color h-screen select-none">
        <CursorDot/>
        <audio controls autoplay id="backgroundMusic" className="hidden">
            <source src={audio} type="audio/wav" />
            Your browser does not support the audio element.
            </audio>
        <div id="test" className="w-full h-full absolute z-0">

            <div  className="backgroundTitle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 onMouseOver={initAnimation} ref={text} className="select-none">LOADING</h1>
            </div>
        </div>
   </main>)
}

export default LoadingScreen;