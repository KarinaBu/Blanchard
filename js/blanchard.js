window.addEventListener('DOMContentLoaded', function () {

	//Бургер-меню медиа

	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('#menu').classList.toggle('is-active')
	});

	document.getElementById('#close').addEventListener('click', function () {
		document.querySelector('#menu').classList.toggle('is-active')
	});

	//Инпут при клике на лупу цвет

	const lupa = document.getElementsByClassName('roof__search-btn')[0];
	document.querySelector('.roof__search-input').addEventListener('focus', function () {
		lupa.classList.toggle('roof__search-btn-highlited');
	});

	let form = document.getElementsByClassName("roof__search")[0];
	form.onsubmit = function () {
		return false;
	}

	document.getElementById('lupa').addEventListener('blur', function (event) {
		if (event.target.matches('.roof__search-input')) {
			document.getElementById('input').classList.remove('show');
		}
	});

	document.querySelector('.roof__search-input').addEventListener('blur', function () {
		lupa.classList.toggle('roof__search-btn-highlited');
		document.getElementById('input').classList.remove('show');
	});

	// Инпут-лупа 1024
	if (window.innerWidth <= 1024 && window.innerWidth > 1000) {
		let tablet = document.getElementsByClassName('roof__search-tablet')[0];
		document.querySelector('#lupa').addEventListener('click', function () {
			document.querySelector('#input').classList.add('show');
			tablet.classList.add('roof__search-tablet-margin');
			document.querySelector('#search').focus();
		});

		document.querySelector('#search').addEventListener('blur', function () {
			document.querySelector('#input').classList.remove('show');
			tablet.classList.remove('roof__search-tablet-margin');
		})
	}

	/*Инпут-лупа 768*/

	if (window.innerWidth <= 1000) {
		let transform = document.getElementsByClassName('roof__search-tablet')[0];
		let logo = document.getElementsByClassName('roof__logo')[0];
		let burger = document.getElementsByClassName('roof__burger')[0];
		document.querySelector('#lupa').addEventListener('click', function () {
			document.querySelector('#input').classList.add('show');
			document.querySelector('#input').focus();
			transform.classList.add('roof__search-tablet-transform');
			logo.classList.toggle('roof__logo-none');
			burger.classList.toggle('roof__burger-none');
		});
		document.getElementById('#close-lupa').addEventListener('click', function () {
			let logo = document.getElementsByClassName('roof__logo')[0];
			let burger = document.getElementsByClassName('roof__burger')[0];
			let transform = document.getElementsByClassName('roof__search-tablet')[0];
			document.getElementById('input').classList.remove('show');
			logo.classList.toggle('roof__logo-none');
			burger.classList.toggle('roof__burger-none');
			transform.classList.remove('roof__search-tablet-transform');
		});
	}

	//Выпадающее меню Хедер

	document.querySelector('.roof__down-link').addEventListener('click', function () {
		this.classList.toggle('clicked');
	});

	const element = document.querySelector('.select');
	const choices = new Choices(element, {
		shouldSort: false,
		searchEnabled: false,
		itemSelectText: '',
	});
	let wrappers = document.querySelectorAll('.roof__nav-wrapper');
	wrappers.forEach(el => {
		new SimpleBar(el, {
			scrollbarMaxSize: 28
		});
	});

	// Закройте выпадающее меню, если пользователь щелкает за его пределами
	window.onclick = function (event) {
		let dropdowns = document.getElementsByClassName('roof__nav-wrapper');
		for (let i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}

		let navItems = document.getElementsByClassName('roof__down-link');
		for (let i = 0; i < navItems.length; i++) {
			let item = navItems[i];
			if (item.classList.contains('clicked')) {
				item.classList.remove('clicked');
			}
		}
		if (event.target.matches('.roof__down-link')) {
			event.target.closest("li").childNodes[2].classList.toggle('show');
			event.target.classList.toggle('clicked');
		}
	}

	//Слайдер Hero

	const swiper = new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		autoplay: {
			delay: 6000,
		},
	});

	//Табы "Каталог"

	document.querySelectorAll('.catalog__nav-item-btn').forEach(function (tabsItem) {
		tabsItem.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path;
			document.querySelectorAll('.catalog__description').forEach(function (tabContent) {
				tabContent.classList.remove('catalog__description-active');
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('catalog__description-active');
		})
	})

	document.querySelectorAll('.catalog__btn-col').forEach(function (tabsItemArtist) {
		tabsItemArtist.addEventListener('click', function (event) {
			const artist = event.currentTarget.dataset.artist;
			document.querySelectorAll('.catalog__left').forEach(function (tabContentArtist) {
				tabContentArtist.classList.remove('catalog__left-active');
			})
			document.querySelector(`[data-biography="${artist}"]`).classList.add('catalog__left-active');
		})
	})

	document.querySelectorAll('.catalog__nav-item-btn').forEach(function (btnItem) {
		btnItem.addEventListener('click', function (event) {
			document.querySelectorAll('.catalog__nav-item-btn').forEach(function (button) {
				button.classList.remove('catalog__nav-item-btn-active');
			});
			btnItem.classList.add('catalog__nav-item-btn-active');
		})
	})

	//Slider-Swiper Галерея

	const swiperGallery = new Swiper('.gallery__slider-container', {
		slideClass: 'gallery__slide',
		wrapperClass: "gallery__swiper-wrapper",
		navigation: {
			nextEl: '.gallery__slick-next',
			prevEl: '.gallery__slick-prev',
		},
		pagination: {
			el: ".pagination",
			type: "fraction"
		},
		breakpoints: {
			1600: {
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1024: {
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 34,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 34,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			490: {
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 20,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			319: {
				slidesPerColumn: 1,
				slidesPerView: 1,
				slidesPerGroup: 1,
			}
		}
	});

	//Аккордеон Каталог

	$("#accordion").accordion({
		active: 0,
		animate: 500,
		collapsible: true,
		header: '.catalog__item-name',
	});
	$("h3.catalog__item-name").click(function () {
		$(this).find('.arrow').toggleClass('active');
	});

	//Больше карточек "События"

	if (window.innerWidth >= 1000) {
		jQuery(document).ready(function ($) {
			if ($('.event__card').find('.event__card-item').length > 3) {
				$('.event__btn').click(function () {
					$('.event__card-item:nth-child(n+4)').slideToggle('');
					$(this).toggleClass('opnd_g');
					if ($(this).hasClass('opnd_g')) {
						$(this).html('Не все события');
					} else {
						$(this).html('Все события');
					}
				});
			} else {
				$('.event__btn').hide();
			}
		});
	}

	if (window.innerWidth < 769) {
		jQuery(document).ready(function ($) {
			if ($('.event__card').find('.event__card-item').length > 2) {
				$('.event__card-item:nth-child(3)').slideToggle('');
				$('.event__btn').click(function () {
					$('.event__card-item:nth-child(n+3)').slideToggle('');
					$(this).toggleClass('opnd_g');
					if ($(this).hasClass('opnd_g')) {
						$(this).html('Не все события');
					} else {
						$(this).html('Все события');
					}
				});
			} else {
				$('.event__btn').hide();
			}
		});
	}


	if (window.innerWidth <= 321) {
		jQuery(document).ready(function ($) {
			if ($('.event__card').find('.event__card-item').length > 1) {
				$('.event__card-item:nth-child(3)').slideToggle('');
				const $slickElementEvent = $('.event__card');
				$slickElementEvent.slick({
					mobilefirst: true,
					swipe: true,
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					dotsClass: "my-dots",
					variableWidth: true
				});
			}
		})
	}


	//Спойлеры Издания

	function redrawCheckboxes(element) {
		let boxes;
		if (element.hasClass('active')) {
			boxes = document.querySelectorAll('input[name="checkbox"]:not(:checked)');
			boxes.forEach(el => {
				if (el.checked == 0) {
					el.parentElement.parentElement.style.display = "none";
				}
			})
		} else {
			boxes = document.querySelectorAll('input[name="checkbox"]');
			boxes.forEach(el => {
				el.parentElement.parentElement.style.display = "block";
			})
		}
	}

	if (window.innerWidth <= 321) {
		document.querySelector('.edition__checkbox-item:nth-child(4)').style.order = "-1";
		jQuery(document).ready(function ($) {
			$('.edition__checkbox-name').toggleClass('active');
			redrawCheckboxes($('.edition__checkbox-name'));
			$('.edition__checkbox-name').click(function (event) {
				$(this).toggleClass('active');
				redrawCheckboxes($(this));
			});
		})
	}

	//Swiper-cлайдер "Издания"

	const swiperEdition = new Swiper('.edition__right', {
		slideClass: 'edition__slide',
		wrapperClass: "edition__slider",
		slidesPerColumn: 1,
		slidesPerColumnFill: "row",
		navigation: {
			nextEl: '.edition__slick-next',
			prevEl: '.edition__slick-prev',
		},
		pagination: {
			el: ".edition__pagination",
			type: "fraction"
		},
		breakpoints: {
			1600: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1024: {
				spaceBetween: 50,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			768: {
				spaceBetween: 34,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			501: {
				spaceBetween: 20,
				slidesPerView: 2,
				slidesPerGroup: 2,
			}
		},
	})

	//Тултипы "Проекты"

	tippy('#project__popup-one', {
		content: 'Пример современных тенденций - современная методология разработки ',
		theme: 'popup',
		maxWidth: '264px',
	});

	tippy('#project__popup-two', {
		content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
		theme: 'popup',
		maxWidth: '264px',
	});

	tippy('#project__popup-three', {
		content: 'В стремлении повысить качество ',
		theme: 'popup',
		maxWidth: '264px',
	});

	//Swiper-cлайдер "Проекты"

	const swiperProject = new Swiper('.project__slider', {
		wrapperClass: 'project__slider-list',
		slideClass: 'project__slide',
		loop: true,
		navigation: {
			nextEl: '.project__slick-next',
			prevEl: '.project__slick-prev'
		},
		breakpoints: {
			1600: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1024: {
				spaceBetween: 45,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			768: {
				spaceBetween: 34,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			320: {
				slidesPerView: 1,
			}
		},
	})

	//Инпуты "Контакты"

	var selector = document.querySelector("input[type='tel']");
	var im = new Inputmask("+7(999) 999-99-99");
	im.mask(selector);

	new JustValidate('.contacts__form', {
		rules: {
			name: {
				required: true,
				minLength: 2,
				maxLength: 11
			},

			tel: {
				required: true,
				function: (name, value) => {
					const phone = selector.inputmask.unmaskedvalue();
					return Number(phone) && phone.length === 10
				}
			},
		},
		messages: {
			name: 'Введите имя',
			tel: 'Введите телефон'
		},
	});

	//Карта "Контакты"

	ymaps.ready(init);

	function init() {
		// Создание карты.
		var myMap = new ymaps.Map('map', {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.758468, 37.601088],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 15
		});

		// Создание геообъекта с типом точка (метка).
		var myGeoObject = new ymaps.GeoObject({
			geometry: {
				type: "Point", // тип геометрии - точка
				coordinates: [55.758468, 37.601088] // координаты точки
			}
		});

		var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/contacts/map.svg',
			iconImageSize: [28, 40],
			iconImageOffset: [-3, -42]
		});

		// Размещение геообъекта на карте.
		myMap.geoObjects.add(myPlacemark);
	}

});
