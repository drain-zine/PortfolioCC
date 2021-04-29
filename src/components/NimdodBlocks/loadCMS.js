
import parseCMS from './parserCMS';
import axios from "axios";

function importAll(r) {
    return r.keys().map(r);
}

const fetchData = async(url) => {
    let test = await axios.get(url, {
        "Content-Type": "application/xml; charset=utf-8"
    })
    .then(response => response.data)
    .then(str =>  (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
        return data;
    });

    console.log("TEST: " + test);
    
    
    let root = test.getElementsByTagName("post")[0];
    for(let i = 0; i < root.children.length; i++){
        console.log("FOUND NODE: " + root.children[i].tagName);
    }

    return parseCMS(test);
}

const loadCMS = () => {
    const files = importAll(require.context('./../../data/Nimdods', false, /\.xml/));
    let reactTree = [];
    let previews= [];

    for(let i = 0; i < files.length; i++){
        console.log(files[i]);
        let content = fetchData(files[i].default);
        reactTree.push(content["tree"]);
        previews.push(content["preview"]);
        console.log(content);
    }

    return {"trees": reactTree, "previews": previews};
}

export default loadCMS;