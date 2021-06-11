import importAll from "./importAll";

const preloadImage = ( name ) => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = name;
      img.onload = () => {
        store.dispatch(addSavedimage([name, img])); // <-- dispatch img element itself
        resolve();
      };
    });
  };


const preloadAllAssets = async() => {
    const imgs = importAll(require.context('./../res/', true, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
    const imgTree = []
    const loadingPromises = []

    imgs.forEach((img) => {
        loadingPromises.push(preloadImage(img));
    })

    await Promise.all(loadingPromises);
}

export default preloadAllAssets;