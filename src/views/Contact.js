import React from "react";
import useInteractDrag from "../hooks/useInteractDrag";
import  video  from "../data/assets/dynamic/contact.webm";
import SVGHorizLine from "./../components/SVGHorizLine";


const Contact = () => {
    useInteractDrag('.draggable');

    return(
        <main className="lander absolute w-screen h-screen overflow-hidden">
            <div class=" flex flex-col justify-center items-center top-10 left-10 bg-black text-white absolute z-10 draggable py-2 px-2 rounded-2xl shadow-md">
                <div className="relative text-right flex-inital flex" style={{height: "24px"}}>

                    <div className="flex-1 mx-2">
                        <SVGHorizLine /> 
                    </div>
                </div>
                
                <div className="flex-1 ">
                <table>
                        <tr>
                            <th class="font-bold text-left pr-8">Email</th>
                            <th class="text-red-600 font-normal secondary-font-stack">christiandaichicarlson@gmail.com</th>
                        </tr>
                        <tr>
                            <th class="font-bold text-left">Phone</th>
                            <th class="text-red-600 font-normal secondary-font-stack">(1)6505729457</th>
                        </tr>
                    </table>
                </div>

                <div className="relative text-right flex-inital flex" style={{height: "24px"}}>

                            <div className="flex-1 mx-2">
                                <SVGHorizLine /> 
                            </div>
                    </div>
            </div>

            <div className="videoContainer absolute z-0 w-full h-full">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </main>
    );
};

export default Contact;
