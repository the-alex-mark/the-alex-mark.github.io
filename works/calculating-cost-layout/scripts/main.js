'use strict';

const Titles = [ "день", "дня", "дней" ];

const Data = {
    whichSite: [ 'landing', 'multiPage', 'onlineStore' ],
    price: [ 4000, 8000, 26000 ],
    desktopTemplates: [ 50, 40, 30 ],
    adaptive: 20,
    mobileTemplates: 15,
    editable: 10,
    metrikaYandex: [ 500, 1000, 2000 ],
    analyticsGoogle: [ 850, 1350, 3000 ],
    sendOrder: 500,
    deadlineDay: [ [2, 7], [3, 10], [7, 14] ],
    deadlinePercent: [ 20, 17, 15 ]
}

const startButton = document.querySelector('.start-button'),
      firstScreen = document.querySelector('.first-screen'),
      mainForm = document.querySelector('.main-form'),
      formCalculate = document.querySelector('.form-calculate'),
      endButton = document.querySelector('.end-button'),
      total = document.querySelector('.total'),
      fastRange = document.querySelector('.fast-range'),

      desktopTemplates = document.getElementById('desktopTemplates'),
      mobileTemplates = document.getElementById('mobileTemplates'),
      adaptive = document.getElementById('adaptive'),
      editable = document.getElementById('editable'),

      metrikaYandex = document.getElementById('metrikaYandex'),
      analyticsGoogle = document.getElementById('analyticsGoogle'),
      sendOrder = document.getElementById('sendOrder'),
      
      totalPriceSum = document.querySelector('.total_price__sum'),
      typeSite = document.querySelector('.type-site'),
      maxDeadline = document.querySelector('.max-deadline'),
      rangeDeadline = document.querySelector('.range-deadline'),
      deadlineValue = document.querySelector('.deadline-value'),
      calcDescription = document.querySelector('.calc-description'),
      cardHead = document.querySelector('.card-head'),
      totalPrice = document.querySelector('.total_price'),
      firstFieldset = document.querySelector('.first-fieldset');

/**
 * Показывает элемент.
 * @param {object} element HTML элемент.
 */
function showElem(element) {
    element.style = 'display: block';
}

/**
 * Скрывает элемент.
 * @param {object} element HTML элемент.
 */
function hideElem(element) {
    element.style = 'display: none';
}

/**
 * Активирует элемент.
 * @param {object} element HTML элемент.
 */
function onElem(element) {
    element.disabled = false;
}

/**
 * Деактивирует элемент.
 * @param {object} element HTML элемент.
 */
function offElem(element) {
    element.disabled = true;
}

/**
 * Выбирает склоняемое слово в зависимости от указанного значения.
 * @param {number} number Значение.
 * @param {string[]} titles Склоняемые слова.
 * @param {boolean} from В родительском падеже.
 * @example
 * Declination(21, [ "день", "дня", "дней" ]);       // 21 день
 * Declination(21, [ "день", "дня", "дней" ], true); // от 21 дня
 */
function Declination(number, titles, from = false) {
    return number + ' ' + titles[
        (from)
            ? (number % 10 === 1 && number % 100 !== 11)
                ? 1
                : 2
            : (number % 10 === 1 && number % 100 !== 11)
                ? 0
                : (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20))
                    ? 1
                    : 2
    ];
}

function docOptionsString() {
    let str = ``;

    if (metrikaYandex.checked || analyticsGoogle.checked || sendOrder.checked) {
        str += `Подключим`;

        if (metrikaYandex.checked) {
            str += ` Яндекс Метрику`;

            if (analyticsGoogle.checked && sendOrder.checked) {
                str += `, Гугл Аналитику и отправку заявок на почту.`;
                return;
            }

            if (analyticsGoogle.checked || sendOrder.checked)
                str += ` и`;
        }

        if (analyticsGoogle.checked) {
            str += ` Гугл Аналитику`;

            if (sendOrder.checked)
                str += ` и`;
        }

        if (sendOrder.checked)
            str += ` отправку заявок на почту`;
        
        str += `.`;
    }

    return str;
}

/**
 * Заполняет страницу данными в зависимости от выбранных значений.
 * @param {number} total Конечная цена разработки сайта.
 * @param {string} site Тип сайта.
 * @param {number} maxDeadlineDay 
 */
