const books = JSON.parse(localStorage.getItem('booksData')) || [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(title, author) {
  const newBook = new Book(title, author);
  books.push(newBook);
}

function removeBook(index) {
  books.splice(index, 1);
}

const bookList = document.querySelector('.book-list');

function reLoad() {
  bookList.replaceChildren();
  for (let i = 0; i < books.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'book-element';
    const p = document.createElement('p');
    const pText = document.createTextNode(`${books[i].title} by ${books[i].author}`);
    p.appendChild(pText);
    div.appendChild(p);
    const button = document.createElement('button');
    button.className = 'button';
    button.id = `button${i}`;
    const buttonText = document.createTextNode('Remove');
    button.appendChild(buttonText);
    div.appendChild(button);
    bookList.appendChild(div);
  }
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
}
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