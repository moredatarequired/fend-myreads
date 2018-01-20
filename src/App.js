import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import ShelvesPage from "./ShelvesPage";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  refreshBooklist() {
    return BooksAPI.getAll()
      .then(books => this.setState(() => ({ books })))
      .catch(response => console.error("Unable to get booklist from server", response));
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(response => this.refreshBooklist())
      .catch(response => console.error(`Unable to set shelf for ${book.id} to ${shelf}`, response));
  }

  // Construct a map from book.id -> book.shelf.
  shelfmap() {
    return this.state.books.reduce((map, book) => {
      map[book.id] = book.shelf;
      return map;
    }, {});
  }

  componentDidMount() {
    this.refreshBooklist();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          <ShelvesPage books={this.state.books} moveBook={this.moveBook} />} />
        <Route path="/search" render={() =>
          <SearchPage shelfmap={this.shelfmap()} moveBook={this.moveBook} />} />
      </div>
    );
  }
}

export default BooksApp;
