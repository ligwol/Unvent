"use strict";

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});
var mapButton = document.getElementById('map-button');

var toggleMap = function toggleMap() {
  mapButton.classList.toggle('open-map');
  shadow.classList.toggle('open');
};

mapButton.addEventListener('click', toggleMap);
shadow.addEventListener('click', toggleMap);
var burger = document.getElementById('burger-menu');
var menu = document.querySelector('.nav');
burger.addEventListener('click', function () {
  burger.classList.toggle('open');
  menu.classList.toggle('nav-open');
});