import React from "react";
import Button from "./Button";
import Gallery from "./Gallery";
import QuoteBox from "./QuoteBox";
import TextBox from "./TextBox";
import Title from "./Title";
import TextColumns from "./TextColumns";
import Column from "./Column";
import FadeInDiv from "../animations/FadeInDiv";


const manifest = {
    title: Title,
    textbox: TextBox,
    button: Button,
    gallery: Gallery,
    quotebox: QuoteBox,
    textcol: TextColumns,
    col: Column,
    post: FadeInDiv
};

const parseView = (element, index) => {

    // catch either terminating children to send as child props or whitespace as null
    if (element.tagName === undefined) {
        
        if(!element.nodeValue.trim()){
            //console.log("NULL");
        }else{
            ////console.log("END OF TREE: " + element.nodeValue)
            return element.nodeValue;
        }
        
        return null;    
    } 


    // cross ref w manifest to get component
    let component = manifest[element.tagName];
    ////console.log("ele_name: " + element.tagName  +" COMPONENT: " + component);

    if (component) {
        let reactChildren = [];

        if (element.childNodes) {
            for(let i = 0; i < element.childNodes.length; i++){
                //console.log("CHILD " + i + " : " +element.childNodes[i]);
                reactChildren.push(parseView(element.childNodes[i], i));
            }
        }
        
        // grab attrs and turn into component props
        let props = Object.assign({},
            ...Array.from(element.attributes, ({name, value}) => ({[name]: value}))
        );

        // set post ID
        if(element.tagName === "post"){
            let post_id = element.getElementsByTagName("title")[0].textContent;
            props = {id: post_id.replace(/[\n\s\"]+/g,""), className: "w-full justify-center items-center flex flex-col mt-16"}; 
          
        } 
        
        props.key = index;
        return React.createElement(component, props, reactChildren); 
    }

    return null;
}

export default parseView;