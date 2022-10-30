import {books} from '../index.js'

function Book(title, author) {
  this.title = title;
  this.author = author;
}

export function addBook(title, author) {
  const newBook = new Book(title, author);
  books.push(newBook);
}

export function removeBook(index) {
  books.splice(index, 1);
}
