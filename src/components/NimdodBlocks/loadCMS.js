
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

    for(let i = 0; i < files.length; i++){
        console.log(files[i]);
        reactTree.push(fetchData(files[i].default));
    }

    return reactTree;
}

export default loadCMS;