import BookShelf from "./BookShelf";

function BookShelves() {
  return (
    <div style={{ margin: "2em" }}>
      <BookShelf category="currentlyReading" />
      <BookShelf category="wantToRead" />
      <BookShelf category="read" />
    </div>
  );
}

export default BookShelves;
