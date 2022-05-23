import { ImBooks } from "react-icons/im";
import { useBookCollection, useLoadingHook } from "../../AppContext";
import Book from "../book/Book";

function BookShelf({ category }) {
  const { isLoading } = useLoadingHook();
  const { myCollection } = useBookCollection();

  const booksByCategory = myCollection.filter(
    ({ shelf }) => shelf === category,
  );

  return (
    <div className="bookshelf">
      <div className="bookshelf-title">
        <span>
          <ImBooks />
        </span>
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      </div>
      <div className="bookshelf-books">
        {isLoading ? (
          <h2>Loading . . . </h2>
        ) : (
          <ul className="books-grid">
            {!booksByCategory.length ? (
              <h3>. . .</h3>
            ) : (
              booksByCategory?.map((book) => <Book key={book.id} book={book} />)
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BookShelf;
