$(document).ready(function(){
	"use strict";
	flexslider();
	sticky();
	init();
	attr_slider();
	toggle_menu();
	tab();
	attr_banner();
	fancybox();
});
function flexslider() {
	$('.flexslider').flexslider({
		animation: "fade",
	    controlNav: false,
	    slideshowSpeed: 4000,
	    animationSpeed: 1200,
	    smoothHeight: true,
	    start: function(slider) {
        	var next = jQuery(".banner .slider  .flexslider .slides li.flex-active-slide").next().find(".banner-slides").attr("data-img");
        	jQuery(".slide-child__bg").css('background-image', 'url('+next+')');
        },
        after: function(slider) {
        	if(jQuery(".banner .slider .flexslider .slides li.flex-active-slide").is(":first-child")){
	        	var next = jQuery(".banner .slider  .flexslider .slides li.flex-active-slide").next().find(".banner-slides").attr("data-img");
	        	jQuery(".slide-child__bg").css('background-image', 'url('+next+')');
        	} else {
        		if(jQuery(".banner .slider  .flexslider .slides li.flex-active-slide").is(":last-child")){
		        	var next = jQuery(".banner .slider  .flexslider .slides li:first-child").find(".banner-slides").attr("data-img");
		        	jQuery(".slide-child__bg").css('background-image', 'url('+next+')');
	        	} else {
		        	var next = jQuery(".banner .slider .flexslider .slides li.flex-active-slide").next().find(".banner-slides").attr("data-img");
		        	jQuery(".slide-child__bg").css('background-image', 'url('+next+')');
	        	}
        	}
        }
	})
}
function init(){
	$('.gtg-services__inner .stt-slider').slick({
	   	slidesToShow: 1,
	   	slidesToScroll: 1,
		autoplay: false,
		draggable: true,
	    arrows: false,
	    dots: false,
	    autoplaySpeed: 1500,
	    useTransform: true,
	    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		infinite: true,
		speed: 1000,
		rows: 0,
		fade: true,
	   	asNavFor: '.gtg-services__inner .gtg-services__list'
	});
	$('.gtg-services__inner .stt-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.list-number li.active').removeClass('active');
		$('.list-number li').eq(nextSlide).addClass('active');
	});
	$('.list-number li').on('click', function(e){
		e.preventDefault();
		$('.list-number li.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.slick-slider').slick('slickGoTo', targetSlide );
	});//click()
	$('.gtg-services__inner .gtg-services__list').slick({
	   	slidesToShow: 1,
	   	slidesToScroll: 1,
		autoplay: false,
		draggable: true,
	    arrows: false,
	    dots: false,
	    autoplaySpeed: 1500,
	    useTransform: true,
	    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		infinite: true,
		speed: 1000,
		rows: 0,
		fade: true,
	   	asNavFor: '.gtg-services__inner .stt-slider'
	});
	$('#prev').click(function(event){
		event.preventDefault();
		$('.gtg-services__inner .gtg-services__list').slick('slickPrev')
	})
	$('#next').click(function(event){
		event.preventDefault();
		$('.gtg-services__inner .gtg-services__list').slick('slickNext')
	})
}
function sticky(){
	var header = $('.header-top');
	if (header.length) {
		var offset = header.offset().top;
		$(window).scroll(function(){
			if($(window).scrollTop() > offset) {
				header.addClass('active');
			} else {
				header.removeClass('active');
			}
		})
	}
}
function toggle_menu() {
	var link_panel = $('.link-panel');
	link_panel.click(function(){
		$(this).parent().find('#main-menu').slideToggle();
	})
}
function fancybox(){
	var gallery = $('.gallery__inner');
	gallery.each(function(){
		$(this).find('.gallery__photo .fancybox').attr('data-fancybox', 'images')
		$('[data-fancybox="images"]').fancybox({
			thumbs : {
	        	showOnStart : true
	    	}
		})
	})
}


function attr_slider(){
	var item = $('.slides').find('li');
	if(item.length) {
		item.each(function(){
			var attr = $(this).find('.banner-slides').attr('data-img');
			console.log(attr);
			$(this).find('.banner-slides').css({
				'background-image': 'url('+ attr +')'
			})
		})
	}
}
function attr_banner(){
	var banner = $('.banner-internal')
	if(banner.length) {
		banner_attr = banner.find('img').attr('src');
		banner.css({
			'background-image': 'url('+banner_attr+')'
		})
	}
}
function tab() {
	var current = $('.tab-link');
	current.click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.tabs-services .tab-link').removeClass('current');
		$(this).addClass('current');
		$('.tab-content').removeClass('current');
		$("#"+tab_id).addClass('current');
	})
}