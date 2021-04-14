import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";




const BackgroundScrollTransistion = ({ children, className, trigger, up=true}) => {

    
const variants = {
    out: { y: up ? "100%" : "-100%"},
    in: { y: "0%"}
}

const transition = {
    duration: 0.3, 
    transition: "spring" 
}

  return (
    <motion.div
      className={className}
      animate={trigger ? 'in' : 'out'}
      initial="out"
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default  BackgroundScrollTransistion;