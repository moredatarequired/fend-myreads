import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import * as Tags from "./util/tags.js";

function ShelvesPage(props) {
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
            moveBook={props.moveBook}
            books={props.books.filter(book => tag === book.shelf)}
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

export default ShelvesPage;
