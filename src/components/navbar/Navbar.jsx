import { Link } from "react-router-dom";
import Search from "./Search";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <h1>MyReads</h1>
        </Link>
        <Search />
      </div>
    </>
  );
}

export default Navbar;
