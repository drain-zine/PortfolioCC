import React from "react";

const QuoteBox = (props) => {

    const quotes = props.children[0].replace(/[\n\"]+/g,"").split(",");

    return(
        <div className="block border-t-2 w-full text-center border-b-2 border-white py-16">
            {quotes.map((quote) => (
                <p className={"text-7xl my-10 text-" + quote.split(":")[0].replace(/[\n\s\"]+/g,"") + "-900"}>{quote.split(":")[1]}</p>
            ))}
        </div>
    );
};

export default QuoteBox;