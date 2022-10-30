export const books = JSON.parse(localStorage.getItem('booksData')) || [];

export function Book(title, author) {
  this.title = title;
  this.author = author;
}

export const addBook = (title, author) => {
  const newBook = new Book(title, author);
  books.push(newBook);
};

export const removeBook = (index) => {
  books.splice(index, 1);
};
