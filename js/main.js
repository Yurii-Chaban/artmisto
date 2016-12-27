$(document).ready(function() {

	/*main slider*/
	$('.fade').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	/*for random show img*/
	var img = $('.animate-img');
	var i = Math.floor(Math.random() * img.length);
	img.eq(i).show();

	var bg = $('.animate-img').eq(i);
});