import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./views/Home.js";
import Works from './views/Works.js';
import Nimdods from './views/Nimdods.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route render={({location}) => {

          return(
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/works" exact component={Works} />
              <Route path="/nimdods-never-ending-scroll" exact component={Nimdods} />
            </Switch>
          );

        }}/>
      </div>
    </Router>
  );
}

export default App;
