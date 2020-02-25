// SVG разметка
// <svg id="logo" viewBox="0 0 61 47" xmlns="http://www.w3.org/2000/svg">
//     <path d="M 1.6505478, 45.504841 23.764736, 2.9730943 44.485758, 45.469682 57.951943, 45.466578 36.981817, 2.0923078 32.333883, 2.0923078" stroke="" fill-opacity="0" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-llp-duration="800" style="stroke-dasharray: 161.508, 161.508; stroke-dashoffset: 0; display: block;"></path>
//     <path d="m 10.023604, 45.504841 5.526006, 0 5.699735, -12.190112 3.493386, 0" stroke="transparent" fill-opacity="0" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-llp-duration="400" data-llp-delay="800" style="stroke-dasharray: 22.4762, 22.4762; stroke-dashoffset: 0; display: block;"></path>
// </svg>

// JavaScript версия
window.addEventListener('load', function() {
    let logo = document.querySelector('#logo');
    let myAnimation = new LazyLinePainter(logo);
    myAnimation.paint();
});

// JQuery версия
$(window).load(function() {
    let Path = {
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

    $($('#logo')).lazylinepainter({
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