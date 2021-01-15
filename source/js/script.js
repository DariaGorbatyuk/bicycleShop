'use strict';
const pageHeader = document.querySelector('.header');
const headerToggle = document.querySelector('.menu__toggle');

pageHeader.classList.remove('header--no-js');
pageHeader.classList.add('header--closed');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
  }
});
