const pageHeader = document.querySelector('.header');
const menu = document.querySelector('.menu');
const headerToggle = menu.querySelector('.menu__toggle');
const body = document.querySelector('.page__body')

pageHeader.classList.remove('header--no-js');
pageHeader.classList.add('header--closed');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
    body.style = 'overflow: hidden';
    menu.style = 'overflow: auto';
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
    body.style = 'overflow: visible';
    menu.style = '';
  }
});
