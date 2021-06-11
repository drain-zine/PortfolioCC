import React from "react-dom";
import importAll from "./../../utils/importAll";

const loadImgTree = () => {
    const imgs = importAll(require.context('./../../data/Ephemera', false, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
    const imgTree = []

    imgs.forEach((img) => {
        console.log(img);
        const newImage = new Image();
        newImage.src = img.default;
        imgTree.push(newImage);
    })

    return imgTree;
}

export default loadImgTree;