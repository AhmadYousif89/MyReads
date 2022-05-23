import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AppLayout from "./AppLayout";
import AppContextProvider from "./AppContext";
import Home from "./components/home/Home";
import SearchContent from "./components/navbar/SearchContent";
import SingleBook from "./components/book/SingleBook";
import NotFound from "./components/utils/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        toastStyle={{ maxWidth: "300px" }}
        theme="colored"
        autoClose={3000}
        position={"bottom-left"}
        hideProgressBar={true}
        pauseOnFocusLoss={false}
      />
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchContent />} />
            <Route path="book/:bookId" element={<SingleBook />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
