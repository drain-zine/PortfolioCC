import React from "react";

const Button = (props) => {

    return(
        <div className="mt-8 w-full text-center border-t-2 border-b-2 hover:border-l-2 hover:border-r-2 border-white py-16 px-4">
            <p className="text-6xl">{props.children}<span className="text-red-900">{props.link}</span></p>
            <p className="text-red-900 text-center mt-4 text-4xl">{props.subtitle}</p>
        </div>
    );
};

Button.defaultProps = {
    link: "",
    subtitle: ""
};

export default Button;