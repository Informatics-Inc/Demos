// JavaScript Document
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 25) {
		$("#page-nav").addClass("scroll");
	} else {
		$("#page-nav").removeClass("scroll");
	}
});

 $(window).scroll(function(){
	 inViewport();
 });

 $(window).resize(function(){
	 inViewport();
 });

 function inViewport(){
	 $('.plus.animation').each(function(){
		 var divPos = $(this).offset().top,
             topOfWindow = $(window).scrollTop();
		 
		 if( divPos < topOfWindow+600 ){
			 $(this).addClass('plus-animate');
		 }
	 });
 }

// window.sr = ScrollReveal();
//		sr.reveal('.sr-item', {viewFactor: .4, duration: 1000 }, 200);

$("#toggle-search" ).click(function(){
	$("#hdr-search").toggleClass("open");
});

// Scroll To Top
// When the user clicks on the button, scroll to the top of the document
	function scrollToTop(scrollDuration) {
	const   scrollHeight = window.scrollY,
			scrollStep = Math.PI / ( scrollDuration / 15 ),
			cosParameter = scrollHeight / 2;
	var     scrollCount = 0,
			scrollMargin,
			scrollInterval = setInterval( function() {
				if ( window.scrollY != 0 ) {
					scrollCount = scrollCount + 1;  
					scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
					window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
				} 
				else clearInterval(scrollInterval); 
			}, 15 );
	}

// SLIDER BASIC
$('.slider-basic').slick({
	infinite: true,
	autoplay: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,    
	centerMode: true,   
	variableWidth: true,   
	autoplaySpeed: 4000,
	lazyLoad: 'ondemand',
	dots: false,
	pauseOnHover: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next')
});

$(document).ready(function() {
	var playvid = true;
	var first_slide = $('.slider-full .slide').first();
	var video_first = ($('.slider-full .slide').first().find('video').length > 0 ? false : true);
	if (!video_first) {
		$('#video-1').on('loadstart', function (event) {
			console.log('1');
		});
		$('#video-1').on('canplay', function (event) {
			console.log('2');
			var video = document.getElementById('video-1');
			
			if (playvid) {
				playvid = false;
				console.log('Played');
				//$('#video-1').get(0).play();
				video.play();
			}
		});
	}
	if ($('.slider-full .slide:first-child .lern-more').length) {
		$('.slider-full .slide:first-child .lern-more').hide();
	}
	$('.slider-full').on('init', function(event, slick, currentSlide) {
		learnmore = $('.lern-more');
		learnmore.fadeIn(4500);
	});	
	// SLIDER FULL
	var slider = $('.slider-full').slick({
		infinite: true,
		autoplay: video_first,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		lazyLoad: 'ondemand',
		dots: false,
		pauseOnHover: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
	slider.on('init', function(event, slick) {
		$('#video-1').parent().css('opacity', 0);
	});
	slider.on('afterChange', function(event, slick, currentSlide) {
			vid = $(slick.$slides[currentSlide]).find('video');
			if (vid.length > 0) {
				slider.slick('slickPause');
				$(vid).get(0).play();
				// vid.removeAttr('loop');
				//$(vid).get(0).play();
				//vid.load();
			}
			learnmore = $(slick.$slides[currentSlide]).find('.lern-more');
			learnmore.fadeIn(3000);
	});
	
	slider.on('beforeChange', function(event, slick, currentSlide, nextslide) {
		learnmore = $(slick.$slides[nextslide]).find('.lern-more');
		learnmore.hide();
	//		$(vid).get(0).play();
	//	}
	});
	$
	('video').on('ended', function() {
			slider.slick('slickPlay');
			var vid_id = $(this).attr('id');
			var video = document.getElementById(vid_id);	
			setTimeout(function() {
				slider.slick('slickNext');
			}, 500);
	});	

});


// SLIDER THUMBS
$('.slider-thumbs').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  focusOnSelect: true,
  dots: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  appendDots: '.thumb-wrapper',
  customPaging: function(slider, i) {
        return '<div class="thumbnail">' +$(slider.$slides[i]).find('img').prop('outerHTML')+ '</div>';
}
});

//$('.slider-thumbs-nav > img').click(function() {
//	$('.slider-thumbs').slick('slickGoTo',$(this).index());
//});

//$('.slider-thumbs-nav').slick({
//  slidesToShow: 4,
//  slidesToScroll: 1,
//  asNavFor: '.slider-thumbs',
//  dots: false,
//  arrows: false,
//  centerMode: true,
//  focusOnSelect: true
//});

// NEWS SLIDER
$('.news-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  prevArrow: $('.news-prev'),
  nextArrow: $('.news-next'),
  slidesToShow: 3,
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

// RANDOM LOAD
var random = Math.floor(Math.random() * jQuery('.random').length);
jQuery('.random').hide().eq(random).show();

if (location.search.length && $('.page-list').length) {
        $('html,body').animate({ scrollTop: $('.page-list').offset().top - 15}, 1000);
    }

// NEW ITEMS JANUARY 2020
$('.simple-slider').slick({
	infinite: true,
	autoplay: true,
	speed: 1000,
	fade: true,
	autoplaySpeed: 4000,
	lazyLoad: 'ondemand',
	dots: true,
	pauseOnHover: true,
	prevArrow: $('.simple-prev'),
	nextArrow: $('.simple-next')
});