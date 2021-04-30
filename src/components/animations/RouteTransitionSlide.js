import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'




const RouteTransitionSlide = ({exact, path, slide, slideUp, children, ...rest}) => (
  <Route exact={exact} path={path} {...rest}>

    <motion.div
        exit={{ x: "-100%"}}
        initial={{ x: "100%"}}
        animate={{ x: 0}}
        transition={{ duration: 0.5 }}

    >
        {children}
    </motion.div>
    
  </Route>
)

export default RouteTransitionSlide;

