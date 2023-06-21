window.addEventListener('scroll', function() {
  var image = document.getElementById('image');
  var scrollPosition = window.scrollY;

  // Define the scaling factor based on the scroll position
  var scaleFactor = 1 + (scrollPosition * 0.001) + 0;
 
  // Define the opacity factor based on the scroll position
  var opacityFactor = Math.min(scrollPosition / 500, 1); // Adjust 500 to control the speed of fading

  // Apply the scale and opacity transformations
  image.style.transform = 'scale(' + scaleFactor + ')';
  image.style.opacity = 1 - opacityFactor;
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

//  -- SWIPER HOMEPAGE -- //
var listArray = ["Education","Healthcare","Commercial"];
var swiperHero = new Swiper('.swiper-hero', {
  
  // Optional parameters
        loop: true,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,        
        autoHeight: false,
        autoplay: {
            delay: 3500,
        }, 
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
		speed: 1250,
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<div class="' + className + '">' + '<p>'+ listArray[index]+'</p>' + '<i></i>' + '<b></b>'  + '</div>';
              },
        
        },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})
$(".swiper-button-pause").click(function(){
  swiperHero.autoplay.stop();
});

// Project Detail Slider //
var swiper = new Swiper(".detail-slider", {
  loop: false,
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 0,
  initialSlide: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

