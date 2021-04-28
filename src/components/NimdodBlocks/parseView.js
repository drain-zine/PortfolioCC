import React from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import Title from "./Title";


const manifest = {
    title: Title,
    textbox: TextBox,
    button: Button,
    post: 'div'
};

const parseView = (element, index) => {

     if (element.tagName === undefined) {
        
        if(!element.nodeValue.trim()){
            console.log("NULL");
        }else{
            console.log("END OF TREE: " + element.nodeValue)
            return element.nodeValue;
        }
        
        return null;    
    } 

    // cross ref w manifest to get component
    let component = manifest[element.tagName];
    console.log("ele_name: " + element.tagName  +" COMPONENT: " + component);

    if (component) {

        let reactChildren = [];
        const map= f => x => Array.prototype.map.call(x, f);

        if (element.childNodes) {
            for(let i = 0; i < element.childNodes.length; i++){
                console.log("CHILD " + i + " : " +element.childNodes[i]);
                reactChildren.push(parseView(element.childNodes[i], i));
            }
        }
        
        // grab attrs and turn into component props
        let props = Object.assign({},
            ...Array.from(element.attributes, ({name, value}) => ({[name]: value}))
        );

        if(element.tagName === "post"){
            props = {id: "Weed", className="w-full justify-center items-center flex flex-col mt-16"};
        }

        console.log(props);

        props.key = index;
        return React.createElement(component, props, reactChildren); 
    }

    return null;
}

export default parseView;