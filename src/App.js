import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, SearchMovie, Favorite } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchMovie />
          </Route>
          <Route exact path="/favorites">
            <Favorite />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
