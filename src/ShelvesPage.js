import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";
import * as Tags from "./util/tags.js";

class ShelvesPage extends React.Component {
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
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Tags.shelfNames.map(({ name, tag }) => (
            <Bookshelf
              key={tag}
              shelfName={name}
              moveBook={this.moveBook}
              books={this.state.books.filter(book => tag === book.shelf)}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search" className="close-search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default ShelvesPage;
