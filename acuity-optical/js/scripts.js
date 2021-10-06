// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		autoHeight: true,
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
	  });
	  var swiper2 = new Swiper(".mySwiper2", {
		loop: true,
		autoHeight: true,
		spaceBetween: 10,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		thumbs: {
		  swiper: swiper,
		},
	  });
});

