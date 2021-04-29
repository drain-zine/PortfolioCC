import React from "react";

const Column = (props) => {

    return(
        <div className="flex-1 text-3xl">
            {props.children}
        </div>
    );

};

export default Column;