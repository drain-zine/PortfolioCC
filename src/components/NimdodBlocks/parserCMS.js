
import parseView from './parseView';

const parseCMS = (content) => {
    let reactTree = parseView(content.getElementsByTagName("post")[0]); 
    return reactTree;
}

export default parseCMS;