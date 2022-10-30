function listPage() {
  document.querySelector('.book-list').style.display = 'flex';
  document.querySelector('.header').textContent = 'All awesome books';
  document.querySelector('.form').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
}

function addPage() {
  document.querySelector('.form').style.display = 'flex';
  document.querySelector('.header').textContent = 'Add a new book';
  document.querySelector('.book-list').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
}

function contactPage() {
  document.querySelector('.contact-section').style.display = 'flex';
  document.querySelector('.header').textContent = 'Contact information';
  document.querySelector('.book-list').style.display = 'none';
  document.querySelector('.form').style.display = 'none';
}

export function startPage() {
  document.querySelector('.button-list').addEventListener('click', listPage);
  document.querySelector('.button-add').addEventListener('click', addPage);
  document.querySelector('.button-contact').addEventListener('click', contactPage);
  listPage();
}