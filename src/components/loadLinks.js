import importAll from "./../utils/importAll.js";
import axios from "axios";
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

    console.log("LINKS: " + test);
    
    let linkEls = test.getElementsByTagName("link");
    console.log(linkEls)
    let links = [];
    
    for(let l of linkEls){
        links.push(l.innerHTML);
    }
    

    return links

}

const loadLinks = () => {
    const file = importAll(require.context('./../data/Links', false, /\.xml/));
    let reactTree = [];
    let previews= [];
    let test = [];

    console.log(file)

    return fetchData(file[0].default);
}

export default loadLinks;

    
