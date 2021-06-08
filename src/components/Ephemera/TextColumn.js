import React from "react";
import {Link} from "react-router-dom";

const TextColumn = (props) => (
        <div style={{fontSize: "1.7vw"}} className="w-1/6 flex flex-col text-white text-center ">
                <div  className="flex  flex-grow flex-col w-full">
 

                    {props.column.map((s) => (
                        <h1 className="flex-1">{s}</h1>
                    ))}
                </div>

                <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "5%"}} className="flex-1 relative border-t-2 border-white">
                    <Link to="/"><h1 style={{bottom: "-21%"}} className="flex-1 absolute left-1/2 transform -translate-x-1/2">{props.button}</h1></Link>
                </div>

        </div>
);

export default TextColumn;
