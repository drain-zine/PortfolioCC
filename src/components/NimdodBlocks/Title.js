import React from "react";

const Title = (props) => {

    return(
        <div className="header text-center flex-1 text-9xl my-8">
            <h1>{props.children}</h1>
        </div> 
    );

};

export default Title;