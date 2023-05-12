
// -- Search Toggle -- //
$("#user-menu-toggle").click(function(){
	$("#user-menu-list").toggleClass("open");
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
	   $(".page-header figure imgs").css("transform","scale(" +  (1 + '.' + (x/800)) );
	   $(".page-header figure img").css("-webkit-transform","translateZ(" +  (x/8)  + "px)");
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

// Swiper Sliders //
var swiper = new Swiper(".scroll-list", {
  slidesPerView: 4,
  spaceBetween: 25,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.5,
    },
    "@0.5": {
      slidesPerView: 2.5,
    },
    "@.75": {
      slidesPerView: 2.75,
    },
    "@1": {
      slidesPerView: 3.75,
    },
    "@1.25": {
      slidesPerView: 4.65,
    },
    "@1.75": {
      slidesPerView: 5.5,
    },
  },
});

// Fix the Sec Nav //
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navFix()};

// Get the navbar
var navbar = document.getElementById("sec-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navFix() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 



// Date Picker //
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#dp1').datepicker({

  beforeShowDay: function(date) {
    return date.valueOf() >= now.valueOf();
  },
  autoclose: true

}).on('changeDate', function(ev) {
  if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {

    var newDate = new Date(ev.date);
    newDate.setDate(newDate.getDate() + 1);
    checkout.datepicker("update", newDate);

  }
  $('#dp2')[0].focus();
});


var checkout = $('#dp2').datepicker({
  beforeShowDay: function(date) {
    if (!checkin.datepicker("getDate").valueOf()) {
      return date.valueOf() >= new Date().valueOf();
    } else {
      return date.valueOf() > checkin.datepicker("getDate").valueOf();
    }
  },
  autoclose: true

}).on('changeDate', function(ev) {});


$(".swiper-button-pause").click(function(){
  swiperHero.autoplay.stop();
});


