
import React, { useState, useEffect} from "react"
import useInteractDrag from "../hooks/useInteractDrag";
import Marquee from "react-double-marquee";


import WorkTile from "./../components/WorkTile";
import BackgroundScrollTransistion from './../components/animations/BackgroundScrollTransistion'

const Works = () => {

    var data = [{title: "Swag", img: require("./../data/assets/bape1.jpg").default},
    {title: "Weed", img: require("./../data/assets/bape2.jpg").default},
    {title: "Yu-gi-oh", img: require("./../data/assets/bape3.jpg").default}, ];

    const [togglesCounter, setTogglesCounter] = useState({count: 0, ve: 0});
    const [trigger, setTrigger] = useState(false);
    const [firstClick, setFirstClick] = useState(false);

    // increment + decrement toggles i.e. how many tiles have been toggled open
    const incrementTogglesCounter = () =>{
        setTogglesCounter({count: togglesCounter.count + 1, ve: 1});
        
    }

    const decrementTogglesCounter = () => {
        setTogglesCounter({count: togglesCounter.count - 1, ve: -1})
    }

    // listen to when first card is opened and last card is closed to trigger background anim
    useEffect(() => {
        if(togglesCounter.count === -1){
            console.log("EVERYTHING CLOSED");
            if(!firstClick){
                setFirstClick(true);
            }else{
                setTrigger(true);
            }
        
           
        }else if(togglesCounter.count === 0 && togglesCounter.ve === 1 && firstClick){
             setTrigger(!trigger); 
             /* setFirstClick(false) */
        }
         if(togglesCounter.count === -1 && togglesCounter.ve === -1 && firstClick){
            console.log("HERE");
            setTrigger(!trigger);
        }
        console.log(togglesCounter);
    }, [togglesCounter])

    useInteractDrag(".draggable");

    return(
        <main className="relative primary-font-stack bg-color primary-font-color h-screen select-none">
             <marquee direction="right" className={"w-full absolute z-20 top-0 left-0 " + (!trigger ? "text-white" : "text-black")}>I wonder if I can click these...</marquee>
            <div className="w-full h-full absolute z-0">

                <div className="backgroundTitle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="select-none">WORKS</h1>
                </div>
            </div>
            <BackgroundScrollTransistion className={"w-full h-full absolute z-0 bg-noisy text-black"} trigger={trigger} up={false} >

                <div className="backgroundTitle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="select-none">WORKS</h1>
                </div>
            </BackgroundScrollTransistion>

            <div className="worksCanvas w-full">
            {data.map((work) => (

                <WorkTile data={work} incrementTogglesCounter={incrementTogglesCounter} decrementTogglesCounter={decrementTogglesCounter}/>

                ))}
            </div>
        </main>
    );
}

export default Works;