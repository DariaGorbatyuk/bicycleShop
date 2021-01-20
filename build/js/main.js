'use strict';
(function () {
  var pageHeader = document.querySelector('.header');
  var menu = document.querySelector('.menu');
  var headerToggle = menu.querySelector('.menu__toggle');
  var body = document.querySelector('body');

  pageHeader.classList.remove('header--no-js');
  pageHeader.classList.add('header--closed');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('header--closed')) {
      pageHeader.classList.remove('header--closed');
      pageHeader.classList.add('header--opened');
      body.classList.add('overflow')
    } else {
      pageHeader.classList.add('header--closed');
      pageHeader.classList.remove('header--opened');
      body.classList.remove('overflow')
    }
  });
})();
