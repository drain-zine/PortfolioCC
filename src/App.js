import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from "./views/Home.js";
import Works from './views/Works.js';
import Nimdods from './views/Nimdods.js';

import loadCMS from './components/NimdodBlocks/loadCMS';
import ReactDOM from "react-dom";
import RouteTransition from './components/animations/RouteTransition';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [CMSTree, setCMSTree] = useState(null);
  const [previews, setPreviews] = useState(null);
  const [loading, setLoading] = useState(true);

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
      Promise.all(loadCMS()).then((data) => {
          /* setCMSTree(data["trees"]);
          setPreviews(data["previews"]); */

          let combined_data = combineKeyData(data);
          setCMSTree(combined_data["tree"]);
          setPreviews(combined_data["preview"])
          setLoading(false);
      });
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
      <div className="App">
        <Route render={({location}) => {

          return(
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <RouteTransition path="/" exact slide={"100%"} slideUp={0}><Home/></RouteTransition>
                <RouteTransition path="/works" exact slide={"-50%"}  slideUp={0}><Works previews={previews} loading={loading} /></RouteTransition>
                <RouteTransition path="/nimdods-never-ending-scroll"><Nimdods CMSTree={CMSTree} loading={loading} /></RouteTransition>
              </Switch>
            </AnimatePresence>
          );

        }}/>
      </div>
    </Router>
  );
}

export default App;
