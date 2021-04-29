import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from "./views/Home.js";
import Works from './views/Works.js';
import Nimdods from './views/Nimdods.js';

import loadCMS from './components/NimdodBlocks/loadCMS';
import ReactDOM from "react-dom";

function App() {
  const [CMSTree, setCMSTree] = useState(null);
  const [loading, setLoading] = useState(true);

   // inject data into state
  useEffect(() => {
    const injectData = async() => {


        Promise.all(loadCMS()).then((data) => {
            setCMSTree(data);
            setLoading(false);
        });


    }

    injectData();
  }, []);

  // update DOM
  useEffect(() => {
      if(!loading && CMSTree){
          ReactDOM.render(CMSTree, document.getElementById('stagingArea')); 
      }
  }, [loading, CMSTree]);

  return (
    <Router>
      <div className="App">
        <Route render={({location}) => {

          return(
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/works" exact component={Works} />
              <Route path="/nimdods-never-ending-scroll" exact component={Nimdods} CMSTree={CMSTree} />
            </Switch>
          );

        }}/>
      </div>
    </Router>
  );
}

export default App;
