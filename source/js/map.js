'use strict';
ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Магазин MooN',
      balloonContent: 'Магазин велосипедов MooN'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/fav32.png',
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -16]
    });

  myMap.geoObjects
    .add(myPlacemark);
});
