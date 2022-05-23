import { FaSearch } from "react-icons/fa";
import Book from "../book/Book";
import "./styles/Search.css";
import { useBookCollection, useSearchList } from "../../AppContext";

function SearchContent() {
  const { myCollection } = useBookCollection();
  const { searchedBooks } = useSearchList();

  const searchResult = searchedBooks?.map((searchBook) => {
    myCollection.forEach((book) => {
      if (searchBook.id === book.id) searchBook.shelf = book.shelf;
    });
    return searchBook;
  });

  return (
    <>
      <header className="book-header">
        <FaSearch />
        <h1>Search Results</h1>
      </header>
      <ul className="books-grid">
        {searchResult != null ? (
          searchResult.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3>No books were found</h3>
            <p>Start searching for some</p>
          </div>
        )}
      </ul>
    </>
  );
}

export default SearchContent;
