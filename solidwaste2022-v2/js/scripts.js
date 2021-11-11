// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $(".header img").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");

		  var scroll = $(window).scrollTop();
			if (scroll > 75) {
				$("#header").addClass("scroll");
			} else {
				$("#header").removeClass("scroll");
			}
			
	  });

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			document.getElementById("btn-top").style.opacity = "1";
		} else {
			document.getElementById("btn-top").style.opacity = "0";
		}
	}  
	var originalSize = $('html').css('font-size');
	// reset        
	$(".resetMe").click(function() {
		$('html').css('font-size', originalSize);
	});

	// Increase Font Size          
	$(".increase").click(function() {
		var currentSize = $('html').css('font-size');
		var currentSize = parseFloat(currentSize) * 1.1;
		$('html').css('font-size', currentSize);
		return false;
	});

	// Decrease Font Size       
	$(".decrease").click(function() {
		var currentFontSize = $('html').css('font-size');
		var currentSize = $('html').css('font-size');
		var currentSize = parseFloat(currentSize) * 0.9;
		$('html').css('font-size', currentSize);
		return false;
	});
	  
  
});
