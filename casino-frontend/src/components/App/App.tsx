import React from 'react';
import './App.scss';
import { Menu } from '../Menu/Menu';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Exercise1 } from '../../pages/Exercise1/Exercise1';

function App() {
  return (
    <>
      <div className="App">
        <Menu />
      </div>
      <Switch>
        <Route exact path="/Exercise1">
          <Exercise1 />
        </Route>
        <Route path="/Exercise2">
        </Route>
        <Route path="/Exercise3">
        </Route>
        <Route path="/Exercise4">
        </Route>
      </Switch>
    </>
  );
}

export default App;
