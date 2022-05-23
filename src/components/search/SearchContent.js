import { BiBookReader } from "react-icons/bi";
import {
  useLoadingHook,
  useSearchList,
  useSearchValue,
} from "../../AppContext";
import Search from "./Search";
import Book from "../book/Book";
import Spinner from "../utils/Spinner";
import "./Search.css";

function SearchContent() {
  const { searchedBooks } = useSearchList();
  const { searchValue } = useSearchValue();
  const { isLoading } = useLoadingHook();

  if (isLoading) return <Spinner />;

  return (
    <>
      <header className="book-header">
        <Search />
      </header>
      <ul className="books-grid">
        {searchedBooks == null ? (
          <div className="search-empty">
            <BiBookReader />
            <h4>. . . Start Searching . . . </h4>
          </div>
        ) : searchedBooks.error ? (
          <div style={{ textAlign: "center" }}>
            <h3>No books were found matching : {searchValue}</h3>
          </div>
        ) : (
          <>
            {searchedBooks?.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default SearchContent;
