import {
  useBookCollection,
  useSearchList,
  useSearchValue,
} from "../../AppContext";
import { useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { search } from "../../BooksAPI";
import "./Search.css";

function Search() {
  const { setSearchedBooks } = useSearchList();
  const { myCollection } = useBookCollection();
  const { searchValue, setSearchValue } = useSearchValue();

  useEffect(() => {
    search(searchValue).then((data) => {
      if (data && !data.error) {
        const searchResult = data?.map((searchBook) => {
          myCollection.forEach((book) => {
            if (!searchBook.shelf) searchBook.shelf = "none";
            if (searchBook.id === book.id) searchBook.shelf = book.shelf;
          });
          return searchBook;
        });
        setSearchedBooks(searchResult);
      } else {
        setSearchedBooks(data);
      }
    });
  }, [myCollection, searchValue, setSearchedBooks]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const closeSearchQuery = () => {
    setSearchValue("");
  };

  return (
    <>
      <div className="search-books-bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={searchValue}
          onChange={handleSearch}
        />
        <FiDelete onClick={closeSearchQuery} id="delete-icon" />
      </div>
    </>
  );
}

export default Search;
