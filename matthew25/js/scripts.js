
// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#header").addClass("scroll");
	} else {
		$("#header").removeClass("scroll");
	}
	var x = $(this).scrollTop();
	   $(".page-hdr img").css("-webkit-transform","translateY(" +  (x/12)  + "px)");
	   $(".parallax-2").css("-webkit-transform","translateY(" +  (x/11)  + "px)");
  });

// -- ANIMATE IN TO VIEW -- //
var $animation_elements = $('.animate-in, .btn-text');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
	var $element = $(this);
	var element_height = $element.outerHeight();
	var element_top_position = $element.offset().top;
	var element_bottom_position = (element_top_position + element_height);

	//check to see if this current container is within viewport
	if ((element_bottom_position >= window_top_position) &&
	(element_top_position <= window_bottom_position)) {
	$element.addClass('visible');
	} else {
	
	}
	});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// -- SWIPER HOMEPAGE FEED -- //
if (document.querySelector('.swiper-content-feed')) {
	var mySwiper = new Swiper('.swiper-content-feed', {
	// Optional parameters
	slidesPerView: 1,
	loop: true,
	speed: 750,
	autoplay: {
		delay: 2500,
	},
	breakpoints: {
		640: {
		slidesPerView: 2,
		spaceBetween: 25,
		},
		960: {
		slidesPerView: 2,
		spaceBetween: 25,
		},
		1100: {
		slidesPerView: 2,
		spaceBetween: 25,
		}
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next-2',
		prevEl: '.swiper-button-prev-2',
	},
	pagination: {
		el: '.swiper-pagination-2',
		clickable: true,
	}
	})
}

$(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
    (this).swiper.autoplay.start();
  });

// -- SEARCH TOGGLE -- //
$("#search-toggle").click(function(){
	$("#hdr-search").toggleClass("active");
});

$("#search-close").click(function(){
	$("#hdr-search").toggleClass("active");
});