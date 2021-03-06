import { toast } from "react-toastify";
import { useBookCollection, useLoadingHook } from "../../AppContext";
import { getAll, update } from "../../BooksAPI";

function OptionList({ book }) {
  const { setIsLoading } = useLoadingHook();
  const { setMyCollection } = useBookCollection();

  const modifyBookShelf = async (event, book) => {
    setIsLoading(true);
    await update(book, event.target.value);
    await getAll().then((data) => {
      setIsLoading(false);
      setMyCollection(data);
    });
    if (event.target.value === "none")
      toast.info(`Book Removed From Collection`);
    else toast.success(`Book Shelf Updated`);
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={(event) => modifyBookShelf(event, book)}>
        <option disabled>. . . Add to . . .</option>
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
        <option value="none">
          {book.shelf === "none" ? <> &#9989; None</> : "Remove"}
        </option>
      </select>
    </div>
  );
}

export default OptionList;
