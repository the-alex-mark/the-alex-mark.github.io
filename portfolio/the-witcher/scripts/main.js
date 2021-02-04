let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        540: {
            slidesPerView: 2
        }
    }
});

let button = document.querySelector('.header-burger');
let menu = document.querySelector('.header');
button.addEventListener('click', function (e) {
    menu.classList.toggle('show');
    button.classList.toggle('active');
});