import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar/Navbar"
import Saved from "./pages/Saved/Saved"
import Search from "./pages/Search/Search"
import './App.css';


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/Saved" component={Saved} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
