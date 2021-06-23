
// For Local Dev Load Only //
$(function(){
	$("#load-header").load("header.html");
	$("#load-footer").load("footer.html");
});

// Menu and Toggle //
$("#menu-toggle" ).click(function(){
	$("#menu").toggleClass("active");
	$("#menu-toggle").toggleClass("active");
	$('html, body').toggleClass('noscroll'); // <--- Prevent Content Scroll when Menu Open
});
$('#menu li .toggle').click(function() {
	$('#menu li.active').removeClass('active');
	$(this).parent().addClass('active');
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
        },
		1050: {
			slidesPerView: 3,
			spaceBetween: 50,
		}
      }
  });
}

// Light Box //
const lightbox = GLightbox({
	touchNavigation: true,
	loop: true,
	autoplayVideos: true
});
