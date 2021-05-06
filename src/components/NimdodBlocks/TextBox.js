import React, { useEffect } from "react";
import ReactMarkdown from 'react-markdown'

const TextBox = (props) => {

    return(
        <div className="block text-6xl">
            <ReactMarkdown>{props.children[0].trim()}</ReactMarkdown>
        </div>
    );

};

export default TextBox;