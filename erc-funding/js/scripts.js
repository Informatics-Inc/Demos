
// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#header").addClass("scroll");
	} else {
		$("#header").removeClass("scroll");
	}
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
if (document.querySelector('.mySwiper')) {
	var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		autoplay: {
			delay: 1000,
		  },
		spaceBetween: 20,
		speed: 1000,
		loop: true,
		breakpoints: {
			640: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 4,
			},
			1024: {
			  slidesPerView: 6,
			},
		  },
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