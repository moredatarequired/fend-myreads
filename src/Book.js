import React from "react";
import ShelfChanger from "./ShelfChanger";

function formatAuthor(authors) {
  switch (authors.length) {
    case 0:
      return "";
    case 1:
      return authors[0];
    case 2:
      return authors.join(" and ");
    default:
      return authors.slice(0, -1).join(", ") + ", and " + authors[authors.length - 1];
  }
}

function formatTitle(title, subtitle) {
  return title + (subtitle ? ": " + subtitle : "");
}

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
      <div className="book-title">{formatTitle(props.book.title, props.book.subtitle)}</div>
      <div className="book-authors">{formatAuthor(props.book.authors)}</div>
    </div>
  );
}

export default Book;
