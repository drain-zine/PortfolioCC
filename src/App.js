import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from "./views/Home.js";
import Works from './views/Works.js';
import Nimdods from './views/Nimdods.js';
import Ephemera from './views/Ephemera.js';
import LoadingScreen from "./views/LoadingScreen.js"

import loadCMS from './components/NimdodBlocks/loadCMS';
import loadImgTree from './components/Ephemera/loadImgTree';
import loadLinks from './components/loadLinks';

import ReactDOM from "react-dom";
import RouteTransition from './components/animations/RouteTransition';
import RouteTransitionSlide from './components/animations/RouteTransitionSlide';
import { AnimatePresence } from 'framer-motion';
import Contact from './views/Contact.js';
import preloadAllAssets from "./utils/preloadAllAssets";
import timer from "./utils/timer";
import Links from './views/Links.js';

function App() {
  const [CMSTree, setCMSTree] = useState(null);
  const [links, setLinks] = useState(null);
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
      let tempLinks = await loadLinks();
      setLinks(tempLinks)
      
      setImgTree(data);
     await preloadAllAssets();

      await timer(10000);
      setLoading(false);
    }

    injectData();
  }, []);

 
  // update DOM
  useEffect(() => {
      if(!loading && CMSTree){
          /* ReactDOM.render(CMSTree, document.getElementById('stagingArea'));  */
      }
  }, [loading, CMSTree]);


  return (
   
    <Router>
      <div className="App cursor-none">
      { loading ? <LoadingScreen />: (
        <Route render={({location}) => {
          { setLocationState(location)}
          return(
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <RouteTransition path="/" exact slideIn={"100%"} ><Home/></RouteTransition>
                <RouteTransition path="/works" exact slide={"-50%"}><Works previews={previews} loading={loading} /></RouteTransition>
                <RouteTransition path="/nimdods-never-ending-scroll"><Nimdods CMSTree={CMSTree} loading={loading} /></RouteTransition>
                <RouteTransition path="/ephemera"><Ephemera imgTree={imgTree}/></RouteTransition>
                <RouteTransition path="/contact" exact ><Contact/></RouteTransition>
                <RouteTransition path="/links" exact ><Links links={links}/></RouteTransition>
              </Switch>
            </AnimatePresence>
                                  
          );

        }}/> )}
      </div>
    </Router> 
  );
}

export default App;
