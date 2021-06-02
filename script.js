lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

const mapButton = document.getElementById('map-button');
const toggleMap = () => {
    mapButton.classList.toggle('open-map');
    shadow.classList.toggle('open');
}

mapButton.addEventListener('click', toggleMap);
shadow.addEventListener('click', toggleMap);

const burger = document.getElementById('burger-menu');
const menu = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('nav-open');

})
