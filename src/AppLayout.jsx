import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const styles = {
  display: "flex",
  flexDirection: "column",
};

function AppLayout() {
  return (
    <main className="apps" style={styles}>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default AppLayout;
