
// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#header").addClass("scroll");
	} else {
		$("#header").removeClass("scroll");
	}
	var x = $(this).scrollTop();
	   $(".bkg-parallax").css("-webkit-transform","translateY(" +  (x/12)  + "px)");
	   $(".page-hdr figure img").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
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