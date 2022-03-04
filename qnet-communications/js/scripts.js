// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	var sections = $('section')
		  , nav = $('#header')
		  , nav_height = nav.outerHeight();
		
		$(window).on('scroll', function () {
		  var cur_pos = $(this).scrollTop();
		  
		  sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();
			
			if (cur_pos >= top && cur_pos <= bottom) {
			  nav.find('a').removeClass('active');
			  sections.removeClass('active');
			  
			  $(this).addClass('active');
			  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		  });
		});
		
		nav.find('a').on('click', function () {
		  var $el = $(this)
			, id = $el.attr('href');
		  
		  $('html, body').animate({
			scrollTop: $(id).offset().top - nav_height + 5
		  }, 500);
		  
		  return false;
		});	 
		  
		   $(window).scroll(function() {
			  var x = $(this).scrollTop();
			  $(".header img").css("-webkit-transform","translateY(" +  (x/4)  + "px)");
			  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
		  });
		
		// -- ADD CLASS ON SCROLL --//
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll > 25) {
				$("#header").addClass("scroll");
			} else {
				$("#header").removeClass("scroll");
			}
		});
	
	// -- ANIMATE INTO VIEW -- //
	$(document).on("scroll", function () {
	  var pageTop = $(document).scrollTop()
	  var pageBottom = pageTop + $(window).height()
	  var tags = $(".content section .container")
	
	  for (var i = 0; i < tags.length; i++) {
		var tag = tags[i]
	
		if ($(tag).position().top < pageBottom) {
		  $(tag).addClass("visible")
		} 
	  }
	})
	
	});
	