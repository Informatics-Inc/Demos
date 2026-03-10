
// -- Search Toggle -- //
$("#lang-btn").click(function(){
	$("#lang-options").toggleClass("open");
});

$(".table-dropdown button").click(function(){
	$(this).toggleClass("open");
});
// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#site-header").addClass("scroll");
	} else {
		$("#site-header").removeClass("scroll");
	}
	var x = $(this).scrollTop();
	   $(".page-header figure img").css("-webkit-transform","translateY(" +  (x/6)  + "px)");
	   $(".bkg-texture").css("-webkit-transform","translateY(" +  (x/8)  + "px)");
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

// Swiper Sliders //
var swiper = new Swiper(".scroll-list", {
  slidesPerView: 4,
  spaceBetween: 25,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.5,
    },
    "@0.5": {
      slidesPerView: 2,
    },
    "@.75": {
      slidesPerView: 2.5,
    }
  },
});
