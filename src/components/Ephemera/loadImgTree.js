import React from "react-dom";

function importAll(r) {
    return r.keys().map(r);
}

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