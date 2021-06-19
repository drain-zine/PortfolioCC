import importAll from "./importAll";

/* const preloadImage = ( name ) => {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        alert("image is loaded");
        var index = name.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                name.splice(index, 1);
            }
      };

      img.src = name;
    });
  }; */

  function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    console.log("In func, detected: " + array.length + " images")
    array.forEach((i) => {
      var img = new Image();
      console.log(i);
      list.push(img);
      img.src = i.default;
      img.onload = function() {
          console.log("Loaded: " + img.src);
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
            
        }
    });
}


const preloadAllAssets = async() => {
    const imgs = importAll(require.context('./../res/', true, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
    const imgTree = []
    const loadingPromises = []
    console.log("In preload images")
    preloadImages(imgs);
   /*  imgs.forEach((img) => {
        loadingPromises.push(preloadImage(img));
    }) */

    await Promise.all(loadingPromises);
}

export default preloadAllAssets;