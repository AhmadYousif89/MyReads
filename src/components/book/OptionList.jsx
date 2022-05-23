import { toast } from "react-toastify";
import { useBookCollection, useLoadingHook } from "../../AppContext";
import { getAll, update } from "../../BooksAPI";

function OptionList({ book }) {
  const { setIsLoading } = useLoadingHook();
  const { setMyCollection } = useBookCollection();

  const modifyBookShelf = async (event, book) => {
    await update(book, event.currentTarget.value);
    setIsLoading(true);
    await getAll().then((data) => {
      setIsLoading(false);
      setMyCollection(data);
      toast.success(`Book shelf updated`);
    });
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={(event) => modifyBookShelf(event, book)}>
        <option disabled>. . . Move to . . .</option>
        <option value="currentlyReading">
          {book.shelf === "currentlyReading" ? (
            <> &#9989; Currently Reading</>
          ) : (
            "Currently Reading"
          )}
        </option>
        <option value="wantToRead">
          {book.shelf === "wantToRead" ? (
            <> &#9989; Want to Read</>
          ) : (
            "Want to Read"
          )}
        </option>
        <option value="read">
          {book.shelf === "read" ? <> &#9989; Read</> : "Read"}
        </option>
        {book.shelf ? <option value="none">Remove</option> : null}
      </select>
    </div>
  );
}

export default OptionList;