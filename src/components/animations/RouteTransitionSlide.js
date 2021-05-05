import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'




const RouteTransitionSlide = ({exact, path, slideIn, slideOut, duration, children, ...rest}) => (
  <Route exact={exact} path={path} {...rest}>

    <motion.div
        exit={{ x: slideOut}}
        initial={{ x: slideIn}}
        animate={{ x: 0}}
        transition={{ duration: duration}}

    >
        {children}
    </motion.div>
    
  </Route>
)

export default RouteTransitionSlide;

