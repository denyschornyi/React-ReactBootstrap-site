import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from './components/Navibar';
import {Home} from './components/Home';
import {Users} from './components/Users';
import {About} from './components/About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
      <Router>
        <Navibar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    );
}

export default App;
