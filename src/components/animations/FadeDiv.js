import { motion } from 'framer-motion'

const transition = {duration: 2, staggerChildren: 0.5};
const variants = {
    fadeIn: { opacity: 1},
    fadeOut: { opacity: 0},
}

const FadeInDiv = (props) => (
    <motion.div

        animate = {props.trigger ? 'fadeIn' : 'fadeOut'}
        variants={variants}
        transition={transition}
        className={props.className}
        style={props.style}
        onDoubleClick={props.onDoubleClick}
        id={props.id}

    
    >
        {props.children}
    </motion.div>
);

export default FadeInDiv