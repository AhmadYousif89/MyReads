const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substring(-8);

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: token,
};

export const getAll = async () => {
  try {
    const response = await fetch(`${api}/books`, { headers });
    const data = await response.json();
    return data.books;
  } catch (err) {
    console.log(err);
  }
};

export const get = async (bookId) => {
  try {
    const response = await fetch(`${api}/books/${bookId}`, { headers });
    const data = await response.json();
    return data.book;
  } catch (err) {
    console.log(err);
  }
};

export const update = async (book, shelf) => {
  try {
    const response = await fetch(`${api}/books/${book.id}`, {
      method: "PUT",
      headers: {
        ...headers,
      },
      body: JSON.stringify({ shelf }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const search = async (query, maxResults) => {
  try {
    const response = await fetch(`${api}/search`, {
      method: "POST",
      headers: {
        ...headers,
      },
      body: JSON.stringify({ query, maxResults }),
    });
    const data = await response.json();
    return data.books;
  } catch (error) {
    console.log(error);
  }
};
