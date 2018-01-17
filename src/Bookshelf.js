import React from 'react'
import Book from './Book.js'

function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book book={props.books[0]} />
          </li>
          <li>
            <Book book={props.books[1]} />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf