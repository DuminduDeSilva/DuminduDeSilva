import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import Iframe from 'react-iframe'
import {Fade} from "react-reveal";

// import url from './background/index.html'
function App() {
  return (
    <div>
    <Fade duration={1000}> 
      <Iframe url='http://localhost/background/'
        width="100%"
        frameBorder={0}
        height="100%"
        display="initial"
        position="fixed"
        />
      </Fade>
      <Main/>
    </div>
  );
}

export default App;
