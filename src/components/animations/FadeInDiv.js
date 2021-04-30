import { motion } from 'framer-motion'

const transition = {duration: 2};

const FadeInDiv = (props) => (
    <motion.div
        exit = {{ opacity: 0}}
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={transition}
        className={props.className}
        style={props.style}
        onDoubleClick={props.onDoubleClick}
    
    >
        {props.children}
    </motion.div>
);

export default FadeInDiv