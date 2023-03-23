// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $(".parallax-1").css("-webkit-transform","translateY(" +  (x/6)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
	  });

	  $(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$("#header").addClass("scroll");
		} else {
			$("#header").removeClass("scroll");
		}
	  });
	  
	  // -- SEARCH TOGGLE -- //
		$(".hdr-search-toggle").click(function () {
			$("#hdr-search").toggleClass("active");
		});

		// -- SWIPER HERO -- //
		if (document.querySelector('.swiper-hero')) {
			var mySwiper = new Swiper('.swiper-hero', {
			// Optional parameters
			slidesPerView: 1,
			loop: true,
			speed: 750,
			effect: 'fade',
			autoplay: {
				delay: 2500,
			},
			pagination: {
				el: '.swiper-pagination-3',
				clickable: true,
			}
			})
		}
	  // SWIPER  //
		if (document.querySelector('.testimonials')) {
		var swiper2 = new Swiper('.testimonials', {
			slidesPerView: 1,
			autoplay: {
				delay: 4000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			speed: 1500,
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

		$(".gen-1").hover(function() {
    		$(".gen-img").toggleClass("active");
			$(".gen-1-img").toggleClass("active");
    	});
		$(".gen-2").hover(function() {
    		$(".gen-img").toggleClass("active");
			$(".gen-2-img").toggleClass("active");
    	});
		$(".gen-3").hover(function() {
    		$(".gen-img").toggleClass("active");
			$(".gen-3-img").toggleClass("active");
    	});
		$(".gen-4").hover(function() {
    		$(".gen-img").toggleClass("active");
			$(".gen-4-img").toggleClass("active");
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

});