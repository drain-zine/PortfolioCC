
import parseView from './parseView';

const parseCMS = (content) => {
    let reactTree = parseView(content.getElementsByTagName("post")[0]); 
    
    let preview = content.getElementsByTagName("preview")[0];
    let tile = {title: preview.getElementsByTagName("title")[0].textContent , img: preview.getElementsByTagName("image")[0].attributes["src"].value, blurb: preview.getElementsByTagName("blurb")[0].textContent.replace(/[\n\"]+/g,"")};
    
    return {"tree": reactTree, "preview": tile};
}

export default parseCMS;