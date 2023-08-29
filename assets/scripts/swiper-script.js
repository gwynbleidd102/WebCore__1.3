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

// функция для кнопки "показать всё"

const swiperWrapper = document.querySelector('.swiper-wrapper');
const showAllSlides =  document.getElementById('swiper__expand-btn');
const arrow = document.querySelector('.swiper__expand-arrow');
const buttonText = showAllSlides.querySelector('.swiper__expand-btn-text');
let isExpanded = false;

showAllSlides.addEventListener('click', ()  => {
  swiperWrapper.classList.toggle('swiper-wrapper--all-slides');
  arrow.classList.toggle('swiper__expand-arrow--rotate');
  
  isExpanded = !isExpanded;
  
  isExpanded = !isExpanded;
  if (isExpanded) {
    buttonText.textContent = 'Скрыть';
  } else {
    buttonText.textContent = 'Показать всё';
  }
});

