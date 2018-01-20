import React from "react";
import * as Tags from "./util/tags.js";

function ShelfChanger(props) {
  return (
    <div className="book-shelf-changer">
      <select onChange={e => props.moveBook(props.book, e.target.value)} value={props.book.shelf || "none"}>
        <option value="none" disabled>Move to...</option>
        {Tags.shelfNames.map(({ name, tag }) => <option key={tag} value={tag}>{name}</option>)}
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ShelfChanger;
