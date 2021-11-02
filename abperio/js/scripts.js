// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $(".header .dots").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");

		  var scroll = $(window).scrollTop();
			if (scroll > 50) {
				$("#header").addClass("scroll");
			} else {
				$("#header").removeClass("scroll");
			}
	  });
});