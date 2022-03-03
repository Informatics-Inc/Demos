// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	$(window).scroll(function() {
	   var x = $(this).scrollTop();
	   $(".header img").css("-webkit-transform","translateY(" +  (x/5)  + "px)");

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
			loop: true,
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
			breakpoints: {
				600: {
					slidesPerView: 3,
					spaceBetween: 25,
					},
				1024: {
				slidesPerView: 4,
				spaceBetween: 25,
				}
			}
		});
	}
});
