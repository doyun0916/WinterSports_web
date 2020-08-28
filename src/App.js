import React from 'react';
import Hello from './Hello';
import Kak from './Kak';
import Users from './Users';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import Main from "./components/Main";
import oc from 'open-color';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = createGlobalStyle`
    body {
        background: ${oc.gray[1]};
    }
`;

function App() {
  return (
    <>
     created () {
        AOS.init()
     },
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
