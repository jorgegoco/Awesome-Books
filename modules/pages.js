function startPage() {
  document.querySelector('.book-list').style.display = 'flex';
  document.querySelector('.header-list').style.display = 'block';
  document.querySelector('.header-add').style.display = 'none';
  document.querySelector('.header-contact').style.display = 'none';
  document.querySelector('.form').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
}

function addPage() {
  document.querySelector('.form').style.display = 'flex';
  document.querySelector('.header-add').style.display = 'block';
  document.querySelector('.header-list').style.display = 'none';
  document.querySelector('.header-contact').style.display = 'none';
  document.querySelector('.book-list').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
}

function contactPage() {
  document.querySelector('.contact-section').style.display = 'flex';
  document.querySelector('.header-contact').style.display = 'block';
  document.querySelector('.header-list').style.display = 'none';
  document.querySelector('.header-add').style.display = 'none';
  document.querySelector('.book-list').style.display = 'none';
  document.querySelector('.form').style.display = 'none';
}

startPage();
document.querySelector('.button-list').addEventListener('click', startPage);
document.querySelector('.button-add').addEventListener('click', addPage);
document.querySelector('.button-contact').addEventListener('click', contactPage);