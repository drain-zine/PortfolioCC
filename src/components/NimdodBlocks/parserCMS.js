
import parseView from './parseView';
import parseXML from './parseXML';

const parseCMS = (content) => {
    let reactTree = parseView(content.getElementsByTagName("post")[0]); 
    console.log(reactTree);

    return reactTree;
}

export default parseCMS;