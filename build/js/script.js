'use strict';
(()=>{
  const pageHeader = document.querySelector('.header');
  const headerToggle = document.querySelector('.menu__toggle');
  const body = document.querySelector('.page__body')

  pageHeader.classList.remove('header--no-js');
  pageHeader.classList.add('header--closed');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('header--closed')) {
      pageHeader.classList.remove('header--closed');
      pageHeader.classList.add('header--opened');
      body.style = 'overflow: hidden'
    } else {
      pageHeader.classList.add('header--closed');
      pageHeader.classList.remove('header--opened');
      body.style = 'overflow: visible'
    }
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.938635, 30.323118],
        zoom: 16
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Магазин MooN',
        balloonContent: 'Магазин велосипедов MooN'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/fav32.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-16, -16]
      });

    myMap.geoObjects
      .add(myPlacemark)
  });
})()

