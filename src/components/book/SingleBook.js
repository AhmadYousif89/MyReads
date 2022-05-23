import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { get } from "../../BooksAPI";
import "./SingleBook.css";

function SingleBook() {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    get(bookId).then((data) => {
      setBooks([data]);
    });
  }, [bookId]);

  return (
    <>
      <div className="book-header">
        <h1>Book Details</h1>
      </div>
      {books.map((book) => (
        <article key={book.id} className="single-book">
          <div className="book-details">
            <div className="single-book-image">
              <a href={book.previewLink}>
                <img src={book.imageLinks.thumbnail} alt={book.title} />
              </a>
              <div>
                <p className="side-info">
                  Language
                  <span> {book.language}</span>
                </p>
                <p className="side-info">
                  Page Count
                  <span> {book.pageCount} </span>
                </p>
                <p className="side-info">
                  publisher
                  <span>{!book.publisher ? "N/A" : book.publisher}</span>
                </p>
              </div>
            </div>
            <div className="book-info">
              <p id="title">
                <span>Title</span> {book.title}
              </p>
              <p id="author">
                <span>Author</span>
                {book.authors}
              </p>
              <p id="desc">
                <span>Description</span>
                {book.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default SingleBook;
