import React from "react";
import Book from "./Book.js";

function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <li key={book.id}>
              <Book book={book} moveBook={props.moveBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
