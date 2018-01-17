import React from "react";
import ShelfChanger from "./ShelfChanger";

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${props.book.imageLinks.thumbnail}")`
          }}
        />
        <ShelfChanger book={props.book} />
      </div>
      <div className="book-title">
        {props.book.title + (props.book.subtitle ? ": " + props.book.subtitle : "")}
      </div>
      <div className="book-authors">{props.book.authors.join(", ")}</div>
    </div>
  );
}

export default Book;
