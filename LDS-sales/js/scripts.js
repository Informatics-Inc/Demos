// Menu and Toggle //
$("#menu-toggle" ).click(function(){
	$("#menu").toggleClass("active");
	$("#menu-toggle").toggleClass("active");
	$('html, body').toggleClass('noscroll'); // <--- Prevent Content Scroll when Menu Open
});
$('#display-nav a').click(function() {
	$('#display-nav li.active').removeClass('active');
	$(this).parent().addClass('active');
});
$('#display-list').click(function() {
	$('.product-grid').addClass('product-list');
});
$('#display-grid').click(function() {
	$('.product-grid').removeClass('product-list');
});

// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#site-header").addClass("scroll");
	} else {
		$("#site-header").removeClass("scroll");
	}
  });

// -- PARALLAX HERO IMAGES -- //
$(window).scroll(function() {
	var x = $(this).scrollTop();
	$(".page-header img").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
	$(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
});

// SWIPER  //
if (document.querySelector('.swiper-container')) {
	var swiper = new Swiper('.swiper-container', {
		pagination: {
		  el: '.swiper-pagination',
		},
		autoplay: {
			delay: 3000,
		},
		effect: 'fade',
			fadeEffect: {
			crossFade: true
  		},
		speed: 1000,
	});
}

// SWIPER NUMBER 2  //
if (document.querySelector('.testimonials')) {

var swiper2 = new Swiper('.testimonials', {
	slidesPerView: 1,
	autoplay: {
		delay: 3000,
	},
	speed: 1000,
	loop: true,
	pagination: {
	  el: '.swiper-pagination-2',
	  clickable: true,
	},
	breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        }
      }
  });
}

// PAUSE SWIPER ON HOVER //
$(".swiper-container, .testimonials").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
    (this).swiper.autoplay.start();
  });

// -- ANIMATE IN TO VIEW -- //
var $animation_elements = $('.animate-in');
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

// -- Navigation Active State -- //
$('.gallery-nav').on('click', 'button', function() {
    $('.gallery-nav button.active').removeClass('active');
    $(this).addClass('active');
});