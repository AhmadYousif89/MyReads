import { useBookCollection, useLoadingHook } from "../../AppContext";
import { useEffect } from "react";
import { ImBook } from "react-icons/im";
import { getAll } from "../../BooksAPI";
import BookShelves from "./Bookshelves";
import BookCollection from "./BookCollection";

function Home() {
  const { setIsLoading } = useLoadingHook();
  const { setMyCollection } = useBookCollection();

  useEffect(() => {
    setIsLoading(true);
    getAll().then((data) => {
      setIsLoading(false);
      setMyCollection(data);
    });
  }, [setIsLoading, setMyCollection]);

  return (
    <main>
      <header className="book-header">
        <ImBook />
        <h1>Book Collection</h1>
      </header>
      <div className="list-books-content">
        <BookCollection />
      </div>
      <div style={{ margin: "2em" }}>
        <BookShelves />
      </div>
    </main>
  );
}

export default Home;
