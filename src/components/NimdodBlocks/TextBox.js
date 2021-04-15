import React from "react";

const TextBox = (props) => {

    return(
        <div className="body my-16 text-center">
            <p className="text-6xl">{props.content}</p>
        </div>
    );

};

export default TextBox;