import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage";
import ShelvesPage from "./ShelvesPage";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ShelvesPage} />
        <Route path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
