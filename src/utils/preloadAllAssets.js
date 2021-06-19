import importAll from "./importAll";

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
    const loadingPromises = []
    console.log("In preload images")
    preloadImages(imgs);
    console.log("done");
}

export default preloadAllAssets;