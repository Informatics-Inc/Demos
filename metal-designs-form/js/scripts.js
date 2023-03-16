// Init tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// -- Search Toggle -- //
$(".search-toggle").click(function(){
	$("#hdr-search").toggleClass("open");
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
	   $(".page-header figure img").css("-webkit-transform","translateY(" +  (x/6)  + "px)");
	   $(".bkg-texture").css("-webkit-transform","translateY(" +  (x/8)  + "px)");
  });


