import { useSearchBtn } from "../../AppContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { setIsSearchOpen } = useSearchBtn();

  return (
    <>
      <div className="nav">
        <Link to="/" onClick={() => setIsSearchOpen(false)}>
          <h1>My Reads</h1>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
