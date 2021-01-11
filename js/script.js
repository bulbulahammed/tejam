$(function () {

	"use strict";
	//for menu fixed
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.custom_nav').addClass('menu-bg');
		} else {
			$('.custom_nav').removeClass('menu-bg');
		}
	});
	//Banner Slider 
	$('.banner_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000
	});
	//team slider
	$('.testimonial_text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.team_inner'
	});
	$('.team_inner').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.testimonial_text',
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		centerPadding: 0,
		arrows: true,
		prevArrow: '.team-left',
		nextArrow: '.team-right',
		centerMode: true,
		focusOnSelect: true,
		responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});
})