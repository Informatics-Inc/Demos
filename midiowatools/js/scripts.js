// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $(".header img").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
		  $(".boxy img").css("-webkit-transform","translateY(" +  (x/2)  + "px)");

	  });


// --- Sticky Nav --- //
window.addEventListener("scroll", function() {
		let navArea = document.getElementById("header");

		if (window.pageYOffset > 0) {
		navArea.classList.add("is-sticky");
		} else {
		navArea.classList.remove("is-sticky");
		}
		});

		window.addEventListener("scroll", function() {
			let navArea = document.getElementById("nav-wrapper");
	
			if (window.pageYOffset > 0) {
			navArea.classList.add("is-sticky");
			} else {
			navArea.classList.remove("is-sticky");
			}
			});

		});

			  