import React from "react";

const TextBox = (props) => {

    return(
        <div className="block">
            <p className="text-6xl">{props.children}</p>
        </div>
    );

};

export default TextBox;