import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from "./views/Home.js";
import Works from './views/Works.js';
import Nimdods from './views/Nimdods.js';
import Ephemera from './views/Ephemera.js';
import LoadingScreen from "./views/LoadingScreen.js"

import loadCMS from './components/NimdodBlocks/loadCMS';
import loadImgTree from './components/Ephemera/loadImgTree';

import ReactDOM from "react-dom";
import RouteTransition from './components/animations/RouteTransition';
import RouteTransitionSlide from './components/animations/RouteTransitionSlide';
import { AnimatePresence } from 'framer-motion';
import Contact from './views/Contact.js';
import preloadAllAssets from "./utils/preloadAllAssets";
import timer from "./utils/timer";

function App() {
  const [CMSTree, setCMSTree] = useState(null);
  const [previews, setPreviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgTree, setImgTree] = useState(null);

  const [locationState, setLocationState] = useState(null);
  const [prevLocationState, setPrevLocationState] = useState(null);

  // util function for CMS return sanitising
  const combineKeyData = (data) => {
    var output = {}, item;
    for (var i = 0; i < data.length; i++) {
        item = data[i];
        for (var prop in item) {
            if (item.hasOwnProperty(prop)) {
                if (!(prop in output)) {
                    output[prop] = [];
                }
                output[prop].push(item[prop]);
            }
        }
    }
    return output;
  }

   // inject data into state
  useEffect(() => {
    const injectData = async() => {
      await Promise.all(loadCMS()).then((data) => {
          /* setCMSTree(data["trees"]);
          setPreviews(data["previews"]); */

          let combined_data = combineKeyData(data);
          setCMSTree(combined_data["tree"]);
          setPreviews(combined_data["preview"])
          
      });

      let data = await loadImgTree();
      
      setImgTree(data);
     // await preloadAllAssets();

      await timer(10000);
      setLoading(false);
    }

    injectData();
  }, []);

  // destroy epherma canvas on route change
  useEffect(async() => {
    console.log(locationState);
    if(locationState != (undefined || null)){ // catch loading splash
      if(locationState.pathname == "/ephemera"){
        setPrevLocationState(locationState.pathname);
      }else if(locationState.pathname != "/ephemera"){
        if(prevLocationState == "/ephemera"){
          console.log("arriverdeci")
          let canvas = document.getElementsByTagName("canvas")[0];
          

          canvas.classList.remove("fadeIn");
          canvas.classList.add("fadeOutFast"); 

          await timer(500);
          canvas.remove();
          setPrevLocationState(locationState.pathname);
        }
      }
    }
  }, [locationState]);
  // update DOM
  useEffect(() => {
      if(!loading && CMSTree){
          /* ReactDOM.render(CMSTree, document.getElementById('stagingArea'));  */
      }
  }, [loading, CMSTree]);


  return (
   
    <Router>
      <div className="App">
      { loading ? <LoadingScreen />: (
        <Route render={({location}) => {
          { setLocationState(location)}
          return(
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <RouteTransitionSlide path="/" exact slideIn={"100%"} slideOut={"-100%"} duration={0.5}><Home/></RouteTransitionSlide>
                <RouteTransition path="/works" exact slide={"-50%"}  slideUp={0}><Works previews={previews} loading={loading} /></RouteTransition>
                <RouteTransition path="/nimdods-never-ending-scroll"><Nimdods CMSTree={CMSTree} loading={loading} /></RouteTransition>
                <RouteTransition path="/ephemera"><Ephemera imgTree={imgTree}/></RouteTransition>
                <RouteTransition path="/contact" exact ><Contact/></RouteTransition>
              </Switch>
            </AnimatePresence>
                                  
          );

        }}/> )}
      </div>
    </Router> 
  );
}

export default App;
