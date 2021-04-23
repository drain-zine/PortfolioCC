import React from "react";

const TextBox = (props) => {

    return(
        <div className="mb-16">
            <p className="text-6xl">{props.content}</p>
        </div>
    );

};

export default TextBox;