import React from "react";

const TextColumns= (props) => {

    return(
        <div className="textColumn block flex flex-row w-full">
            {props.children}
        </div>
    );

};

export default TextColumns;