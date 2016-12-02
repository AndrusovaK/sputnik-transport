$(document).ready(function() {

	//Slider initialization

	$('.services-slider').slick({
		prevArrow: $('.services-slider__prev'),
		nextArrow: $('.services-slider__next'),
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1540,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.clients-slider__inner').slick({
		prevArrow: $('.clients-slider__prev'),
		nextArrow: $('.clients-slider__next'),
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.reviews-slider').slick({
		prevArrow: $('.reviews-slider__prev'),
		nextArrow: $('.reviews-slider__next'),
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});


// Яндекс карта
/*ymaps.ready(init);
var map;

function init() {
	map = new ymaps.Map('map', {
		center: [59.900946, 30.353367],
		zoom: 17,
		controls: []
	});

	var balloonLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="map__balloon-wrapper">' +
			'<div class="map__balloon">' +
			'<span class="map__balloon-title">Головной офис</span>' +
			'<p class="map__balloon-address">г. Санкт-Петербург, <br>' +
			'Камчатская улица, д. 13А</p>' +
			'</div>' +
			'<div class="map__balloon-triangle"></div>' +
			'</div>'
	);

	var placemark = new ymaps.Placemark([59.900556, 30.350434], {}, {
		hideIconOnBalloonOpen: true,
		balloonLayout: balloonLayout,
		balloonOffset: [-40, -140]
	});

	map.geoObjects.add(placemark);
	map.behaviors.disable('scrollZoom');
	placemark.balloon.open();
}*/
