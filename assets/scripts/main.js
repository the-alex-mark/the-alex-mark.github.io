// Загрузка страницы
$(window).load(function() {
    try { document.querySelector('.filter-item').click(); } catch { }
    try { for (let i of document.querySelectorAll('.collapse-button.active')) i.click(); } catch { }

    // Вывод текущего возраста
    var age  = get_current_age('05.07.1999');
    var word = get_string_of_number(age, [ 'год', 'года', 'лет' ]);
    $('.age').text(age + ' ' + word);

    // SVG
    var Path = {
        "logo": {
            "strokepath": [
                {
                    "path": "M 1.6505478, 45.504841 23.764736, 2.9730943 44.485758, 45.469682 57.951943, 45.466578 36.981817, 2.0923078 32.333883, 2.0923078",
                    "duration": 600
                },
                {
                    "path": "m 10.023604, 45.504841 5.526006, 0 5.699735, -12.190112 3.493386, 0",
                    "duration": 400
                },
            ],
            
            "dimensions": {
                "width": 61,
                "height": 47
            }
        }
    };

    // Анимация SVG
    $('#logo').lazylinepainter({

        // Данные
        "svgData": Path,           // Объект SVG

        // Стиль
        "strokeWidth": 3,          // Толщина
        "strokeColor": "#FFFFFF",  // Цвет
        "strokeOpacity": 1,        // Прозрачность (от 0 до 1)
        "strokeCap": "round",      // Adjust stroke cap ("butt", "round", "square")
        "strokeJoin": "round",     // Adjust stroke join ("miter", "round", "bevel")
        "strokeDash": null,        // Adjust stroke dash ("1, 1", "2, 2", "5, 5")

        // Анимация
        "delay": 0,                // Задержка перед запуском анимации
        "reverse": false,          // обратное воспроизведение
        "ease": "Linear",          // Тип анимирования ("Linear", "InQuad", "OutQuad", "InOutQuad", "InCubic", "OutCubic", "InOutCubic", "InQuart", "OutQuart", "InOutQuart", "InQuint", "OutQuint", "InOutQuint", "InSine", "OutSine", "InOutSine", "InExpo", "OutExpo", "InOutExpo", "InCirc", "OutCirc", "InOutCirc", "InBounce", "OutBounce", "InOutBounce")
        "repeat": 0                // количество дополнительных воспроизведений, -1 для цикла
    }).lazylinepainter('paint');
});

// Меню
let elem_menu = document.querySelector('#menu');
elem_menu.locked = false;
elem_menu.lock = function() {
    if (elem_menu.locked)
        return false;

    elem_menu.locked = true;
    window.setTimeout(function() { elem_menu.locked = false; }, 350);

    return true;
};
elem_menu.show = function() {
    if (elem_menu.lock())
        document.body.classList.add('is-menu-visible');
}
elem_menu.hide = function() {
    if (elem_menu.lock())
        document.body.classList.remove('is-menu-visible');
}
elem_menu.toggle = function() {
    if (elem_menu.lock())
        document.body.classList.toggle('is-menu-visible');
}
document.body.addEventListener('click', function(e) {
    e.stopPropagation();
    elem_menu.hide();
});
document.querySelector('a[href="#menu"]').addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    elem_menu.toggle();
});
document.body.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) elem_menu.hide();
});

