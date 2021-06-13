import React from "react";
import  { Link } from "react-router-dom";

const NavButton = (props) => {
    return <Link style={props.style} to={props.to} className={props.className}>{props.children}</Link>
};

export default NavButton;