import importAll from "./importAll";

const preloadAllAssets = () => {
    const imgs = importAll(require.context('./../res/', true, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
    const imgTree = []

    imgs.forEach((img) => {
        console.log(img);
        const newImage = new Image();
        newImage.src = img.default;
        imgTree.push(newImage);
    })
}

export default preloadAllAssets;