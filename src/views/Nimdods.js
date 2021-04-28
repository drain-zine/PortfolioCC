
import React, { useState, useEffect} from "react"
import CursorDot from "../components/CursorDot";
import XMLData from '../data/Nimdods/Weed.xml';
import XMLToReact from '@condenast/xml-to-react';
import ReactDOM from 'react-dom';
import parseCMS from '../components/NimdodBlocks/parserCMS';

/* import NimdodsTile from "./../components/NimdodsTile"; */
import BackgroundScrollTransistion from './../components/animations/BackgroundScrollTransistion'
import ScrollableLine from './../components/ScrollableLine';
import axios from "axios";

import Title from './../components/NimdodBlocks/Title.js';
import TextBox from './../components/NimdodBlocks/TextBox.js';
import Button from './../components/NimdodBlocks/Button.js';
import Gallery from './../components/NimdodBlocks/Gallery.js';
import QuoteBox from './../components/NimdodBlocks/QuoteBox.js';
import { parse } from "postcss";

const Nimdods = () => {

    const [loading, setLoading] = useState(true);
    const [XMLMap, setXMLMap] = useState({});
    const [reactTree, setReactTree] = useState(null);

    const xmlToReact = new XMLToReact({
        post: (attrs) => ({type: 'div', props: attrs}),
        title: (attrs) => ({ type: Title, props: attrs }),
        textbox: (attrs) => ({ type: TextBox, props: attrs }),
        button: (attrs) => ({ type: Button, props: attrs })
    });

      // animate lines
    useEffect(() => {
        const paths = document.getElementsByClassName("line-path-test");

        // vars for upward scrolling behaviour
        var lastScrollTop = 0;

        // pre specify this -> allows us to address values
        var lastDrawLengths = new Array(paths.length).fill(0);
        console.log(lastDrawLengths[0]);

        // scroll event handler
        const animatePaths = () => {
            var drawLength = 0;
            var st = window.pageYOffset || document.documentElement.scrollTop;
            // check if scrolling down
            if(st >= lastScrollTop){
                // handle drawing of each path  
                for(let i = 0; i < paths.length; i++){
                    let pathLength = paths[i].getTotalLength();
                    drawLength = pathLength * ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
                    console.log("TEST: " + drawLength);
                    // only apply if scrolling down, and if beyond current line
                    /* console.log("draw: " + drawLength + " last: " + lastDrawLengths[i]); */
                    if(drawLength >= lastDrawLengths[i]){
                    /*  console.log("path: " + pathLength + " draw: " + drawLength); */
                        paths[i].style.strokeDashoffset = pathLength - drawLength;
                    
                        // update last draw lengths
                        lastDrawLengths[i] = drawLength;
                    }
                }
            }
            // update lastScrollTop
            lastScrollTop = st;
        }  

        window.addEventListener('scroll', animatePaths, false);
        
        return function cleanup() {
            window.removeEventListener('scroll', animatePaths, false);
        };

    }, []);

    useEffect(() => {
        const fetchData = async() => {
            let test = await axios.get(XMLData, {
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

            setXMLMap(test);
            setLoading(false);
            ReactDOM.render(parseCMS(test), document.getElementById('Weed'));
            

        }

        fetchData();
        /* console.log("DEMO : " + demo.data); */
    }, []);


    return(
        <main className="cursor-none relative flex flex-col primary-font-stack bg-color primary-font-color select-none px-10">
           {/* <ScrollableLine fontColor={"white"} /> */}
            {/* header */}
            <header className="w-full flex justify-center flex-initial my-10 border-b-2 border-t-2 border-white">
                <div className="text-center py-16">
                    <h1 className="flex-1 text-9xl"><b>Nimdod's Never Ending Scroll</b></h1>
                </div>
            </header>

            {/* tiles */}
            <div className="nimdodsCanvas w-full flex-grow px-16 mb-96">
               {/*  {data.map((work) => (

                   <WorkTile data={work} incrementTogglesCounter={incrementTogglesCounter} decrementTogglesCounter={decrementTogglesCounter}/>

                    ))} */}

                { loading ? <p className="text-white">LOADING</p> :  (
                    
                        <div id="Weed" className="w-full justify-center items-center flex flex-col mt-16">
                        </div>
                    ) 

                    
                }

                {/* <div id="Weed" className="w-full justify-center items-center flex flex-col mt-16">
                    <Title title={"Weed"} />
                    <div className="body my-16 text-center w-full">
                        <TextBox content={"Jabari Shelton (born December 23, 1991 in Harlem, New York City), is an American streetwear designer and entrepreneur better known as ASAP Bari (stylized as A$AP Bari). Bari is best known as a co-founding member of the New York hip-hop collective ASAP Mob, a group he helped form in 2006 alongside ASAP Yams, ASAP Kham and ASAP Illz.[1] He is also a co-founder of the streetwear clothing label VLONE.[2] In 2019 he was convicted of sexual assault.[3][4]"} />
                        <Button title={"Read More Of My Analysis at"} link={"highsnobiety.com"} subtitle={"2021"} />
                    </div>
                </div>

                <div id="Swag" className="w-full justify-center items-center flex flex-col mt-16">
                    <Title title={"Swag"} />
                    <div className="body my-16 text-center w-full">
                        <TextBox content={"Following the success of ASAP Mob, fellow member Kamoni Chandler, also known as A$AP K, founded the streetwear label VLONE in 2011. Shelton, who had previously been the head of A$AP Rocky's merchandise during his tours,[2] worked together with Chandler on the brand. After a falling out Chandler left the brand and Shelton took over. Shelton brought in Edison Chen of CLOT, who handles the design work of the label. He stated in an interview with Mass Appeal that much of his influence came from trying on and stealing clothes with his friends while living in Harlem, feeling the fabrics of high-value brands.[5]"} />
                        <Gallery imgs={["static/swag1.jpg", "static/swag2.jpg", "static/swag3.jpg"]} />
                    </div>
                    <Button title={"Radicalising and Democratizing Swag"} subtitle={"2069"} />
                </div>

                <div id="Yu-gi-oh" className="w-full justify-center items-center flex flex-col mt-16">
                    <Title title={"Yu-gi-oh"} />

                    <div className="body my-16 text-center w-full">
                        <QuoteBox quotes={[{quote: "EXODIA", colour: "red"}, {quote: "MAGICIAN", colour: "yellow"}, {quote: "AVARICE", colour: "blue"}, {quote: "BLUE-EYES", colour: "green"}]} />
                    </div>
                </div> */}
            </div>

            {/* footer */}
            <CursorDot />
        </main>
        
    );
}

export default Nimdods;