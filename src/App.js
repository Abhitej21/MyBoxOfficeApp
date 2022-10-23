/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from "react" 
import {Route,Switch} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import Show from './Pages/Show'
import Home from './Pages/Home';
import Starred  from "./Pages/Starred";
import * as sw from "./Pages/serviceWorkerRegistration";

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  
  return (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="starred">
        <Starred/>
      </Route>
      <Route path="/show/:id">
        <Show/>
      </Route>
    </Switch>
    </ThemeProvider>
  );
}
sw.register();
export default App;
