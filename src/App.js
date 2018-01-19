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

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() =>
        this.setState((prevState, props) => ({
          books: prevState.books.map(b => {
            if (b.id === book.id) {
              b.shelf = shelf;
            }
            return b;
          }).filter(b => b.shelf !== "none")
        })))
      .catch(response => console.error(`Unable to set shelf for ${book.id} to ${shelf}`, response));
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState(() => ({ books })))
      .catch(response => console.error("Unable to get booklist from server", response));
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ShelvesPage books={this.state.books} moveBook={this.moveBook} />} />
        <Route path="/search" render={() => <SearchPage books={this.state.books} moveBook={this.moveBook} />} />
      </div>
    );
  }
}

export default BooksApp;
