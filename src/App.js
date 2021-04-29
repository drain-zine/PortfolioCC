import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from "./views/Home.js";
import Works from './views/Works.js';
import Nimdods from './views/Nimdods.js';

import loadCMS from './components/NimdodBlocks/loadCMS';
import ReactDOM from "react-dom";

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
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/works" exact component={() => (<Works previews={previews} loading={loading} />)}/>
              <Route path="/nimdods-never-ending-scroll" exact component={() => (<Nimdods CMSTree={CMSTree} loading={loading} />)} />
            </Switch>
          );

        }}/>
      </div>
    </Router>
  );
}

export default App;
