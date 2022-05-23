import React from "react";
import { Link } from "react-router-dom";
import OptionList from "./OptionList";

function Book({ book }) {
  return (
    <article className="book">
      <div className="book-top">
        <div className="book-cover">
          <img src={book.imageLinks?.thumbnail} alt={book.title} />
        </div>
        <OptionList book={book} />
      </div>
      <Link to={`/book/${book.id}`}>
        <div className="book-title">{book.title}</div>
      </Link>
      <div className="book-authors">{book.authors}</div>
    </article>
  );
}

export default Book;
