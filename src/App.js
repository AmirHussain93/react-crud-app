import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Header from './components/Header/header';
import Employees from './components/Employees/employees';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/employees' />
          </Route>
          <Route exact path='/employees' component={Employees} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
