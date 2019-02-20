import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar/Navbar"
import Saved from "./pages/Saved/Saved"
import Search from "./pages/Search/Search"
import './App.css';
// import mongoose from "mongoose"


// var db = require("../models/Book");


// mongoose.connect("mongodb://localhost/NYT-books", { useNewUrlParser: true })

// db.Booklist.create({ name: "Book List"})
// .then(function(dbBooklist){
//   console.log("DB created")
// })


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
