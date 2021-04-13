import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import EmployeeList from './components/EmployeeList';
import Employee from './components/Employee';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/employees' data-test="appHeader"/>
          </Route>
          <Route exact path='/employees' component={EmployeeList} />
          <Route exact path='/employee/new' component={Employee} />
          <Route exact path='/employee/:id' component={Employee} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
