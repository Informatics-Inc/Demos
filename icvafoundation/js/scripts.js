// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $(".header img").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
	  });
});