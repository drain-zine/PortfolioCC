import React, { useEffect, useRef } from "react";


const Ephemera = () => {

    const sidebar = useRef(null);

    useEffect(() => {
        if(sidebar.current){
                let parentHeight=sidebar.current.parentElement.offsetHeight;
                let sidebarHeight = sidebar.current.offsetHeight;

                console.log(parentHeight + ", " + sidebarHeight);

                /*  while(parentHeight > sidebarHeight){
                   sidebar.current.style.fontSize = parseInt(sidebar.current.style.fontSize) + 1;
                   sidebarHeight = sidebar.current.offsetHeight;
                }  */
        }

    },[sidebar.current]);

    return(
        <main className="lander absolute w-screen h-screen overflow-hidden flex py-24">
            <div style={{fontSize: "2rem"}} className="w-1/6 flex flex-col text-white text-center ">
                <div  ref={sidebar} className="flex  flex-grow flex-col w-full">
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">OBJECT</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">TRANSIENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">BEING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">FEELING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">SILENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">REMINDER</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                </div>

                <div className="flex-1">
                    <h1 className="flex-1">HOME</h1>
                </div>

            </div>

            <div className="w-2/3 border-2 border-white">

            </div>

            <div style={{fontSize: "2rem"}} className="w-1/6 flex flex-col text-white text-center ">
                <div  ref={sidebar} className="flex  flex-grow flex-col w-full">
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">OBJECT</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">TRANSIENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">BEING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">FEELING</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">SILENCE</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                    <h1 className="flex-1">REMINDER</h1>
                    <h1 className="flex-1">EPHEMERA</h1>
                </div>

                <div className="flex-1">
                    <h1 className="flex-1">SEE ALL</h1>
                </div>

            </div>

        </main>
    );
};

export default Ephemera;
