import React from 'react';
import Hello from './Hello';
import Kak from './Kak';
import Users from './Users';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import styled from "styled-components";
import {shadow} from "./lib/styleUtils";
import Main from "./components/Main";
import oc from 'open-color';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = createGlobalStyle`
    body {
        background: linear-gradient(to right, ${oc.grape[7]}, ${oc.violet[7]}, ${oc.indigo[3]}, ${oc.cyan[4]});
    }
`;

function App() {
  return (
    <>
      <Page />
      <div>
          <Main />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/hello" exact={true} component={Hello} />
          <Route path="/kak" exact={true} component={Kak}/>
          <Route path="/users" exact={true} component={Users}/>
          <Route path="/history" exact={true} component={HistorySample} />
      </div>
    </>
  );
}

export default App;
