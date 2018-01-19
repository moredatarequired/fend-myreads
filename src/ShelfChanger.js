import React from "react";
import * as Tags from "./util/tags.js";

function ShelfChanger(props) {
  function onSelect(e) {
    console.log(e.target);
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={onSelect} value={props.book.shelf}>
        <option value="none" disabled>Move to...</option>
        {Tags.shelfNames.map(({ name, tag }) => <option key={tag} value={tag}>{name}</option>)}
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ShelfChanger;
