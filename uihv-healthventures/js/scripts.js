// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	$(window).scroll(function() {
	   var x = $(this).scrollTop();
	   $("#hero img, .header img").css("-webkit-transform","translateY(" +  (x/5)  + "px)");

	   var scroll = $(window).scrollTop();
		 if (scroll > 75) {
			 $("#header").addClass("scroll");
		 } else {
			 $("#header").removeClass("scroll");
		 }
		 
   });

   // SWIPER  //
	if (document.querySelector('.carousel')) {
		var swiper2 = new Swiper('.carousel', {
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
			},
			speed: 1000,
			
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
			breakpoints: {
				600: {
					slidesPerView: 2,
					spaceBetween: 25,
					},
				1024: {
				slidesPerView: 3,
				spaceBetween: 25,
				}
			},
			watchOverflow: true
		});
	}
	var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
		speed: 1000,
        centeredSlides: true,
		effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });
	  $(".carousel").hover(function() {
		(this).swiper.autoplay.stop();
	  }, function() {
		(this).swiper.autoplay.start();
	  });
});
