let articles = {
    'questionnaire': `
        <div class="modal-header">
            <a href="#" class="modal-back icon-left-open"></a>
            <h3 class="modal-title">Назад</h3>
        </div>

        <div class="modal-body">
            <div class="article__header">
                <img src="assets/media/works/work-image/proglib.png" alt="" class="article__header-image">
                <div class="article__header-text">
                    <h3 class="article__header-title">Онлайн-система тестирования</h3>

                    <div class="article__header-card card-time">
                        <div class="article__header-card_image"></div>
                        <div class="article__header-card_text">
                            <span class="article__header-card_title">Срок</span>
                            <p class="article__header-card_paragraph">Рабочий месяц</p>
                        </div>
                    </div>

                    <div class="article__header-card card-cost">
                        <div class="article__header-card_image"></div>
                        <div class="article__header-card_text">
                            <span class="article__header-card_title">Стоимость</span>
                            <p class="article__header-card_paragraph">Дипломный проект</p>
                        </div>
                    </div>

                    <div class="article__header-card card-desc">
                        <div class="article__header-card_image"></div>
                        <div class="article__header-card_text">
                            <span class="article__header-card_title">Описание</span>
                            <p class="article__header-card_paragraph">Программа для проведения тестирования группы учащихся в режиме реального времени по локальной сети.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h4 class="article-title">Цель</h4>
            <div class="article">
                <p class="article-paragraph">
                    <span class="article-subparagraph">
                        Помощь преподавателю в получении первичной оценки уровня знаний группы учащихся простым и быстрым способом.
                    </span>
                </p>
                
                <h4 class="article-title">Задачи</h4>
                <p class="article-paragraph">
                    <ul class="article-unordered">
                        <li class="unordered-item">Простой и интуитивно понятный интерфейс</li>
                        <li class="unordered-item">Простота в использовании</li>
                        <li class="unordered-item">Удобное создание тестов</li>
                        <li class="unordered-item">Возможность выбора типа вопроса</li>
                        <li class="unordered-item">Просмотр статистики ответов на вопросы</li>
                        <li class="unordered-item">Дополнительная возможность узнать подробности статистики</li>
                        <li class="unordered-item">Гибкая и понятная настройка приложения со стороны пользователя</li>
                        <li class="unordered-item">Вся передача данных осуществляется по локальной сети</li>
                        <li class="unordered-item">Все подключения к главной программе производятся автоматически</li>
                    </ul>
                </p>
                
                <h4 class="article-title">О проекте</h4>
                <p class="article-paragraph">
                    <span class="article-subparagraph">Данная программа является дипломным проектом для завершения моего обучения в колледже и получения специальности "Техник-программист".</span>
                    <span class="article-subparagraph">Преподаватель в роли заказчика дал мне техническое задание, по которому нужно было разработать онлайн-систему тестирования студентов в режиме реального времени без интернета.</span>
                    <span class="article-subparagraph">Для полноты понимания концепции её работы можно представить Шоу «Кто хочет стать миллионером», где одной из подсказок является «Помощь зала». Каждый сидящий в зале зритель имеет пульт, на котором представлены варианты ответов, которые они должны будут выбрать. Примерно также работает и приложение «Опросник», где зритель – это ученик, а игрок, которому требуется помощь – преподаватель. Ученики выбирают ответ, который, по их мнению, является правильным, а преподаватель получает общую статистику ответов в виде круговой диаграммы, с возможностью узнать её подробности, такие как имя компьютера и статус правильности его ответа.</span>
                    <span class="article-subparagraph">Данный проект работает по локальной сети между несколькими компьютерами, соответственно «Опросник» делится на 2 основные части – это программа для преподавателя и для ученика. Но для того, чтобы с ними работать требуется тест, который представляется в виде XML файла. Именно поэтому была разработана программа для создания этих файлов тестов. Она имеет простой и интуитивно понятный интерфейс, в ней удобно создавать тесты и в ней доступны создание вопросов различных типов, на данный момент их всего 2, это «Выбор одного правильного ответа» и «Свободный ответ».</span>
                    <span class="article-subparagraph">С помощью программы для преподавателя, тестирующий транслирует вопросы на программы учеников и видит результат их ответов на него в виде круговой диаграммы, где указаны количество правильно и неправильно отвеченных ответов. Так же по просьбе преподавателя программа имеет гибкую настройку, в которой можно сменить цветовое оформление и вывод конечной общей статистики.</span>
                    <span class="article-subparagraph">В качестве языка программирования использовался «C#». Он имеет приятный синтаксис и прост для написания как крупных, так и мелких проектов. А в сумме со средой Visual Studio программирование становится ещё легче, ведь в ней есть всё, что нужно разработчику и даже больше. Начнём с того, что этот продукт разрабатывался конкретно для данного учебного заведения, где используется только операционная система Windows, поэтому кроссплатформенность нам не нужна. Данный язык как раз нацелен на выполнение только в среде Windows.</span>
                </p>
                
                <div class="swiper-container article-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <figure class="slider-item">
                                <a href="assets/media/works/work-screenshots/proglib/Screenshot_1.png" class="slider-image__wrapper popup">
                                    <img src="assets/media/works/work-screenshots/proglib/Screenshot_1.png" alt="" class="slider-image">
                                </a>
                                <figcaption class="slider-text">
                                    <span class="slider-caption"></span>
                                    <span class="slider-description"></span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="swiper-slide">
                            <figure class="slider-item">
                                <a href="assets/media/works/work-screenshots/proglib/Screenshot_2.png" class="slider-image__wrapper popup">
                                    <img src="assets/media/works/work-screenshots/proglib/Screenshot_2.png" alt="" class="slider-image">
                                </a>
                                <figcaption class="slider-text">
                                    <span class="slider-caption"></span>
                                    <span class="slider-description"></span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="swiper-slide">
                            <figure class="slider-item">
                                <a href="assets/media/works/work-screenshots/proglib/Screenshot_3.png" class="slider-image__wrapper popup">
                                    <img src="assets/media/works/work-screenshots/proglib/Screenshot_3.png" alt="" class="slider-image">
                                </a>
                                <figcaption class="slider-text">
                                    <span class="slider-caption"></span>
                                    <span class="slider-description"></span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="swiper-slide">
                            <figure class="slider-item">
                                <div class="slider-video__wrapper">
                                    <iframe src="https://vk.com/video_ext.php?oid=135058746&id=456239188&hash=befccc76c0325aed" frameborder="0" allowfullscreen class="slider-video"></iframe>
                                </div>
                                <figcaption class="slider-text">
                                    <span class="slider-caption"></span>
                                    <span class="slider-description"></span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    
                    <div class="swiper-button-prev slider-prev"></div>
                    <div class="swiper-button-next slider-next"></div>
            </div>

                <h4 class="article-title">Системные требования</h4>
                <p class="article-paragraph">
                    <ul class="article-unordered">
                        <li class="unordered-item">Все версии процессоров AMD или Intel с тактовой частотой от 1 GHz</li>
                        <li class="unordered-item">Microsoft Windows 7 или выше</li>
                        <li class="unordered-item">.NET Framework 4.5 или выше</li>
                        <li class="unordered-item">Не менее 2 GB ОЗУ (рекомендовано 4 GB)</li>
                        <li class="unordered-item">30 MB свободной памяти на устанавливаемом диске</li>
                        <li class="unordered-item">Монитор с разрешением 1024x768 пикселей, поддержка 16-битного цвета</li>
                    </ul>
                </p>
            </div>
        </div>

        <div class="modal-footer">
            <div class="footer-resources">
                <a href="https://github.com/the-alex-mark/Questionnaire" target="_blank" title="GitHub" class="contact-link"><div class="icon icon-github"></div></a>
                <a href="https://yadi.sk/d/yTeQdAza71SxkQ" target="_blank" title="Яндекс Диск" class="contact-link"><div class="icon icon-link"></div></a>
            </div>

            <button class="button footer-button">Закрыть</button>
        </div>`
}