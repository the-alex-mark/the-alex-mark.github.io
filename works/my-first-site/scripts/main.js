// Инициализация плагина "WOW"
new WOW().init();

// Инициализация плагина "Swiper"
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'swiper-bullet',
        bulletActiveClass: 'swiper-bullet-active',
        clickable: true
      },
});