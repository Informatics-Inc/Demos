
// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#header").addClass("scroll");
	} else {
		$("#header").removeClass("scroll");
	}
	var x = $(this).scrollTop();
	   $(".page-hdr img").css("-webkit-transform","translateY(" +  (x/6)  + "px)");
	   $(".bkg-texture").css("-webkit-transform","translateY(" +  (x/8)  + "px)");
  });

// -- ANIMATE IN TO VIEW -- //
var $animation_elements = $('.animate-in, .btn-text, .fade-in');
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
if (document.querySelector('.swiper-wrapper')) {
	var mySwiper = new Swiper('.swiper-wrapper', {
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

// SWIPER  //
		if (document.querySelector('.testimonials')) {
		var swiper2 = new Swiper('.testimonials', {
			slidesPerView: 1,
			autoplay: {
				delay: 6000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			speed: 2500,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
		}
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
				slidesPerView: 3,
				spaceBetween: 25,
				},
				1100: {
				slidesPerView: 3,
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

	// -- PARALLAX -- //
	var image = document.getElementsByClassName('parallax');
	new simpleParallax(image, {
	scale: 1.2,
	overflow: true
	});
	var bkgimage = document.getElementsByClassName('parallax-bkg');
	new simpleParallax(bkgimage, {
	scale: 1.2,
	orientation: 'down'
	});

$('.swiper-single').on('mouseenter', function(e){
    console.log('stop autoplay');
    mySwiper.stopAutoplay();
  })
  $('.swiper-single').on('mouseleave', function(e){
    console.log('start autoplay');
    mySwiper.startAutoplay();
  })

// -- SEARCH TOGGLE -- //
$("#search-toggle").click(function(){
	$("#hdr-search").toggleClass("active");
});

$("#search-close").click(function(){
	$("#hdr-search").toggleClass("active");
});