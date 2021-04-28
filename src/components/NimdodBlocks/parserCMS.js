
import parseView from './parseView';
import parseXML from './parseXML';

const parseCMS = (content) => {
    /* let clean_XML = parseXML(content)
    .then(data => {
        for(var property in data) {
            console.log(property + "=" + data[property]);
        }

        console.log("DATA: " + data.data.getElementsByTagName("post"));
        parseView(data);
    }) */

    console.log("document: " + content.getElementsByTagName("post")[0]);
    let reactTree = parseView(content.getElementsByTagName("post")[0]); 
    console.log(reactTree);

    return reactTree;
}

export default parseCMS;