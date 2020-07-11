$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		readOnly: true,
		starWidth: "12px",
		ratedFill: "#ffa726"
	});

	$('.product-slider__inner').slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	var mixer = mixitup('.products__inner-box');

});