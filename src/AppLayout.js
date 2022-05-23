import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import SearchBtn from "./components/search/SearchBtn";

const styles = {
  display: "flex",
  flexDirection: "column",
};

function AppLayout() {
  return (
    <main style={styles}>
      <Navbar />
      <Outlet />
      <SearchBtn />
    </main>
  );
}

export default AppLayout;
