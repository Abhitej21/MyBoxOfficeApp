import React from "react" 
import {Switch,Route} from 'react-router-dom'
import Show from "./Components/Show";
import Home from './Pages/Home'
import Starred  from "./Pages/Starred"

function App() {
  
  return (
  <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/starred">
    <Starred/>
    </Route>
    <Route exact path="/show/:id">
      <Show/>
    </Route>
    <Route>
      Page not found
    </Route>
  </Switch>
  );
}

export default App;
