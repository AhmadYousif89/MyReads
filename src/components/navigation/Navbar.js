import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <h1>My Reads</h1>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
