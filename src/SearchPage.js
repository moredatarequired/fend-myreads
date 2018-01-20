import React from 'react'
import { Link } from 'react-router-dom'
import Book from "./Book.js";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = {
    books: []
  };

  newSearch(event) {
    BooksAPI.search(event.target.value)
      .then(books => !books || books.error ? [] : books)
      .then(books => {
        books.forEach(book => book.shelf = this.props.shelfmap[book.id] || undefined);
        return books;
      }).then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.newSearch.bind(this)} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <li key={book.id}>
                <Book book={book} moveBook={this.props.moveBook} />
              </li>
            ))}</ol>
        </div>
      </div>
    )
  }
}

export default SearchPage