import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import Add from './component/AddTutorial';
import TList from './component/TutorialsList';

const App = () => {
  return (
  <>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
         SimpleRecord
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={"/tutorials"} className="nav-link">
              List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/add"} className="nav-link">
              Add
            </NavLink>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <h2>Do it here.</h2>
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TList} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </div>
    </div>
  </>
    
  );
};

export default App;
