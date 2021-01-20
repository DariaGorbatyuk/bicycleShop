'use strict';
(function () {
  var pageHeader = document.querySelector('.header');
  var menu = document.querySelector('.menu');
  var headerToggle = menu.querySelector('.menu__toggle');
  var body = document.querySelector('body');

  pageHeader.classList.remove('header--no-js');
  pageHeader.classList.add('header--closed');

  function closeHeader() {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
    body.classList.remove('overflow');
  }

  function openHeader() {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
    body.classList.add('overflow');
  }

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('header--closed')) {
      openHeader();
    } else {
      closeHeader();
    }
  });
  menu.addEventListener('click', function (evt) {
    if (!evt.target.classList.contains('menu__link')) {
      return;
    }
    closeHeader();
  });
})();
