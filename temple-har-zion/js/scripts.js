// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $("#hero figure img").css("-webkit-transform","translateY(" +  (x/10)  + "px)");
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


	  // SWIPER  //
		if (document.querySelector('.testimonials')) {
		var swiper2 = new Swiper('.testimonials', {
			slidesPerView: 1,
			autoplay: {
				delay: 4000,
			},
			speed: 1500,
			loop: true,
			pagination: {
			el: '.swiper-pagination-2',
			clickable: true,
			}
		});
		}
	
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