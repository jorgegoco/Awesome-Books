import {books, bookList} from '../index.js'

export default function restore() {
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
}