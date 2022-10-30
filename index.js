import restore from './modules/restore.js';
import startPage from './modules/pages.js';
import {
  addBook, removeBook, books,
} from './modules/book.js';

startPage();

const reLoad = () => {
  restore(books);
  const allButtons = Array.from(document.querySelectorAll('.button'));
  allButtons.forEach((allButton) => {
    allButton.addEventListener('click', () => {
      let iButton = allButton.id;
      iButton = Number(iButton.replace(/\D/g, ''));
      removeBook(iButton);
      localStorage.setItem('booksData', JSON.stringify(books));
      reLoad();
    });
  });
};

reLoad();

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = form.elements[0].value;
  const author = form.elements[1].value;
  addBook(title, author);
  localStorage.setItem('booksData', JSON.stringify(books));
  form.reset();
  reLoad();
});