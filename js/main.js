// Tabs
$('.card').on('click', function () {
  let currentTab = $(this).parent().index();

  $('.card').removeClass('card-active');
  $(this).addClass('card-active');

  $('.tab-content').removeClass('active');
  $('.tab-content').eq(currentTab).addClass('active');
});

// Hamburger
$('.hamburger').on('click', function () {
  $('.head__menu').toggle();
});

$('.menu-close').on('click', function () {
  $('.head__menu').hide();
});

// Parallax
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

// Slider
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween: 36,
  slidesPerView: 3,
  loop: true,
  stopOnLastSlide: false,
  autoplay: {
    delay: 3500,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

// Map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 7,
    controls: ['zoomControl', 'geolocationControl']
  });
}
