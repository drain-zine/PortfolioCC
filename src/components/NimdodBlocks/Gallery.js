import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9]};
const Gallery = (props) => {

    // process children into imgs
    const imgs = props.children[0].replace(/[\n\s\"]+/g,"").split(",");
   
    const size = (imgs.length === 1 ? 100 : 100/(imgs.length+1));
    
    return(
        <div className="imgContainer w-full justify-between flex flex-row block">
            {imgs.map((img) => (
                <motion.img 
                    style={{width: size+"%"}} 
                    className="mx-4" 
                    src={require("../../data/assets/" + img).default} 
                    transition={transition}
                    whileHover={{scale: 1.1}}
                />
            ))}
        </div>
    );
};

export default Gallery;