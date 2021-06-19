import React from "react";
import {Helmet} from "react-helmet";
import  image  from "./../res/static/urlImage.jpg"

const Head = () => {
    const title = "Christian Carlson";
	const description = "an ocean of elegance, a mountain of pleasure";
	const tags = "portfolio objects discursive contact";
	const type = "video.movie";

    return (
    <Helmet>
        <title>{title}</title>
		<meta charset="utf-8" />
		<meta name="description" content={description} />
		<meta name="author" content={title} />
		<meta name="keywords" content={tags} />
 
		<meta property="og:title" content={title} />
		<meta property="og:type" content={type} />
		<meta property="og:url" content="" />
		<meta property="og:image" content={ image } />
 
		<link rel="canonical" href="" />
    </Helmet>
    );
};

export default Head