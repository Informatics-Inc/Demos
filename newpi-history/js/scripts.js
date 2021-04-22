// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $("#hero figure img").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
	  });
});

// -- SEARCH TOGGLE -- //
$("#nav-toggle").click(function () {
  $("#menu").toggleClass("active");
  $('html, body').toggleClass('noscroll');
});

// -- ADD CLASS ON SCROLL --//
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll > 150) {
    $("#nav-main").addClass("active");
  } else {
    $("#nav-main").removeClass("active");
  }
  });

  // SWIPER Who We Are Values //
	if (document.querySelector('.swiper-container')) {
		var swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      autoHeight: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	}
