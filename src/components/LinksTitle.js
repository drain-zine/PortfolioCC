import React from "react";


const LinksTitle = ({screenHeight}) => (
        <div className="mx-auto text-9xl relative text-white" style={{height: `${screenHeight}px`}}>
            <div className="absolute top-1/2" style={{transform: "translate(-150%,-50%)"}}>
                <p>L</p>
                <p style={{transform: "translate(50%,0%)"}}>I</p>
                <p style={{transform: "translate(100%,-75%)"}}>N</p>
                <p style={{transform: "translate(25%, -100%)"}}>K</p>
                <p style={{transform: "translate(100%,-125%)"}}>S</p>
            </div>
        </div>
);

export default LinksTitle;
