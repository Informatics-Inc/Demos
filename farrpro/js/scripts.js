
// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#header").addClass("scroll");
	} else {
		$("#header").removeClass("scroll");
	}
	var x = $(this).scrollTop();
	   $(".parallax-1").css("-webkit-transform","translateY(" +  (x/12)  + "px)");
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

// SWIPER Who We Are Values //
if (document.querySelector('.swiper-container')) {
	var values = ['Environmental Treatments', 'Animal Health & Welfare', 'Data Insights & Predictive Analytics']
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		speed: 1550,
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		autoplay: true,
		spaceBetween: 50,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			return '<li class="' + className + '">' + (values[index]) + '</li>';
			},
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
	});
}
$(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
    (this).swiper.autoplay.start();
  });