function renderTextContent(total, site, minDeadlineDay, maxDeadlineDay) {
    totalPriceSum.textContent = total;
    typeSite.textContent = site;
    maxDeadline.textContent = Declination(maxDeadlineDay, Titles, true);
    rangeDeadline.min = minDeadlineDay;
    rangeDeadline.max = maxDeadlineDay;
    deadlineValue.textContent = Declination(rangeDeadline.value, Titles);

    document.querySelector(`.${desktopTemplates.id}_value`).textContent = (desktopTemplates.checked) ? 'Да' : 'Нет';
    document.querySelector(`.${adaptive.id}_value`).textContent = (adaptive.checked) ? 'Да' : 'Нет';
    document.querySelector(`.${mobileTemplates.id}_value`).textContent = (mobileTemplates.checked) ? 'Да' : 'Нет';
    document.querySelector(`.${editable.id}_value`).textContent = (editable.checked) ? 'Да' : 'Нет';

    calcDescription.textContent = `
        Сделаем ${site}${(adaptive.checked) ? `, адаптированный под мобильные устройства и планшеты` : ``}.
        ${(editable.checked) ? `Установим панель админстратора, чтобы вы могли самостоятельно менять содержание на сайте без разработчика.` : ``}
        ${docOptionsString()}
    `;
}

/**
 * Производит расчёт стоимости разработки сайта в зависимости от выбранных значений.
 * @param {object} element 
 */
function calculation(element = {}) {
    let index = 0,
        options = [],
        minDeadlineDay = Data.deadlineDay[index][0],
        maxDeadlineDay = Data.deadlineDay[index][1],
        site = '',
        overPercent = 0,
        result = 0;

    if (element.name === 'whichSite') {
        for (const i of formCalculate.elements) {
            if (i.type === 'checkbox') i.checked = false;
        }

        hideElem(fastRange);
    }

    for (const i of formCalculate.elements) {
        if (i.name === 'whichSite' && i.checked) {
            index = Data.whichSite.indexOf(i.value);
            site = i.dataset.site;
            minDeadlineDay = Data.deadlineDay[index][0];
            maxDeadlineDay = Data.deadlineDay[index][1];
        }

        else if (i.classList.contains('calc-handler')) {
            if (i.checked)
                options.push(i.value);
        }

        else if (i.classList.contains('want-faster') && i.checked) {
            const overDay = maxDeadlineDay - rangeDeadline.value;
            overPercent = overDay * (Data.deadlinePercent[index] / 100);
        }
    }

    result += Data.price[index];

    options.forEach(function(key) {
        if (typeof(Data[key]) === 'number') {
            result += (key === 'sendOrder')
                ? Data[key]
                : Data.price[index] * Data[key] / 100;
        } else {
            result += (key === 'desktopTemplates')
                ? Data.price[index] * Data[key][index] / 100
                : Data[key][index];
        }
    });

    result += result * overPercent;
    renderTextContent(result, site, minDeadlineDay, maxDeadlineDay);
}

function moveBackTotal() {
    if (document.documentElement.getBoundingClientRect().bottom > document.documentElement.clientHeight + 200) {
        totalPrice.classList.remove('totalPriceBottom');
        firstFieldset.after(totalPrice);

        window.removeEventListener('scroll', moveBackTotal);
        window.addEventListener('scroll', moveTotal);
    }
}

function moveTotal() {
    if (document.documentElement.getBoundingClientRect().bottom <= document.documentElement.clientHeight + 200) {
        totalPrice.classList.add('totalPriceBottom');
        endButton.before(totalPrice);

        window.removeEventListener('scroll', moveTotal);
        window.addEventListener('scroll', moveBackTotal);
    }
}

startButton.addEventListener('click', function() {
    showElem(mainForm);
    hideElem(firstScreen);

    window.addEventListener('scroll', moveTotal);
});

endButton.addEventListener('click', function() {
    for (const i of formCalculate.elements) {
        if (i.tagName.toUpperCase() === 'FIELDSET') {
            hideElem(i);
        }
    }

    cardHead.textContent = 'Заявка на разработку сайта';
    hideElem(totalPrice);
    showElem(total);
});

formCalculate.addEventListener('change', function(e) {
    if (e.target.classList.contains('want-faster')) {
        if (e.target.checked) { showElem(fastRange); rangeDeadline.value = rangeDeadline.max; } else hideElem(fastRange);
        calculation(e.target);
    }

    if (e.target.classList.contains('adaptive')) {
        if (e.target.checked) {
            onElem(mobileTemplates);
        }
        else {
            offElem(mobileTemplates);
            mobileTemplates.checked = false;
            document.querySelector('.mobileTemplates_value').textContent = 'Нет';
        }
    }

    if (e.target.classList.contains('calc-handler'))
        calculation(e.target);
});

calculation();