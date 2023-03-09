import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import './assets/scss/global.scss' 
import './App.css';

import { AppLogin } from './views/AppLogin';
import {Dashboard} from './views/Dashboards'

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            {/* <Route path="/solution" component={MySolution} /> */}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={AppLogin} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
