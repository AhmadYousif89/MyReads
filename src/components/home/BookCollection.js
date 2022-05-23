import Spinner from "../utils/Spinner";
import Book from "../book/Book";
import { useBookCollection, useLoadingHook } from "../../AppContext";

function BookCollection() {
  const { isLoading } = useLoadingHook();
  const { myCollection } = useBookCollection();

  if (isLoading) return <Spinner />;

  return (
    <>
      {!myCollection || myCollection == null ? (
        <div style={{ textAlign: "center" }}>
          <h3>No Books in your collection</h3>
          <p>Start adding some by using the search bar</p>
        </div>
      ) : (
        <ul className="books-grid">
          {myCollection?.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      )}
    </>
  );
}

export default BookCollection;
