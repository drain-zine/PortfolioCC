import React from "react";
import ReactMarkdown from "react-markdown";

const Column = (props) => {

    return(
        <div className="flex-1 text-3xl">
            <ReactMarkdown>{props.children[0].trim()}</ReactMarkdown>
        </div>
    );

};

export default Column;