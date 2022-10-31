import restore from './modules/restore.js';
import startPage from './modules/pages.js';
import {
  addBook, removeBook, books,
} from './modules/book.js';
import { DateTime } from './modules/date.js';

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

const datetime = DateTime.now();
document.querySelector('.date-time').textContent = datetime.toLocaleString(DateTime.DATETIME_MED);
const refreshTime = () => {
  const timeDisplay = document.querySelector('.date-time');
  const datetime = DateTime.now();
  timeDisplay.textContent = datetime.toLocaleString(DateTime.DATETIME_MED);
};
setInterval(refreshTime, 1000);
