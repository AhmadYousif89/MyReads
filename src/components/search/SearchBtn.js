import { IoCloseCircle, IoAddCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSearchBtn } from "../../AppContext";
import "./Search.css";

function SearchBtn() {
  const navigate = useNavigate();
  const { isSearchOpen, setIsSearchOpen } = useSearchBtn();

  const handleSearchOpen = () => {
    navigate("/search");
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    navigate("/");
    setIsSearchOpen(false);
  };

  return (
    <>
      {isSearchOpen ? (
        <div className="search-btn">
          <IoCloseCircle onClick={handleSearchClose} />
        </div>
      ) : (
        <div className="search-btn">
          <IoAddCircle onClick={handleSearchOpen} />
        </div>
      )}
    </>
  );
}

export default SearchBtn;
