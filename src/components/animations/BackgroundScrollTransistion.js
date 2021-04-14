import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";



const variants = {
    out: { y: "100%" },
    in: { y: "0%"}
}

const transition = {
    duration: 0.3, 
    transition: "spring" 
}

const BackgroundScrollTransistion = ({ children, className, trigger}) => {

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