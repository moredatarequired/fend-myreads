import React from "react";
import * as Tags from "./util/tags.js";

function ShelfChanger(props) {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>
          Move to...
        </option>
        {Tags.shelfNames.map(({ name, tag }) => (
          <option key={tag} value={tag} selected={tag === props.book.shelf}>
            {name}
          </option>
        ))}
        <option value="none" selected={!props.book.shelf}>
          None
        </option>
      </select>
    </div>
  );
}

export default ShelfChanger;
