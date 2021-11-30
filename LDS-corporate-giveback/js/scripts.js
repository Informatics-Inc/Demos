// JavaScript Document

$("#toggle-search" ).click(function(){
	$(this).toggleClass("open");
	$("#hdr-search").toggleClass("open");
});

$('.col-inner button').click(function() {
	$('button.active').removeClass('active');
	$(this).addClass('active');
});

$('.results-slider').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnHover: true,
	prevArrow: $('#prev'),
	nextArrow: $('#next'),
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 900,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });

	$(window).scroll(function() {
		var x = $(this).scrollTop();
		$(".hero-img .clip").css("-webkit-transform","translateY(" +  (x/4)  + "px)");
		$(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
	});

	magnify("map-zoom", 3);