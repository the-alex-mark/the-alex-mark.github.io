/**
 * Предоставляет методы для работы с модальным окном.
 */
class ModalDialog {

	/**
	 * Инициализирует новый экземпляр объекта `ModalDialog`.
	 * @param {string} element Класс или идентификатор модального окна.
	 */
	constructor(element) {
		this.modal = document.querySelector(element);
		this.Locked = false;
		this.Settings();
	}

	/**
	 * Задаёт первоначальные настройки диалогового окна.
	 * Этот метот вызывается автоматически.
	 */
	Settings() {
		// Закрытие по клику на кнопку
		let button_close = this.modal.querySelector('.modal-close');
		button_close.addEventListener('click', (e) => {
			this.Hide();
		});

		// document.querySelector('.modal-wrapper-close').addEventListener('click', function() {
		// 	this.Hide();
		// });
		// document.querySelector('.modal-wrapper').addEventListener('click', function() {
		// 	this.Hide();
		// });

		// Закрытие при клике вне окна
		this.modal.addEventListener('click', (e) => {
			let element = document.querySelector('.modal-content');
			if (!element.contains(e.target)) this.Hide();
		});

		// Закрытие при нажатии клавиши "Esc"
		// this.modal.addEventListener("keyup", (e) => {
		document.addEventListener("keyup", (e) => {
			switch(e.keyCode) {
				case 27: this.Hide(); break;
				default: return;
			}
		});
	}

	/**
	 * Задаёт содержимое диалогового окна.
	 * @param {string} content Разметка HTML.
	 */
	Set(content) {
		if (!this.Locked)
			document.querySelector(".modal-content").innerHTML = content;
	}

	/**
	 * Добавляет к содержимому диалогового окна новые данные.
	 * @param {string} content 
	 */
	Add(content) {
		if (!this.Locked)
			document.querySelector(".modal-content").innerHTML += content;
	}

	/**
	 * Очищает содержимое диалогового окна.
	 */
	Clear() {
		if (!this.Locked)
			document.querySelector(".modal-content").innerHTML = '';
	}
	
	/**
	 * Показывает модальное окна.
	 */
	Show() {
		if (!this.Locked) {
			document.body.classList.add('modal-open');
			this.modal.classList.add('show');
		}
	}

	/**
	 * Скрывает модальное окно.
	 */
	Hide() {
		if (!this.Locked) {
			document.querySelector('body').classList.remove('modal-open');
			this.modal.classList.remove('show');
			
			// Установка ScrollBar для окна исходной позиции
			setTimeout(() => {
				this.modal.scrollTop = 0;
				this.modal.querySelector('.modal-dialog .modal-content').scrollTop = 0;
			}, 500);
		}
	}

	/**
	 * Блокирует модальное окно.
	 */
	Lock() {
		this.Locked = true;
	}

	/**
	 * Отключает блокировку модального окна.
	 */
	UnLock() {
		this.Locked = false;
	}
}