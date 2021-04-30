import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'




const RouteTransition = ({exact, path, slide, slideUp, children, ...rest}) => (
  <Route exact={exact} path={path} {...rest}>

    <motion.div
        exit={{ opacity: 0}}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 1, staggerChildren: 1.5}}
    >
        {children}
    </motion.div>
    
  </Route>
)

export default RouteTransition;

