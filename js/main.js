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
    delay: 3000,
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
    controls: ['zoomControl', 'geolocationControl'],
  });
}

// Validation
$.validator.addMethod('regex', function (value, element, regexp) {
  let regExp = new RegExp(regexp);
  return regExp.test(value);
}, 'Please check your input');

$('#form-help').validate({
  rules: {
    firstName: {
      required: true,
      regex: '[A-Za-zА-Яа-я]{1,32}',
    },
    phoneNumber: {
      digits: true,
      required: true,
      minlength: 10,
      maxlength: 11,
      regex: '[0-9]',
    },
  },
  messages: {
    firstName: 'Введите Ваше имя',
    phoneNumber: 'Введите Ваш номер',
  },
});
