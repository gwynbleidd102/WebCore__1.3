// Проверка ширины экрана
function initSwiper() {
  if (window.innerWidth <= 767) {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlied: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
};


// Инициализация Swiper при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
});

// Переинициализация Swiper при изменении размера экрана
window.addEventListener('resize', () => {
  // Уничтожаем существующий Swiper (если он был инициализирован)
  const swiperContainer = document.querySelector('.swiper');
  if (swiperContainer.swiper) {
    swiperContainer.swiper.destroy();
  }
  
  // Переинициализируем Swiper при необходимости
  initSwiper();
});

// функция для кнопки "показать всё" в слайдере с брендами

const swiperWrapper = document.querySelector('.brands__swiper-wrapper');
const showAllSlides =  document.getElementById('brands__expand-btn');
const arrow = document.querySelector('.brands__expand-arrow');
const buttonText = showAllSlides.querySelector('.brands__expand-btn-text');
let isExpanded = false;

showAllSlides.addEventListener('click', ()  => {
  swiperWrapper.classList.toggle('brands__swiper-wrapper--all-slides');
  arrow.classList.toggle('brands__expand-arrow--rotate');
  
  isExpanded = !isExpanded;
  
  isExpanded = !isExpanded;
  if (isExpanded) {
    buttonText.textContent = 'Скрыть';
  } else {
    buttonText.textContent = 'Показать всё';
  }
});


// скрипт для боковой менюшки
const body = document.body;
const sidenavBlock = document.querySelector('.sidenav');
const burgerToggle = document.querySelector('.header__left-burger-btn');
const burgerClose = document.querySelector('.mobile-menu__back-btn');
const transparentBg = document.querySelector('.transparent-bg')

// клик по бургеру
burgerToggle.addEventListener('click', () => {
  sidenavBlock.classList.add('burger-toggle');
  transparentBg.classList.add('transparent-bg--visible');
  body.classList.add('no-scroll');
});

// скрытие меню
burgerClose.addEventListener('click', () => {
  sidenavBlock.classList.remove('burger-toggle');
  transparentBg.classList.remove('transparent-bg--visible');
  body.classList.remove('no-scroll');
});

//скрытие меню по клику на прозрачную облатсть
transparentBg.addEventListener('click', (event) => {
  if(sidenavBlock.contains(event.target)) {
    sidenavBlock.classList.remove('burger-toggle');
    body.classList.remove('no-scroll');
  }
});
