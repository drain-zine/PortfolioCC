import React from "react";

const Title = (props) => {

    return(
        <div className="header text-center flex-1 text-9xl">
            <h1>{props.title}</h1>
        </div> 
    );

};

export default Title;