(function() {
    // Задержка появления анимированных элементов
    for (let i of document.querySelectorAll('[data-animation-delay]'))
        i.style = 'animation-delay: ' + i.getAttribute('data-animation-delay');

    // Инициализация плагина "Modal Dialog"
    try {
        let MD = new ModalDialog('#modal');

        // Заполнение модального окна динамическими данными
        let elems_buttonShowArticle = document.querySelectorAll('[data-article]');
        for (let i of elems_buttonShowArticle) {
            i.addEventListener('click', (e) => {
                e.preventDefault = false;
                MD.Set(articles[i.getAttribute('data-article')]);
                MD.Show();

                try {
                    document.querySelector('.modal-back').addEventListener('click', () => {
                        e.preventDefault = false;
                        MD.Hide();
                    });
    
                    document.querySelector('.footer-button').addEventListener('click', () => {
                        e.preventDefault = false;
                        MD.Hide();
                    });
                } catch { }
                
                try {
                    new Swiper('.swiper-container.article-slider', {
                        slidesPerView: 4,
                        // loop: true,
                        spaceBetween: 30,
                        freeMode: true,
                        mousewheel: {
                            releaseOnEdges: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
            
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            361: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1240: { slidesPerView: 4 }
                        }
                    });
                } catch { }
                
                // -- Работа с модальными окнами (Magnific-Popup.js / Magnific-Popup.css)
                try {
                    $('.swiper-wrapper').magnificPopup({
                        delegate: 'a.popup',
                        type: 'image',
                        tLoading: 'Загрузка изображения #%curr% ...',
                        gallery: {
                            enabled: true,
                            tPrev: 'Назад',
                            tNext: 'Вперёд',
                            tCounter: 'Изображение %curr% из %total%'
                        },
                        image: {
                            cursor: 'mfp-zoom-out-cur',
                            tError: 'Не удалось загрузить изображение!',
                            titleSrc: 'alt'					  
                        },
                        mainClass: 'mfp-with-zoom',
                        zoom: {
                            enabled: true,
                            duration: 300,
                            easing: 'ease-in-out',
                            opener: function(openerElement) {
                                return openerElement.is('img') ? openerElement : openerElement.find('img');
                            }
                        },
                        callbacks: {
                            beforeOpen: function() { MD.Lock(); },
                            close: function() { MD.UnLock(); }
                        }
                    });
                }
                catch { }
            });
        }
    } catch { }

    // Раскрытие и скрытие "Collapse" блоков с информацией об опыте
    try {
        let elem_collapseButton = document.querySelectorAll('.collapse-button');
        let elem_collapseDescription = document.querySelectorAll('.collapse-description');
        for (let i in elem_collapseButton) {
            elem_collapseButton[i].addEventListener('click', function() {
                let text = elem_collapseDescription[i];

                if (text.style.maxHeight) {
                    this.classList.remove('icon-minus');
                    this.classList.add('icon-plus');
                    text.style.maxHeight = null;
                    text.style.marginBottom = '0';
                }
                else {
                    this.classList.remove('icon-plus');
                    this.classList.add('icon-minus');
                    text.style.maxHeight = text.scrollHeight + 'px';
                    text.style.marginBottom = '10px';
                }
            });
        }
    } catch { }

    // Установка нумерации строк кода
    try {
        let elem_pre = document.querySelectorAll('.pre-code'),
        pre_length = elem_pre.length;
        
        for (let i = 0; i < pre_length; i++) {
            elem_pre[i].innerHTML = '<span class="line-number"></span>' + elem_pre[i].innerHTML;
            let num = elem_pre[i].innerHTML.split(/\n/).length;

            for (let j = 0; j < num; j++)
                elem_pre[i].querySelectorAll('.line-number')[0].innerHTML += '<span class="number">' + (j + 1) + '</span>';
        }
    } catch { }

    // Высота "textarea" под размер содержимого
    try {
        let elem_textarea = document.querySelectorAll('.textarea');
        let refresh = function(element) {
            element.style = 'height: auto;';
            element.style = 'height: ' + element.scrollHeight + 'px';
        }

        for (let i of elem_textarea) {
            i.addEventListener('keyup', function(e) { refresh(e.target); });
            i.addEventListener('change', function(e) { refresh(e.target); });
            i.addEventListener('drop', function(e) { refresh(e.target); });
            i.addEventListener('paste', function(e) { refresh(e.target); });
            i.addEventListener('focusin', function(e) { refresh(e.target); });
            i.addEventListener('focusout', function(e) { refresh(e.target); });
        }
    } catch { }
})();

// Инициализация Isotope
try {
    let grid = $('.masonry');
    grid.isotope({ itemSelector: '.masonry-item' });

    // Фильтрация
    $('.filter-item').on('click', function() {
        $('.filter-item').removeClass('active');
        $(this).addClass('active');
    
        let selector = $(this).attr('data-filter');
        grid.isotope({ filter: selector });

        return false;
    });
} catch { }

/**
 * Вичисляет текущий возраст в зависимости от указанной даты.
 * 
 * @param   {Date} date Дата.
 * @returns {number}
 */
function get_current_age(date) {
    var d = date.split('.');
    if (typeof d[2] !== "undefined") {
        date = d[2] + '.' + d[1] + '.' + d[0];
        return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }

    return 0;
}

/**
 * Склоняет слова в зависимости от указанного числа.
 * 
 * @param   {number}   number Число.
 * @param   {string[]} words  Список слов для склонения.
 * @returns {string}
 */
function get_string_of_number(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}