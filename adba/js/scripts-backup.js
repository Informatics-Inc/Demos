


// Set up an "init" for all page functions
const init = () => {
	document.body.classList.remove('no-js');
	
	// For Local Dev Load Only //
	$(function(){
		$("#load-header").load("header.html");
		$("#load-footer").load("footer.html");
	});
	
	$("#menu-toggle" ).click(function(){
		$("#menu").toggleClass("active");
		$("#menu-toggle").toggleClass("active");
	});
	$('#menu li .toggle').click(function() {
		$('#menu li.active').removeClass('active');
		$(this).parent().addClass('active');
	});
	$(".contact-toggle" ).click(function(){
		$("#contact").toggleClass("active");
	});
	$("#contact-close" ).click(function(){
		$("#contact").toggleClass("active");
	});
	$(".chat-toggle" ).click(function(){
		$(".chat-box").toggleClass("active");
		$(".chat-go").toggleClass("hidden");
	});

	$(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $(".parallax-1").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/4.5)  + "px)");
	});
	
	if (document.querySelector('.swiper-container')) {
		var values = ['People First', 'Wow the Client', 'Improve & Innovation', 'Grow the Business', 'Give Back']
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			speed: 1050,
			slidesPerView: 1,
			centeredSlides: true,
			loop: true,
			spaceBetween: 50,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				return '<li class="' + className + '">' + (values[index]) + '</li>';
				},
			},
			navigation: {
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',
			},
		});
	}

    //parallax scroll
	$(window).on("load scroll", function() {
		var parallaxElement = $(".parallax"),
		parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			windowTop = $(window).scrollTop(),
			elementTop = currentElement.offset().top,
			elementHeight = currentElement.height(),
			viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
			scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			transform: "translate3d(0," + scrolled * 0.15 + "px, 0)"
			});
		}
		});
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
	
	  // -- ANIMATE IN TO VIEW -- //
		var $animation_elements = $('.animate-in');
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
	
	};
  
  // Run the initializer once, for "cold-loads" (the first time your `script` tag is downloaded and executed: 
  init();
  
	// Set up Swup:
	const options = {
		animateHistoryBrowsing: true,
		plugins: [

			new SwupScrollPlugin({
				animateScroll: false
			})
		]
	};
	const swup = new Swup(options);

	
	
  
  // Then, use Swup events to trigger `init` again after every subsequent navigation:
  swup.on('contentReplaced', init);
