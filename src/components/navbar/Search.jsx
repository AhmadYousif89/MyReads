import { useSearchList } from "../../AppContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { search } from "../../BooksAPI";
import "./styles/Search.css";

function Search() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { setSearchedBooks } = useSearchList();

  useEffect(() => {
    search(searchValue).then((data) => {
      if (data?.error) {
        return;
      }
      setSearchedBooks(data);
    });
  }, [searchValue, setSearchedBooks]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    navigate("/search");
  };

  const closeSearchQuery = () => {
    setSearchValue("");
    navigate("/");
  };

  return (
    <div className="search-books">
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
    </div>
  );
}

export default Search;
