import React from "react";

const QuoteBox = (props) => {

    const {quotes} = props;

    return(
        <div className="mt-8 border-t-2 w-full text-center border-b-2 border-white py-16 px-24">
            {quotes.map((quote) => (
                <p className={"text-7xl my-10 text-" + quote.colour + "-900"}>{quote.quote}</p>
            ))}
        </div>
    );
};

export default QuoteBox;